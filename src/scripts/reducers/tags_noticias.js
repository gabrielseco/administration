import {getConstants} from '../constants';

const {REQUEST_TAG_NOTICIAS, RECEIVE_TAGS_NOTICIAS, FAILURE_TAGS_NOTICIAS, UPLOAD_TAGS_NOTICIAS} = getConstants('tags_noticias');


const initialState = {
  isFetching: false,
  items:[]
};

 const tags_noticias =  (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TAG_NOTICIAS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_TAGS_NOTICIAS:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.items
    });
    case UPLOAD_TAGS_NOTICIAS:
    return Object.assign({}, state, {
      fileUpload: action.items
    });

    default:
      return state;
  }
};

export default tags_noticias;
