import { SIGN_IN, SIGN_UP, SIGN_OUT, SIGN_IN_FAILURE, SIGN_UP_FAILURE } from './types';
import { Session } from '../requests/session';
import { User } from '../requests/user';

const createSession = (userCredentials) => (dispatch) =>
  Session.create(userCredentials)
    .then((user) => dispatch({ type: SIGN_IN, payload: user }).payload)
    .catch((error) => dispatch({ type: SIGN_IN_FAILURE, payload: error.serverErrors.errors }));

const destroySession = () => (dispatch) =>
  Session.destroy().then(() => dispatch({ type: SIGN_OUT }));

const createUser = (newUser) => (dispatch) =>
  User.create(newUser)
    .then((user) => dispatch({ type: SIGN_UP, payload: user }).payload)
    .catch((error) => dispatch({ type: SIGN_UP_FAILURE, payload: error.serverErrors.errors }));

export { createSession, destroySession, createUser };
