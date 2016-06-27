import React, { PropTypes } from 'react';

export default function UserInfo({ config }) {

  return (
    <div className="user-logged-in">
      <div className="content">
        <div className="user-name">{config.PROFILE.NAME} &nbsp;
          <span className="text-muted f9">{config.PROFILE.RIGHTS}</span>
        </div>
        <div className="user-email">{config.PROFILE.EMAIL}</div>
        <div className="user-actions">
          <a className="m-r-5" href="#/configuracion">configuración</a>
          <a href="#/">cerrar sessión</a>
        </div>
      </div>
    </div>
  );
  
}
UserInfo.propTypes = {
  config: PropTypes.object.isRequired
};
