import axios from 'axios';
import {API, FAILURE_SAVING, SENDING_DATA,
  SERVER_RESPONSE, getConstants} from 'constants';
import action from './redux-actions';
const endpoint = 'contactos';

const {REQUEST_CONTACTS, RECEIVE_CONTACTS, FAILURE_CONTACTS} = getConstants('contacts');




export function deleteContact(id, cb){
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

export function fetchContacts(endpoint){
  return (dispatch, getState) => {
    dispatch(action(REQUEST_CONTACTS, []));
    return axios.get(`${API}${endpoint}`)
                .then(response => response.data)
                .then(json =>  dispatch(action(RECEIVE_CONTACTS,json)))
                .catch(error => dispatch(action(FAILURE_CONTACTS,error)));
  };
}
