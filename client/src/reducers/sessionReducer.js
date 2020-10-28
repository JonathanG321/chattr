import { SIGN_IN, SIGN_OUT, SIGN_IN_FAILURE, LOAD } from '../actions/types';

const initialState = {
  user: null,
  errors: null,
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
        errors: null,
        isLoading: false,
      };
    case SIGN_OUT:
      return { ...initialState, isLoading: false };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        user: null,
        errors: action.payload,
        isLoading: false,
      };
    case LOAD:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
