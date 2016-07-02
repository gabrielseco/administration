import axios from 'axios';
import {API, REQUEST_USERS,RECEIVE_USERS, FAILURE_USERS} from 'constants';

function action(constant, items=[]){

  return{
    type: constant,
    items: items
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
