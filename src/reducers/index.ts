import { combineReducers } from 'redux'
import app from './app'
import blue from './blue';
import red from './red';

export default combineReducers({
  app,
  blue,
  red,
});

