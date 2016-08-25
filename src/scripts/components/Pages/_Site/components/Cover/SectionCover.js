import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const SectionCover = ({ URL, title, description, center }) => {
  const centerClass = classNames({
    'blogtitle': !center,
    'wrapper':true,
    'postitem':center,
    'posttitle': center,
    'middle': center,
    'center': center
  });

  const titleClass = classNames({
    'title': center
  });

  const descriptionClass = classNames({
    'description': !center,
    'excerpt': center
  })


  return(
    <section className={centerClass}>
			<a href={URL}>
        <h1 className={titleClass} itemProp="headline">{title}</h1>
      </a>
			<p className={descriptionClass} itemProp="description">{description}</p>
			{!center ?  <hr/> : <div></div>}
		</section>
  );
};

SectionCover.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
  center: PropTypes.bool
};

export default SectionCover;
