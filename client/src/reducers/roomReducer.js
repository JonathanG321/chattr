import {
  ADD_ROOM,
  ADD_MESSAGE,
  CHANGE_ROOM,
  REMOVE_ROOM,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from '../actions/types';

const initialState = {
  rooms: [],
  currentRoom: null,
  notifications: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ROOM:
      const roomExists = !!state.rooms.find((room) => action.payload.roomName === room.roomName);
      if (roomExists) {
        return state;
      }
      return {
        ...state,
        rooms: state.rooms.concat([action.payload]),
      };
    case REMOVE_ROOM:
      const roomsWithoutRoom = state.rooms.map((room) => {
        if (room.roomName !== action.payload.roomName) {
          return room;
        }
        return;
      });
      return {
        ...state,
        rooms: roomsWithoutRoom,
      };
    case CHANGE_ROOM:
      return {
        ...state,
        currentRoom: action.payload,
      };
    case ADD_MESSAGE:
      const newRooms = state.rooms.map((room) => {
        if (room.roomName === action.payload.roomName) {
          room.messages = [action.payload].concat(room.messages);
        }
        return room;
      });
      return {
        ...state,
        rooms: newRooms,
      };
    case ADD_NOTIFICATION:
      if (state.notifications.includes(action.payload) || state.currentRoom === action.payload) {
        return state;
      }
      return {
        ...state,
        notifications: state.notifications.concat([action.payload]),
      };
    case REMOVE_NOTIFICATION:
      const newNotifications = state.notifications.map((notification) => {
        if (notification !== action.payload) {
          return notification;
        }
        return;
      });
      return {
        ...state,
        notifications: newNotifications,
      };
    default:
      return state;
  }
}
