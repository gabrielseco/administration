import axios from 'axios';
import {API, FAILURE_SAVING, SENDING_DATA,
  SERVER_RESPONSE, getConstants} from 'constants';
import action from './redux-actions';
import {isObjectEmpty} from 'utils';

const endpoint = 'tags_noticias';

const {REQUEST_TAGS_NOTICIAS, RECEIVE_TAGS_NOTICIAS, FAILURE_TAGS_NOTICIAS, UPLOAD_TAGS_NOTICIAS} = getConstants('tags_noticias');


//TODO: PASSING THE USER TO THE REDUCER ITEMS
//TODO: MAKE THE CALLBACK WORK

export function addTagNoticia(obj, cb){
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

export function editTagNoticia(id, obj, cb){
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


export function deleteTagNoticia(id, cb){
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

export function fetchTagNoticias(){
  return (dispatch, getState) => {
    dispatch(action(REQUEST_TAGS_NOTICIAS, []));
    return axios.get(`${API}${endpoint}`)
                .then(response => response.data)
                .then(json =>  dispatch(action(RECEIVE_TAGS_NOTICIAS,json)))
                .catch(error => dispatch(action(FAILURE_TAGS_NOTICIAS,error)));
  };
}
