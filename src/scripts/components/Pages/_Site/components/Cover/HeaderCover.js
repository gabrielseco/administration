import React, { Component, PropTypes } from 'react';

const HeaderCover = (props) => {
  return(
    <header className="bloginfo transparent">
      {props.children}
    </header>
  );
};

HeaderCover.PropTypes = {
};

export default HeaderCover;
