import { combineReducers } from 'redux';
import users from './users';
import contacts from './contacts';
import slides from './slides';
import noticias from './noticias';


const combinedReducer = combineReducers({
  users,
  contacts,
  slides,
  noticias
});
export default combinedReducer;
