import React, { Component, PropTypes } from 'react'

const SearchIconCover = ({display}) => {
  const bound = () => {
    console.log('click');
    //probably have to call flux to do this
  };
  return(
    <li className="option searchnav">
      <span className="showsearch">
      <i className="fa fa-search" onClick={bound}></i>
      </span>
    </li>
  );
};

SearchIconCover.PropTypes = {
  display: PropTypes.bool.isRequired
};

export default SearchIconCover;
