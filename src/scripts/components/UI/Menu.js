import React, { PropTypes } from 'react';
import {Link} from 'react-router';
export default function Menu({ menu, entry }) {
  const list = menu.map((el, i) => {

    const ICON = 'md '+el.ICON;
    const TARGET = '#'+el.ID;
    const NAME = el.NAME;

    if (el.CHILDREN.length === 0) {

      return (
        <li key={i} icon={ICON}>
          <Link to={entry + el.LINK}>
            <i className={ICON}></i>&nbsp;
            <span>{NAME}</span>
          </Link>
        </li>
      );

    } else {

      const listChildren = el.CHILDREN.map((child,j)=> {

        return(
          <li key={j} name={NAME}>
            <Link to={entry + child.LINK}>
              <span id={child.ID} className="pull-right badge theme-primary-bg z-depth-0">{child.NOTIFICATIONS}
              </span>
              <span> {child.NAME} </span>
            </Link>
          </li>
        );

      });

      return (
        <li key={i}>
          <a data-toggle="collapse" data-target={TARGET} aria-expanded="false"
          aria-controls={NAME} className="collapsible-header waves-effect">
            <i className={ICON}></i>&nbsp;{NAME}
          </a>
            <ul id={el.ID} className="collapse">
              {listChildren}
            </ul>
        </li>
      );
    }

  });

  return (
    <ul className="menu-links">
      {list}
    </ul>
  );
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired
};
