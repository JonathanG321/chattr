import {
  ADD_ROOM,
  ADD_MESSAGE,
  CHANGE_ROOM,
  REMOVE_ROOM,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from './types';

const addRoom = (room) => async (dispatch) => {
  dispatch({ type: ADD_ROOM, payload: room });
};

const removeRoom = (room) => async (dispatch) => {
  dispatch({ type: REMOVE_ROOM, payload: room });
};

const changeRoom = (roomName) => async (dispatch) => {
  dispatch({ type: CHANGE_ROOM, payload: roomName });
  dispatch(removeNotification(roomName));
};

const addMessage = (message) => async (dispatch) => {
  dispatch({ type: ADD_MESSAGE, payload: message });
  dispatch(addNotification(message.roomName));
};

const addNotification = (notification) => async (dispatch) => {
  dispatch({ type: ADD_NOTIFICATION, payload: notification });
};

const removeNotification = (notification) => async (dispatch) => {
  dispatch({ type: REMOVE_NOTIFICATION, payload: notification });
};

export { addRoom, addMessage, changeRoom, removeRoom, addNotification, removeNotification };
