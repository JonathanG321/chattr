import { SIGN_IN, SIGN_UP, SIGN_OUT, SIGN_IN_FAILURE, SIGN_UP_FAILURE } from '../actions/types';

const initialState = {
  user: null,
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
        errors: null,
      };
    case SIGN_UP:
      return {
        ...state,
        user: action.payload,
        errors: null,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        user: null,
        errors: action.payload,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        user: null,
        errors: action.payload,
      };
    default:
      return state;
  }
}
