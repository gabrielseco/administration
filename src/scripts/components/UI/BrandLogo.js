import React, { PropTypes } from 'react';

export default function BrandLogo({ name , URL, openLink }) {
  const link = {
    color:'#fff'
  };
  return (
    <div className="brand-logo">
      <div id="logo">
        <div className="foot1"></div>
        <div className="foot2"></div>
        <div className="foot3"></div>
        <div className="foot4"></div>
      </div> <a href={URL} target={openLink} style={link}>{name}</a>
    </div>
  );
}


BrandLogo.propTypes = {
  name: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
  openLink:PropTypes.bool
};
