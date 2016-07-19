import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

const HeaderTitleCover = ({ URL, title }) => {
  return(
    <header className="title">
      <Link to={URL}>{title}</Link>
    </header>
  );
};

HeaderTitleCover.PropTypes = {
  URL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default HeaderTitleCover;
