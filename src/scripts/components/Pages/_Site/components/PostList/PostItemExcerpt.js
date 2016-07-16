import React, { Component, PropTypes } from 'react';


const PostItemExcerpt = ( props ) => {

  return(
    <p className="excerpt">Últimamente estoy haciendo varias apps usando ReactJS con el framework SailsJS. SailsJS ofrece una api desde el minuto 1 donde se pueden hacer altas, bajas, modificaciones y búsquedas. Además tiene distintos adaptadores para conectar con distintas bases de datos. El problema que tenía es que quería guardar mis datos, por si en el futuro [...]</p>

  );
};

PostItemExcerpt.PropTypes = {

};
export default PostItemExcerpt;
