import React, { Component, PropTypes } from 'react';

class Switch extends React.Component {
  constructor(props){
    super(props);
    this.state = {checked: this.props.data.VALUE};
  }

  onChange(field, e){
    let nextState = {};
    nextState[field] = e.target.checked;
    this.setState(nextState);

  }
  render(){
    return (
      <div className="switch">
        <label className="filled"> No
          <input id={this.props.data.ID} type="checkbox" value={this.state.checked}  checked={this.state.checked} onChange={this.onChange.bind(this, 'checked')}/>
          <span className="lever"></span> Si
        </label>
      </div>

    );

  }

}

Switch.propTypes = {
  data: PropTypes.object.isRequired
};


export default Switch
