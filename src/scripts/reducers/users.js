import * as constants from '../constants';

const initialState = {
  isFetching: false,
  items:[]
};

 const users =  (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case constants.RECEIVE_USERS:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.items
    });

    default:
      return state;
  }
};

export default users;
