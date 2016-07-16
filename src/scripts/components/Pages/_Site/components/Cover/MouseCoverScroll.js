import React, { Component, PropTypes } from 'react';

const MouseCoverScroll = () => {
  //you get the height of the cover and you need to make a transition
  const onScroll = () => {
    const coverHeight = document.getElementById('background--image').scrollHeight;
    window.scrollTo(0, coverHeight);
  };

  return(
    <div className="mouse" onClick={onScroll}>
			<div className="scroll"></div>
		</div>
  );
};

MouseCoverScroll.PropTypes = {

};

export default MouseCoverScroll;
