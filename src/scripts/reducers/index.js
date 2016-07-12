import { combineReducers } from 'redux';
import users from './users';
import contacts from './contacts';
import slides from './slides';


const combinedReducer = combineReducers({
  users,
  contacts,
  slides
});
export default combinedReducer;
