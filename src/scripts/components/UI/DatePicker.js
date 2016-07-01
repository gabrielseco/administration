import React, { Component, PropTypes } from 'react';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input id={this.props.data.ID} type="date"
             className="form-control"
             defaultValue={this.props.data.VALUE}/>
    );
  }
}
DatePicker.propTypes = {
  data: PropTypes.object.isRequired
};
