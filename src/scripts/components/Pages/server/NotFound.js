import React, { PropTypes } from 'react';
import {browserHistory} from 'react-router';
export default function NotFound(props) {
  const style = {
    margin: 'auto',
    maxWidth: '400px'
  };

  const goBack = () => {
    browserHistory.goBack();
  };

  return (
    <div className="page-error">
        <div className="center">
          <div className="card bordered z-depth-2" style={style}>
            <div className="card-content">
              <div className="m-b-30 text-center"> <i className="md md-cancel error-icon"></i>
                <h1 className="pink-text uppercase">404</h1>
                <p className="card-title-desc">Lo sentimos, pero la página que busca no existe</p>
              </div>
            </div>
            <div className="card-action clearfix">
              <div className="text-center">
                <button onClick={goBack} className="btn btn-primary btn-block">Volver</button> </div>
            </div>
          </div>
        </div>
        </div>
  );
}
NotFound.propTypes = {
};
