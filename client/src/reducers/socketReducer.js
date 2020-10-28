import { CREATE_SOCKET, SIGN_OUT } from '../actions/types';

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
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}
