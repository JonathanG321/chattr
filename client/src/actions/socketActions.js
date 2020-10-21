import io from 'socket.io-client';
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
  socket.on('connect', () => {});
  socket.on('message', () => {});
  socket.on('disconnect', () => {});
};

export { createSocket };
