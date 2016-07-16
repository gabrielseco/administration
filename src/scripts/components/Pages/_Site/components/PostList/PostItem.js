import React, { Component, PropTypes } from 'react';
import PostItemMeta from './PostItemMeta';
import PostItemTitle from './PostItemTitle';
import PostItemExcerpt from './PostItemExcerpt';
import PostItemAuthor from './PostItemAuthor';

class PostItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <article className="postitem">
       <div className="wrapper">
          <PostItemMeta/>
          <PostItemTitle/>
          <PostItemExcerpt/>
          <PostItemAuthor/>
       </div>
	</article>
);
 }
}

export default PostItem;
