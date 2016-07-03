import { combineReducers } from 'redux';
import users from './users';
import contacts from './contacts';

const combinedReducer = combineReducers({
  users,
  contacts
});
export default combinedReducer;
