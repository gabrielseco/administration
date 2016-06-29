import App from 'containers/App';

export default {

  path: '/',
  //indexRoute: { component: Hello },
  component: App,
  childRoutes: [
    require('components/Pages/login').login,
    require('components/Pages/usuarios').usuarios,
    require('components/Pages/usuarios').anadir_usuario,
    require('components/Pages/usuarios').editar_usuario,
    require('components/Pages/slide').slide,
    require('components/Pages/slide').anadir_slide,
    require('components/Pages/server').not_found
  ]
};
