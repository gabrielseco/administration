import {getConstants} from '../constants';

const {REQUEST_SLIDES, RECEIVE_SLIDES, UPLOAD_SLIDES} = getConstants('slides');


const initialState = {
  isFetching: false,
  fileUpload: null,
  items:[]
};

 const slides =  (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SLIDES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_SLIDES:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.items
    });
    case UPLOAD_SLIDES:
    return Object.assign({}, state, {
      fileUpload: action.items
    });

    default:
      return state;
  }
};

export default slides;
