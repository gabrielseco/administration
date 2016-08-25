import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


class Select extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    require('assets/select2.min.js');
  }
  componentDidMount(){
    this.node = ReactDOM.findDOMNode(this.refs.select);

    $(this.node).select2();

  }
  render(){
    const options = this.props.data.VALUE.map((res, i) => {
      try {
      if(res.ID === this.props.data.SELECTED[i].ID){
        return <option key={i} value={res.ID} selected>{res.NAME}</option>;
      } else {
        return <option key={i} value={res.ID}>{res.NAME}</option>;
      }
    } catch(err){
      return <option key={i} value={res.ID}>{res.NAME}</option>;

    }

  });


    return (
      <div>
        <select id={this.props.data.ID}ref="select" className="select2-tags form-control"
                required={this.props.data.REQUIRED}
                data-error={this.props.data.VALIDATION}
                multiple={this.props.multiple}>
          {options}
        </select>
      </div>

    );

  }

}

Select.propTypes = {
  data: PropTypes.object.isRequired,
  multiple: PropTypes.bool
};


export default Select;
