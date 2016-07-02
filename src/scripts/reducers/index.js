import { combineReducers } from 'redux';
import users from './users';

const combinedReducer = combineReducers({
  users
});
export default combinedReducer;
