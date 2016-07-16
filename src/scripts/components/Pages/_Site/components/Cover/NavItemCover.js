import React, { Component, PropTypes } from 'react';

const NavItemCover = ({ data }) => {
  return(
    <li>
      <a href={data.URL}>{data.TITLE}</a>
    </li>
  );
};

NavItemCover.PropTypes = {
  data:  PropTypes.object.isRequired
};

export default NavItemCover;
