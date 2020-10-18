import io from 'socket.io-client';
import { SIGN_IN, SIGN_UP, SIGN_OUT } from './types';
import { Session } from '../requests/session';
import { User } from '../requests/user';

const createSession = () => (dispatch) => {
  Session.create(userCredentials).then((user) => {
    dispatch({ type: SIGN_IN, payload: user });
  });
};
const destroySession = () => (dispatch) => {
  Session.destroy().then(() => {
    dispatch({ type: SIGN_OUT });
  });
};
const createUser = () => (dispatch) => {
  User.create().then(() => {
    dispatch({ type: SIGN_UP, payload: user });
  });
};

export { createSession, destroySession, createUser };
