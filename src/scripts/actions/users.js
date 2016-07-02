import axios from 'axios';
import {API, REQUEST_USERS,RECEIVE_USERS,
  FAILURE_USERS, FAILURE_SAVING, SENDING_DATA,
  SERVER_RESPONSE} from 'constants';
const endpoint = 'user';

function action(constant, items=[], cb=null){
  if(cb !== null){
    console.log('execute callback')
    cb();
  }
  return{
    type: constant,
    items: items
  };

}

//TODO: PASSING THE USER TO THE REDUCER ITEMS
//TODO: MAKE THE CALLBACK WORK

export function addUser(obj, cb){
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

export function deleteUser(id, cb){
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

export function fetchUsers(endpoint){
  return (dispatch, getState) => {
    dispatch(action(REQUEST_USERS, []));
    return axios.get(`${API}${endpoint}`)
                .then(response => response.data)
                .then(json =>  dispatch(action(RECEIVE_USERS,json)))
                .catch(error => dispatch(action(FAILURE_USERS,error)));
  };
}
