import React, { PropTypes } from 'react';

export default function PageHeader({info}) {
  const ICON = 'md '+info.ICON;

  return (
    <div className="page-header">
        <h1>
          <i className={ICON}></i> {info.TITULO}
        </h1>
        <p className="lead"> {info.TEXTO} </p>
   </div>

  );
}
PageHeader.propTypes = {
  info: PropTypes.object.isRequired
};
