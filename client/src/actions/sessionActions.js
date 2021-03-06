import { SIGN_IN, SIGN_OUT, SIGN_IN_FAILURE } from './types';
import { Session } from '../requests/session';
import { User } from '../requests/user';
import { createSocket } from './socketActions';
import { resetRooms } from './roomActions';

const createSession = (userCredentials) => async (dispatch) => {
  try {
    const user = await Session.create(userCredentials);
    dispatch(signInUser(user));
  } catch (error) {
    dispatch(signInUserError(error));
  }
};

const destroySession = (history) => (dispatch) =>
  Session.destroy().then(() => dispatch(signOut(history)));

const signOut = (history) => (dispatch) => {
  dispatch({ type: SIGN_OUT });
  history.push('/');
};

const createUser = (newUser) => async (dispatch) => {
  try {
    const user = await User.create(newUser);
    dispatch(signInUser(user));
  } catch (error) {
    dispatch(signInUserError(error));
  }
};

const getCurrentUser = () => async (dispatch) => {
  try {
    const user = await User.getCurrentUser();
    dispatch(signInUser(user));
  } catch (error) {
    dispatch(signInUserError(error));
  }
};

const signInUser = (user) => async (dispatch) => {
  dispatch({ type: SIGN_IN, payload: user });
  dispatch(createSocket(user.username));
};
const signInUserError = (error) => async (dispatch) => {
  dispatch({ type: SIGN_IN_FAILURE, payload: error.serverErrors.errors });
};

export { createSession, destroySession, createUser, getCurrentUser };
