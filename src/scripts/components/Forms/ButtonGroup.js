import React, { Component, PropTypes } from 'react';
import Button from 'UI/Button';

class ButtonGroup extends React.Component {

  render(){
    const buttons = this.props.data.map((button, i ) => {
      return <Button {...this.props} key={i} data={button}/>;
    });
    return (
      <div>
        {buttons}
      </div>
    );
  }
}

ButtonGroup.PropTypes = {
  data: PropTypes.object.isRequired
};

export default ButtonGroup;
