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
    require('components/Pages/contactos').contactos,
    require('components/Pages/configuracion').configuracion,

    require('components/Pages/server').not_found
  ]
};
