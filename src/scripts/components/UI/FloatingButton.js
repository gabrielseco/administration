import React, { PropTypes } from 'react';
import {Link} from 'react-router';

export default function FloatingButton ({icon, link}) {

  return (
      <Link to={link} className="btn btn-lg btn-round btn-success white-text">
        <span className={icon}></span>
      </Link>
  );
}
FloatingButton.propTypes = {
};
