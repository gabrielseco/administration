import { combineReducers } from 'redux';
import posts from './reducer';

const combinedReducer = combineReducers({
  posts
});
export default combinedReducer;
