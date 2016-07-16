import React, { Component, PropTypes } from 'react'


class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="single pagewrapper">
          {this.props.children}
      </div>
  );
 }
}

export default Main;
