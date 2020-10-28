const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const cors = require('cors');
const path = require('path');
const User = require('./models/user.model');
const socketEvent = require('./lib');
require('dotenv').config();
require('./db/client');

const Authentication = require('./middleware/authentication.middleware');
const apiRouter = require('./routers/api.router');
const { ENABLE_ROOM } = require('./lib');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(logger('dev'));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const redisClientUrl = process.env.REDIS_URL || undefined;
const redisClient = redis.createClient(redisClientUrl);
redisClient.on('error', console.error);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({ client: redisClient }),
  }),
);

app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  }),
);

app.use(Authentication.setCurrentUser);

io.on('connection', async (socket) => {
  console.log('a user connected');
  socket.join(socketEvent.GENERAL);
  socket.emit(socketEvent.JOIN_ROOM, socketEvent.GENERAL);
  socket.emit(socketEvent.SET_ROOM, socketEvent.GENERAL);
  const user = await User.findOne({ where: { username: socket.handshake.query.username } });
  Object.keys(io.sockets.sockets).forEach((socketName) => {
    const otherSocket = io.sockets.sockets[socketName];
    const username = socket.handshake.query.username;
    const otherUsername = otherSocket.handshake.query.username;
    if (username === otherUsername) {
      return;
    }
    const usernames = [username, otherUsername];
    usernames.sort();
    const newRoomName = usernames[0] + usernames[1];
    otherSocket.join(newRoomName);
    socket.join(newRoomName);
    otherSocket.emit(socketEvent.JOIN_ROOM, newRoomName);
    socket.emit(socketEvent.JOIN_ROOM, newRoomName);
    io.in(newRoomName).emit(socketEvent.MESSAGE, {
      user,
      roomName: newRoomName,
      date: new Date(),
      message: `${socket.handshake.query.username} has joined the chat`,
      isAlert: true,
    });
    io.in(newRoomName).emit(socketEvent.ENABLE_ROOM, newRoomName);
  });
  io.in(socketEvent.GENERAL).emit(socketEvent.MESSAGE, {
    user,
    roomName: socketEvent.GENERAL,
    date: new Date(),
    message: `${socket.handshake.query.username} has joined the chat`,
    isAlert: true,
  });
  socket.on(socketEvent.MESSAGE, async (data) => {
    const user = await User.findOne({ where: { username: socket.handshake.query.username } });
    io.in(data.roomName).emit(socketEvent.MESSAGE, { ...data, user });
  });
  socket.on('disconnect', () => {
    console.log();
    Object.keys(io.sockets.sockets).forEach((socketName) => {
      const otherSocket = io.sockets.sockets[socketName];
      const username = socket.handshake.query.username;
      const otherUsername = otherSocket.handshake.query.username;
      if (username === otherUsername) {
        return;
      }
      const usernames = [username, otherUsername];
      usernames.sort();
      const newRoomName = usernames[0] + usernames[1];
      otherSocket.emit(socketEvent.LEAVE_ROOM, newRoomName);
      io.in(newRoomName).emit(socketEvent.MESSAGE, {
        user,
        roomName: newRoomName,
        date: new Date(),
        message: `${socket.handshake.query.username} has left the chat`,
        isAlert: true,
      });
      io.emit(socketEvent.LEAVE_ROOM, newRoomName);
      otherSocket.leave(newRoomName);
      socket.leave(newRoomName);
    });
    io.in(socketEvent.GENERAL).emit(socketEvent.MESSAGE, {
      user,
      roomName: socketEvent.GENERAL,
      date: new Date(),
      message: `${socket.handshake.query.username} has left the chat`,
      isAlert: true,
    });
    console.log('user disconnected');
  });
});

const allowList = ['http://localhost:3001'];
const corsOptions = {
  origin: allowList,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};
app.use(cors(corsOptions));

app.use('/api', apiRouter);

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`the server is listening at http://localhost:${PORT}`);
});
