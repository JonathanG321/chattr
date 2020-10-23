import { ADD_ROOM, ADD_MESSAGE } from '../actions/types';

const initialState = {
  rooms: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ROOM:
      return {
        ...state,
        rooms: state.rooms.concat([action.payload]),
      };
    case ADD_MESSAGE:
      // const state.rooms.map((room) => {
      //   if (room.roomName === action.payload.roomName) {
      //     return room;
      //   }
      // });
      return {
        ...state,
        rooms: state.rooms.concat([action.payload]),
      };
    default:
      return state;
  }
}
