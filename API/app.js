const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const cors = require('cors');
const User = require('./models/user.model');
require('dotenv').config();
require('./db/client');

const Authentication = require('./middleware/authentication.middleware');
const apiRouter = require('./routers/api.router');

const redisClient = redis.createClient();

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.join('General Chat');
  socket.emit('join room', 'General Chat');
  socket.emit('set room', 'General Chat');
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
    otherSocket.emit('join room', newRoomName);
    socket.emit('join room', newRoomName);
  });
  socket.on('message', async (data) => {
    const user = await User.findOne({ where: { username: socket.handshake.query.username } });
    io.in(data.roomName).emit('message', { ...data, user });
  });
  socket.on('disconnect', () => {
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
      otherSocket.leave(newRoomName);
      socket.leave(newRoomName);
      otherSocket.emit('leave room', newRoomName);
      io.emit('leave room', newRoomName);
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

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`the server is listening at http://localhost:${PORT}`);
});
