import React, { PropTypes } from 'react';
import {browserHistory} from 'react-router';

export default function FloatingButton ({icon, link}) {
  const onClick = () => {
    browserHistory.push(link);
  };
  return (
    <button onClick={onClick} type="button" className="btn btn-lg btn-round btn-success">
      <span className={icon}></span>
    </button>
  );
}
FloatingButton.propTypes = {
};
