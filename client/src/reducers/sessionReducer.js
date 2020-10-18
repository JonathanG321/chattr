import { SIGN_IN, SIGN_UP } from '../actions/types';

const initialState = {
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
