import {getConstants} from '../constants';
const {REQUEST_CONTACTS, RECEIVE_CONTACTS} = getConstants('contacts');

const initialState = {
  isFetching: false,
  items:[]
};

 const contacts =  (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CONTACTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_CONTACTS:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.items
    });

    default:
      return state;
  }
};

export default contacts;
