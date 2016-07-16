import {getConstants} from '../constants';

const {
        REQUEST_CATEGORIAS_NOTICIAS,
        RECEIVE_CATEGORIAS_NOTICIAS,
        FAILURE_CATEGORIAS_NOTICIAS
      } = getConstants('categorias_noticias');


const initialState = {
  isFetching: false,
  items:[]
};

 const categorias_noticias =  (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIAS_NOTICIAS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_CATEGORIAS_NOTICIAS:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.items
    });

    default:
      return state;
  }
};

export default categorias_noticias;
