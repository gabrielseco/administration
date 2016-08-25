import React, { Component, PropTypes } from 'react';
import Cover from './components/Cover';
export default class Portfolio extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const headingBackground = {
      route:'/',
      title: 'Portfolio',
      description: 'Desarrollo Web'
    }
    return (
      <div>
      <Cover backgroundImage="http://www.ggseco.com/wp-content/uploads/2015/01/hoodvista.jpg"
             headingBackground={headingBackground}
             center/>
      </div>
    );
  }
}
