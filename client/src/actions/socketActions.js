import io from 'socket.io-client';
import { addRoom, addMessage, changeRoom } from './roomActions';
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
  socket.on('join room', (data) => {
    dispatch(addRoom({ roomName: data, messages: [] }));
  });
  socket.on('set room', (data) => {
    dispatch(changeRoom(data));
  });
  socket.on('message', (data) => {
    dispatch(addMessage(data));
  });
};

export { createSocket };
