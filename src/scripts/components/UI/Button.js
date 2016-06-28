import React, { Component, PropTypes } from 'react';
export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button type={this.props.data.TYPE}
              className={this.props.data.CLASS}
              onClick={this.props.data.CLICK}>
              {this.props.data.NAME}
      </button>
    );
  }
}
Button.propTypes = {
  data: PropTypes.object.isRequired
};
