import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class SummerNote extends React.Component {
  componentDidMount(){
    this.node = ReactDOM.findDOMNode(this.refs.note);

    $(this.node).summernote({
        lang: 'es-ES',
        height: 300
    });

    $('.dropdown-toggle').dropdown();

    $(this.node).code(this.props.data.VALUE);

  }
  render(){

    return (
        <div id={this.props.data.ID} ref="note" className={this.props.data.CLASS}></div>

    );

  }

}

SummerNote.propTypes = {
  data: PropTypes.object.isRequired
};


export default SummerNote;
