import App from 'containers/App';
import LoginPage from 'components/Pages/login/LoginPage';
import Home from 'components/Pages/_Site/Home';
import siteApp from 'components/Pages/_Site/containers/App';

export default [
  {
    path:'/',
    component: siteApp,
    indexRoute: { onEnter: (nextState, replace) => replace('/home') },
    childRoutes:[
      require('components/Pages/_Site').home,
      require('components/Pages/_Site').contact,
      require('components/Pages/_Site').portfolio
      //require('components/Pages/_Site').not_found

    ]
  },
  {
  path: '/login',
  component: LoginPage
  },
  {
  path: '/intranet',
  //indexRoute: { component: Hello },
  component: App,
  childRoutes: [
    require('components/Pages/usuarios').usuarios,
    require('components/Pages/usuarios').anadir_usuario,
    require('components/Pages/usuarios').editar_usuario,
    require('components/Pages/slide').slide,
    require('components/Pages/slide').anadir_slide,
    require('components/Pages/slide').editar_slide,
    require('components/Pages/noticias').noticias,
    require('components/Pages/noticias').alta_noticia,
    require('components/Pages/noticias').editar_noticia,
    require('components/Pages/noticias').categorias_noticias,
    require('components/Pages/noticias').alta_categoria_noticia,
    require('components/Pages/noticias').editar_categoria_noticia,
    require('components/Pages/noticias').tags_noticias,
    require('components/Pages/noticias').alta_tag_noticia,
    require('components/Pages/noticias').editar_tag_noticia,
    require('components/Pages/portfolio').portfolio,
    require('components/Pages/portfolio').alta_portfolio_categoria,
    require('components/Pages/portfolio').editar_categoria_portfolio,

    require('components/Pages/portfolio').listar_categorias_portfolio,
    require('components/Pages/contactos').contactos,
    require('components/Pages/contactos').ver_contacto,

    require('components/Pages/configuracion').configuracion,

    require('components/Pages/server').not_found
  ]
}];
