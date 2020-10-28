import io from 'socket.io-client';
import { BASE_URL } from '../requests/base';
import {
  addRoom,
  addMessage,
  changeRoom,
  removeRoom,
  disableRoom,
  enableRoom,
} from './roomActions';
import { CREATE_SOCKET } from './types';

const createSocket = (username) => (dispatch) => {
  const socket = io(BASE_URL, {
    query: {
      username,
    },
  });
  dispatch(initSocketEvents(socket));
  dispatch({ type: CREATE_SOCKET, payload: socket });
};

const initSocketEvents = (socket) => (dispatch) => {
  socket.on('connect', () => {});
  socket.on('join room', (data) => {
    const displayRoomName = data.replace(socket.query.username, '');
    dispatch(addRoom({ roomName: data, displayRoomName, messages: [], disabled: false }));
  });
  socket.on('leave room', (data) => {
    dispatch(removeRoom(data));
    dispatch(disableRoom(data));
  });
  socket.on('enable room', (data) => {
    dispatch(enableRoom(data));
  });
  socket.on('set room', (data) => {
    dispatch(changeRoom(data));
  });
  socket.on('message', (data) => {
    dispatch(addMessage(data));
  });
};

export { createSocket };
