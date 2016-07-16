import React, { Component, PropTypes } from 'react';


const PostItemAuthor = ( props ) => {

  return(
    <a href="author/ggarciasecogmail/" className="author">
      <img src="http://0.gravatar.com/avatar/3b145835eab7c39514ace92887dd529b?s=50"
           alt="Gabriel García Seco"
           originals="24" width="25" height="25"
           src-orig="http://0.gravatar.com/avatar/3b145835eab7c39514ace92887dd529b?s=24"
           scale="2" id="grav-3b145835eab7c39514ace92887dd529b-0" className="grav-hashed"
           data-no-retina="true"/>Gabriel García Seco
    </a>
  );
};

PostItemAuthor.PropTypes = {

};
export default PostItemAuthor;
