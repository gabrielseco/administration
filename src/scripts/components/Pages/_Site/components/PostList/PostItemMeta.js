import React, { Component, PropTypes } from 'react'


const PostItemMeta = ( { URL } ) => {
  const styleTag = {
    background: '#0085c3'
  };

  return(
    <ul className="meta">
      <li className="category">
        <a style={styleTag} href="/#/category/javascript/">JavaScript</a>
      </li>
      <li className="issticky"><i className="fa fa-thumb-tack"></i></li>
      <li className="readtime"><a href="article/copias-de-seguridad-con-sailsjs/">1 Min</a></li>
      <li className="date">
        <a href="/#article/copias-de-seguridad-con-sailsjs/">
          <time dateTime="2016-01-16">16th enero 2016</time>
        </a>
      </li>
  </ul>
  );
};

PostItemMeta.PropTypes = {

};
export default PostItemMeta;
