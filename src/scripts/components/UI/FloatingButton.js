import React, { PropTypes } from 'react';
export default function FloatingButton ({icon, link}) {
  const onClick = () => {
    console.log('onclick',link);
  };
  return (
    <button onClick={onClick} type="button" className="btn btn-lg btn-round btn-success">
      <span className={icon}></span>
    </button>
  );
}
FloatingButton.propTypes = {
};
