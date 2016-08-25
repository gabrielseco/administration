import React, { Component, PropTypes } from 'react';
import SideBar from 'components/UI/SideBar';
import {config, menu} from 'config';
import jQuery from "jquery";




export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    if(this.props.route.path === "/intranet"){
      require.ensure([], function() { // this syntax is weird but it works
        require('styles/main.scss');
      });
    }

    require('assets/bootstrap.js');
    require('assets/side-nav.js');
    require('assets/ripples.js');


  }
  componentDidMount(){
    const withRipples = [
      '.btn:not(.withoutripple)',
      '.card-image',
      '.navbar a:not(.withoutripple)',
      '#notes .note-delete',
      '.dropdown-menu a',
      '.nav-tabs a:not(.withoutripple)',
      '.withripple'
    ].join(',');

    $('.navbar-toggle').sideNav({ menuWidth: 260, closeOnClick: true });
    $('body').find(withRipples).ripples();
  }
  render() {
    return (
      <div id="top"
          className="theme-template-dark theme-pink
          alert-open alert-with-mat-grow-top-right">
      <SideBar config={config} menu={menu} entry="/intranet"/>
      {this.props.children}
      </div>);
  }
}

App.propTypes = {
};
