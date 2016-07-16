import { combineReducers } from 'redux';
import users from './users';
import contacts from './contacts';
import slides from './slides';
import noticias from './noticias';
import tags_noticias from './tags_noticias';
import categorias_noticias from './categorias_noticias';

const combinedReducer = combineReducers({
  users,
  contacts,
  slides,
  noticias,
  tags_noticias,
  categorias_noticias
});
export default combinedReducer;
