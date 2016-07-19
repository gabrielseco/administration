import React, { Component, PropTypes } from 'react';
import Cover from './components/Cover';
import PostList from './components/PostList';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Cover/>
        <PostList/>
      </div>

    );
  }
}
Home.propTypes = {
};

export default Home;
