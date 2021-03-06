import React, { Component, PropTypes } from 'react';
import Input from 'UI/Input';
import Switch from 'UI/Switch';
import FileUpload from 'UI/FileUpload';
import SummerNote from 'UI/SummerNote';
import Imagen from 'UI/Imagen';
import DatePicker from 'UI/DatePicker';
import Select from 'UI/Select';


export default class FormGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let label = <label className="control-label" htmlFor={this.props.data.ID}>{this.props.data.NAME}</label>;
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
        label = null;
        input = <FileUpload data={this.props.data} />;
        break;
      case 'select':
        input = <Select data={this.props.data}/>;
        break;
      case 'select-multiple':
        input = <Select data={this.props.data} multiple />;
        break;
      case 'datepicker':
        input = <DatePicker data={this.props.data}/>;
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
