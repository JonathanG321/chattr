import { ADD_ROOM, ADD_MESSAGE } from './types';

const addRoom = (room) => async (dispatch) => {
  dispatch({ type: ADD_ROOM, payload: room });
};

const addMessage = (data) => async (dispatch) => {
  dispatch({ type: ADD_MESSAGE, payload: data });
};

const sendMessage = (data) => async (dispatch, ...args) => {
  console.log(args);
  dispatch({ type: ADD_MESSAGE, payload: data });
};

export { addRoom, addMessage, sendMessage };
