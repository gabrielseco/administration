import {getConstants} from '../constants';

const {
        REQUEST_CATEGORIAS_PORTFOLIO,
        RECEIVE_CATEGORIAS_PORTFOLIO,
        FAILURE_CATEGORIAS_PORTFOLIO
      } = getConstants('categorias_portfolio');


const initialState = {
  isFetching: false,
  items:[]
};

 const categorias_portfolio =  (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIAS_PORTFOLIO:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_CATEGORIAS_PORTFOLIO:
    return Object.assign({}, state, {
      isFetching: false,
      items: action.items
    });

    default:
      return state;
  }
};

export default categorias_portfolio;
