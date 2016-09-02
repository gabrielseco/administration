import axios from 'axios';
import {API, FAILURE_SAVING, SENDING_DATA,
  SERVER_RESPONSE, getConstants} from 'constants';
import action from './redux-actions';
import {isObjectEmpty} from 'utils';

const endpoint = 'categorias_portfolio';

const {
        REQUEST_CATEGORIAS_PORTFOLIO,
        RECEIVE_CATEGORIAS_PORTFOLIO,
        FAILURE_CATEGORIAS_PORTFOLIO} = getConstants('categorias_portfolio');


//TODO: PASSING THE USER TO THE REDUCER ITEMS
//TODO: MAKE THE CALLBACK WORK

export function addCategoriaPortfolio(obj, cb){
  return (dispatch, getState) => {
    dispatch(action(SENDING_DATA, obj));
    return axios.post(`${API}${endpoint}`, obj)
                .then(response => response.data)
                .then(json => dispatch(action(SERVER_RESPONSE, json,() => {
                  cb(json);
                }
              )))
                .catch(error => dispatch(action(FAILURE_SAVING, error)));

  };
}

export function editCategoriaPortfolio(id, obj, cb){
  return (dispatch, getState) => {
    dispatch(action(SENDING_DATA, obj));
    return axios.post(`${API}${endpoint}/${id}`, obj)
                .then(response => response.data)
                .then(json => dispatch(action(SERVER_RESPONSE, json,() => {
                  cb(json);
                }
              )))
                .catch(error => dispatch(action(FAILURE_SAVING, error)));

  };
}


export function deleteCategoriaPortfolio(id, cb){
  return (dispatch, getState) => {
    dispatch(action(SENDING_DATA, id));
    return axios.delete(`${API}${endpoint}/${id}`)
                .then(response => response.data)
                .then(json => dispatch(action(SERVER_RESPONSE, json,() => {
                  cb(json);
                }
              )))
                .catch(error => dispatch(action(FAILURE_SAVING, error)));

  };
}

export function fetchCategoriasPortfolio(){
  return (dispatch, getState) => {
    dispatch(action(REQUEST_CATEGORIAS_PORTFOLIO, []));
    return axios.get(`${API}${endpoint}`)
                .then(response => response.data)
                .then(json =>  dispatch(action(RECEIVE_CATEGORIAS_PORTFOLIO,json)))
                .catch(error => dispatch(action(FAILURE_CATEGORIAS_PORTFOLIO,error)));
  };

}

function formatCategories(arr){
  const categories = ['Todas'];

  const _categories = arr.map(item => {
    return item.titulo
  });

  return categories.concat(_categories);


}

export function fetchActiveCategoriasPortfolio(){
  return (dispatch, getState) => {
    dispatch(action(REQUEST_CATEGORIAS_PORTFOLIO, []));
    return axios.get(`${API}${endpoint}?where={activo:1}`)
                .then(response => response.data)
                .then(json =>  dispatch(action(RECEIVE_CATEGORIAS_PORTFOLIO,formatCategories(json))))
                .catch(error => dispatch(action(FAILURE_CATEGORIAS_PORTFOLIO,error)));
  };

}
