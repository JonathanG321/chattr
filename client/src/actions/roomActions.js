import { ADD_ROOM, ADD_MESSAGE, CHANGE_ROOM } from './types';

const addRoom = (room) => async (dispatch) => {
  dispatch({ type: ADD_ROOM, payload: room });
};

const changeRoom = (roomName) => async (dispatch) => {
  dispatch({ type: CHANGE_ROOM, payload: roomName });
};

const addMessage = (data) => async (dispatch, ...args) => {
  dispatch({ type: ADD_MESSAGE, payload: data });
};

export { addRoom, addMessage, changeRoom };
