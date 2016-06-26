import React, { Component, PropTypes } from 'react';
import SideBar from 'components/UI/SideBar';
import {config, menu} from 'config';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="top"
          className="theme-template-dark theme-pink
          alert-open alert-with-mat-grow-top-right">
      <SideBar config={config} menu={menu}/>
      {this.props.children}
      </div>);
  }
}

App.propTypes = {
};
