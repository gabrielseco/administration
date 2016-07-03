import React, { PropTypes } from 'react';
import createMarkup from '../../utils';
export default function Card({title, template}) {
  return (
    <div className="card bordered">
        <div className="card-header">
          <span className="card-title">{title}</span>
        </div>
          <div className="card-content">
            <div dangerouslySetInnerHTML={createMarkup(template)}></div>
          </div>
          <div className="card-action clearfix">
          </div>
      </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired
};
