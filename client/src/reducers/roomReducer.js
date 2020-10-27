import { ADD_ROOM, ADD_MESSAGE, CHANGE_ROOM, REMOVE_ROOM } from '../actions/types';

const initialState = {
  rooms: [],
  currentRoom: null,
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
    default:
      return state;
  }
}
