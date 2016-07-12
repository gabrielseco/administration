import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Imagen extends React.Component {

  render(){
    const classes = classnames(
      {
        'hidden': this.props.data.VIEW === 'EDITION'
      },
      this.props.data.CLASS
    );
    if(this.props.data.FROM === 'SERVER'){
      this.props.data.URL = 'http://localhost:1337/images/'+this.props.data.VALUE;
    }
    return (
      <img className={classes}
           src={this.props.data.URL}
           width={this.props.data.WIDTH}
           title={this.props.data.TITLE}
           alt={this.props.data.TITLE}/>
    );

  }

}

Imagen.propTypes = {
  data: PropTypes.object.isRequired
};


export default Imagen;
