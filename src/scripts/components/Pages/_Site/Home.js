import React, { Component, PropTypes } from 'react';
import Cover from './components/Cover';
import PostList from './components/PostList';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const headingBackground = {
      route:'/',
      title: 'Gabriel García Seco',
      description: 'Desarrollo Web | Music & More'
    }
    return (
      <div>
        <Cover backgroundImage="http://www.ggseco.com/wp-content/uploads/2015/01/hoodvista.jpg"
               headingBackground={headingBackground}/>
        <PostList/>
      </div>

    );
  }
}
Home.propTypes = {
};

export default Home;
