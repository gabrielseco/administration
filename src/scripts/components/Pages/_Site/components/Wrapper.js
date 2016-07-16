import React, { Component, PropTypes } from 'react';


const Wrapper = ({children}) => {
  return(
      <div className="home blog">
        {children}
      </div>
  );
};

export default Wrapper;
