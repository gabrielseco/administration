import React, { Component, PropTypes } from 'react';
import PostItem from './PostItem';

class PostList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="postlist">
        <PostItem/>
      </div>
  );
 }
}

export default PostList;
