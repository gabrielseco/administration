import React, { Component, PropTypes } from 'react';
//TODO: NOT WORKING WITH UTILS FOLDER REF WEBPACK
import createMarkup from '../../../utils';

class Row extends React.Component {

  render(){
    let list = new Array();

    Object.keys(this.props.data).forEach((key) => {
         list.push(this.props.data[key]);
    });

    const rows = list.map((res, i) => {
      if(typeof res === 'object'){
        return <td key={i}>{res}</td>;
      }
      return <td key={i} dangerouslySetInnerHTML={createMarkup(res)}></td>;
    });


    return (
      <tr>
        {rows}
      </tr>
    );

  }

}

Row.propTypes = {
  data: PropTypes.object.isRequired
};

export default Row;
