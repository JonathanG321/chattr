import io from 'socket.io-client';
import initSocketEvents from '../socket';
import { CREATE_SOCKET } from './types';

const createSocket = (username) => (dispatch) => {
  const socket = io('http://localhost:3000', {
    query: {
      username,
    },
  });
  initSocketEvents(socket, dispatch);
  dispatch({ type: CREATE_SOCKET, payload: socket });
};

export { createSocket };
