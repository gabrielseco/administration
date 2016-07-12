import {getConstants} from '../constants';

const {REQUEST_NOTICIAS, RECEIVE_NOTICIAS, UPLOAD_NOTICIAS} = getConstants('noticias');


const initialState = {
  isFetching: false,
  fileUpload: null,
  items:[]
};

 const noticias =  (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_NOTICIAS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_NOTICIAS:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.items
    });
    case UPLOAD_NOTICIAS:
    return Object.assign({}, state, {
      fileUpload: action.items
    });

    default:
      return state;
  }
};

export default noticias;
