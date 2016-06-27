import React, { PropTypes } from 'react';
import BrandLogo from './BrandLogo';
import UserInfo from './UserInfo';
import Menu from './Menu';

export default function Sidebar({ config, menu }) {

  const style = {
    width: '260px',
    left: '0px'
  };

  return (
    <div>
      <aside className="sidebar fixed" style={style}>
        <BrandLogo name={config.NAME} URL={config.LINK} openLink />
        <UserInfo config={config} />
        <Menu menu={menu}/>
      </aside>
    </div>
  );
}

Sidebar.propTypes = {
  config: PropTypes.object.isRequired,
  menu: PropTypes.arrayOf(PropTypes.object).isRequired
};
