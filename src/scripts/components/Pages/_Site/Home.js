import React, { Component, PropTypes } from 'react';
import Wrapper from './components/Wrapper';
import HeaderPinned from './components/HeaderPinned';
import SearchForm from './components/SearchForm';
import Drawer from './components/Drawer';
import Main from './components/Main';
import Cover from './components/Cover';
import PostList from './components/PostList';
import Footer from './components/Footer';
require('styles/site.scss');

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <HeaderPinned/>
        <SearchForm/>
        <Drawer/>
        <Main>
          <Cover/>
          <PostList/>
          <Footer/>
        </Main>
      </Wrapper>
    );
  }
}
Home.propTypes = {
};

export default Home;
