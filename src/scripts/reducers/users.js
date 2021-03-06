import {getConstants} from '../constants';

const {REQUEST_USERS, RECEIVE_USERS} = getConstants('users');


const initialState = {
  isFetching: false,
  items:[]
};

 const users =  (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_USERS:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.items
    });

    default:
      return state;
  }
};

export default users;
