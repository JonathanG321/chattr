import { ADD_ROOM, ADD_MESSAGE, CHANGE_ROOM } from './types';

const addRoom = (room) => async (dispatch) => {
  dispatch({ type: ADD_ROOM, payload: room });
};

const changeRoom = (roomName) => async (dispatch) => {
  dispatch({ type: CHANGE_ROOM, payload: roomName });
};

const sendMessage = (data) => async (dispatch, ...args) => {
  console.log(args);
  dispatch({ type: ADD_MESSAGE, payload: data });
};

export { addRoom, sendMessage, changeRoom };
