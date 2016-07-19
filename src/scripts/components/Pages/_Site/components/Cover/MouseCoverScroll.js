import React, { Component, PropTypes } from 'react';

const MouseCoverScroll = () => {
  //TODO: INVESTIGATE HOW TO DO IT WITH PURE JS
  const onScroll = () => {
    const coverHeight = document.getElementById('background--image').scrollHeight;
    $('html, body').animate({
			scrollTop: coverHeight
		}, 1000);
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
