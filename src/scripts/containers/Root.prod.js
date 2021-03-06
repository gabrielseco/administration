import React, { Component } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          {routes}
        </div>
      </Provider>
    );
  }
}
