import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

const NavItemCover = ({ data }) => {
  return(
    <li>
      <Link to={data.URL}>{data.TITLE}</Link>
    </li>
  );
};

NavItemCover.PropTypes = {
  data:  PropTypes.object.isRequired
};

export default NavItemCover;
