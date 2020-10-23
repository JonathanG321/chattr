import io from 'socket.io-client';
import { addRoom, addMessage } from './roomActions';
import { CREATE_SOCKET } from './types';

const createSocket = (username) => (dispatch) => {
  const socket = io('http://localhost:3000', {
    query: {
      username,
    },
  });
  dispatch(initSocketEvents(socket));
  dispatch({ type: CREATE_SOCKET, payload: socket });
};

const initSocketEvents = (socket) => (dispatch) => {
  socket.on('connect', () => {
    console.log('connected');
  });
  socket.on('join room', (data) => {
    dispatch(addRoom({ roomName: data, messages: [] }));
  });
  socket.on('message', (data) => {
    dispatch(addMessage(data));
  });
  socket.on('disconnect', () => {
    console.log('disconnected');
  });
};

export { createSocket };
