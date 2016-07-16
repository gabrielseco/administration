import React, { Component, PropTypes } from 'react'

const HeaderTitleCover = ({ URL, title }) => {
  return(
    <header className="title">
      <a href={URL}>{title}</a>
    </header>
  );
};

HeaderTitleCover.PropTypes = {
  URL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default HeaderTitleCover;
