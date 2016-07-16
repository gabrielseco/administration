import React, { Component, PropTypes } from 'react'


const BackgroundCover = ( { URL } ) => {
  const style = {
    backgroundImage: 'url('+ URL +')'
  };

  return(
    <div>
      <div id="background--image" className="background"
            style={style}>
      </div>
    </div>
  );
};

BackgroundCover.PropTypes = {
  URL: PropTypes.string.isRequired
};
export default BackgroundCover;
