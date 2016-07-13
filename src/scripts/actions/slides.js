import axios from 'axios';
import {API, FAILURE_SAVING, SENDING_DATA,
  SERVER_RESPONSE, getConstants} from 'constants';
import action from './redux-actions';
import {isObjectEmpty} from 'utils';
const endpoint = 'slide';

const {REQUEST_SLIDES, RECEIVE_SLIDES, FAILURE_SLIDES, UPLOAD_SLIDES} = getConstants('slides');


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

export function addSlide(obj, cb){
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

export function editSlide(id, obj, cb){
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


export function uploadSlide(image){
  return (dispatch, getState) => {
    dispatch(action(UPLOAD_SLIDES, image));
  };
}

export function deleteSlide(id, cb){
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

export function fetchSlides(){
  return (dispatch, getState) => {
    dispatch(action(REQUEST_SLIDES, []));
    return axios.get(`${API}${endpoint}`)
                .then(response => response.data)
                .then(json =>  dispatch(action(RECEIVE_SLIDES,json)))
                .catch(error => dispatch(action(FAILURE_SLIDES,error)));
  };
}
