import { CREATE_SOCKET, DESTROY_SOCKET } from '../actions/types';

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
    case DESTROY_SOCKET:
      return initialState;
    default:
      return state;
  }
}
