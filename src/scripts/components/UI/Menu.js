import React, { PropTypes } from 'react';
export default function Menu({ menu }) {
  const list = menu.map((el, i) => {

    const ICON = 'md '+el.ICON;
    const TARGET = '#'+el.ID;
    const NAME = el.NAME;

    if (el.CHILDREN.length === 0) {

      return (
        <li key={i} icon={ICON}>
          <a href={el.LINK}>
            <i className={ICON}></i>&nbsp;
            <span>{NAME}</span>
          </a>
        </li>
      );

    } else {

      const listChildren = el.CHILDREN.map((child,j)=> {

        return(
          <li key={j} name={NAME}>
            <a href={child.LINK}>
              <span id={child.ID} className="pull-right badge theme-primary-bg z-depth-0">{child.NOTIFICATIONS}
              </span>
              <span> {child.NAME} </span>
            </a>
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
