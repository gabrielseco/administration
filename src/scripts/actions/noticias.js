import axios from 'axios';
import {API, FAILURE_SAVING, SENDING_DATA,
  SERVER_RESPONSE, getConstants} from 'constants';
import action from './redux-actions';
import isObjectEmpty from 'utils';

const endpoint = 'noticias';

const {REQUEST_NOTICIAS, RECEIVE_NOTICIAS, FAILURE_NOTICIAS, UPLOAD_NOTICIAS} = getConstants('noticias');


function uploadImage(id, imagen, cb){
  if(isObjectEmpty(imagen)){
    cb(null);
    return;
  }

  let data = new FormData();
      data.append('id', +id);
      data.append('file', imagen);
      axios.post(`http://localhost:1337/${endpoint}/uploadImagen/`,data)
           .then(function(response){
             cb(response.data);
           });

}

//TODO: PASSING THE USER TO THE REDUCER ITEMS
//TODO: MAKE THE CALLBACK WORK

export function addNoticia(obj, cb){
  return (dispatch, getState) => {
    dispatch(action(SENDING_DATA, obj));
    return axios.post(`${API}${endpoint}`, obj)
                .then(response => response.data)
                .then(json => dispatch(action(SERVER_RESPONSE, json,() => {
                  uploadImage(json.id, getState().slides.fileUpload, function(response){
                    cb(json);
                  });
                }
              )))
                .catch(error => dispatch(action(FAILURE_SAVING, error)));

  };
}

export function editNoticia(id, obj, cb){
  return (dispatch, getState) => {
    dispatch(action(SENDING_DATA, obj));
    return axios.post(`${API}${endpoint}/${id}`, obj)
                .then(response => response.data)
                .then(json => dispatch(action(SERVER_RESPONSE, json,() => {
                  uploadImage(json.id, getState().slides.fileUpload, function(response){
                    cb(json);
                  });
                }
              )))
                .catch(error => dispatch(action(FAILURE_SAVING, error)));

  };
}


export function uploadNoticia(image){
  return (dispatch, getState) => {
    dispatch(action(UPLOAD_NOTICIAS, image));
  };
}

export function deleteNoticia(id, cb){
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

export function fetchNoticias(){
  return (dispatch, getState) => {
    dispatch(action(REQUEST_NOTICIAS, []));
    return axios.get(`${API}${endpoint}`)
                .then(response => response.data)
                .then(json =>  dispatch(action(RECEIVE_NOTICIAS,json)))
                .catch(error => dispatch(action(FAILURE_NOTICIAS,error)));
  };
}
