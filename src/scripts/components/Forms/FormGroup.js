import React, { Component, PropTypes } from 'react';
import Input from 'UI/Input';
import Switch from 'UI/Switch';
import FileUpload from 'UI/FileUpload';
import SummerNote from 'UI/SummerNote';
import Imagen from 'UI/Imagen';

export default class FormGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const label = <label className="control-label" htmlFor={this.props.data.ID}>{this.props.data.NAME}</label>;
    let input = {};
    let value = null;
    switch(this.props.data.TYPE){
      case 'switch':
        input = <Switch data={this.props.data}/>;
        break;
      case 'note':
        input = <SummerNote data={this.props.data}/>;
        break;
      case 'img':
        input = <Imagen data={this.props.data}/>;
        break;
      case 'file':
        input = <FileUpload data={this.props.data} />;
        break;
      default:
        input =  <Input data={this.props.data}/>;
    }
    return (
      <div className="form-group filled">
        {label}
        {input}
      </div>
    );
  }
}
FormGroup.propTypes = {
  data: PropTypes.object.isRequired
};
