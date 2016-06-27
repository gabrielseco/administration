import React, { Component, PropTypes } from 'react';
export default class SearchBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="mat-slide-right pull-right">
          <form className="search-form form-inline pull-left">
            <div className="form-group">
              <label className="sr-only" htmlFor="search-input">Search</label>
              <input type="text" className="form-control"
                    id="search-input" placeholder="Buscar..." autoFocus=""/> 
            </div>
          </form>
        </div>
        <div className="pull-right">
          <button className="btn btn-sm btn-link pull-left withoutripple"> <i className="md md-search f20"></i> </button>
        </div>
      </div>
    );
  }
}
SearchBox.propTypes = {
};
