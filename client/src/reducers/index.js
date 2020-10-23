import { combineReducers } from 'redux';
import socketReducer from './socketReducer';
import sessionReducer from './sessionReducer';
import roomReducer from './roomReducer';

export default combineReducers({
  socket: socketReducer,
  session: sessionReducer,
  rooms: roomReducer,
});
