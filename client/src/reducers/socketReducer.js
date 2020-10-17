import { CREATE_SOCKET } from '../actions/types';

const initialState = {
  socket: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };
    default:
      return state;
  }
}
