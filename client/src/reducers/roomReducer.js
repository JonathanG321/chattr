import {
  ADD_ROOM,
  ADD_MESSAGE,
  CHANGE_ROOM,
  REMOVE_ROOM,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  SIGN_OUT,
  ENABLE_ROOM,
  DISABLE_ROOM,
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
        return null;
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
    case DISABLE_ROOM:
      const newRoomsDisabled = state.rooms.map((room) => {
        if (room.roomName === action.payload) {
          room.disabled = true;
        }
        return room;
      });
      return {
        ...state,
        rooms: newRoomsDisabled,
      };
    case ENABLE_ROOM:
      const newRoomsEnabled = state.rooms.map((room) => {
        if (room.roomName === action.payload) {
          room.disabled = false;
        }
        return room;
      });
      return {
        ...state,
        rooms: newRoomsEnabled,
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
        return null;
      });
      return {
        ...state,
        notifications: newNotifications,
      };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}
