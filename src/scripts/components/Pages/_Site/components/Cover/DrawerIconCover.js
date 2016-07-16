import React, { Component, PropTypes } from 'react';

const DrawerIconCover = ({display}) => {
  if(!display)
    return (<div></div>);
  return(
    <li className="option drawernav">
      <span className="showdrawer">
        <i className="fa fa-navicon"></i>
      </span>
    </li>
  );
};

DrawerIconCover.PropTypes = {
  display: PropTypes.bool.isRequired
};

export default DrawerIconCover;
