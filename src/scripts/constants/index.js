export const API             = 'http://localhost:1337/';
export const FAILURE_SAVING  =  'FAILURE_SAVING';
export const SENDING_DATA    =  'SENDING_DATA';
export const SERVER_RESPONSE =  'SERVER_RESPONSE';


 function createConstants(type){
  require('../utils/String');

  const tree = ['RECEIVE','REQUEST','FAILURE'];

  type = type.toUpperCase();

  let obj = {};

  for(let i = 0; i < tree.length; i++){
    const key = tree[i].joinWith("_", type);
    obj[key] = key;
  }

  return obj;

}

export function getConstants(type){
 return createConstants(type);
}
