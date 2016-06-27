import App from 'containers/App';

export default {

  path: '/',
  //indexRoute: { component: Hello },
  component: App,
  childRoutes: [
    require('components/Pages/login').login,
    require('components/Pages/usuarios').usuarios
  ]
};
