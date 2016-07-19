import React, { Component, PropTypes } from 'react';
import Wrapper from '../components/Wrapper';
import HeaderPinned from '../components/HeaderPinned';
import SearchForm from '../components/SearchForm';
import Drawer from '../components/Drawer';
import Main from '../components/Main';
import Footer from '../components/Footer';
import WebFont from 'webfontloader';

require('styles/site.scss');

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    WebFont.load({
      google: {
        families: ['Montserrat', 'Noto Serif', 'Varela Round']
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <HeaderPinned/>
        <SearchForm/>
        <Drawer/>
        <Main>
          {this.props.children}
          <Footer/>
        </Main>
      </Wrapper>
    );
  }
}

App.propTypes = {
};
