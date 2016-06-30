import ListarNoticias from './ListarNoticias';
import ListarCategoriasNoticias from './ListarCategoriasNoticias';
import AltaCategoriaNoticia from './AltaCategoriaNoticia';
import ListarTagsNoticias from './ListarTagsNoticias';
import AltaTagNoticia from './AltaTagNoticia';

module.exports = {
  noticias:{
    path:'listar_noticias',
    component: ListarNoticias
  },
  categorias_noticias:{
    path:'listar_categorias_noticias',
    component: ListarCategoriasNoticias
  },
  alta_categoria_noticia:{
    path:'anade_categoria_noticia',
    component: AltaCategoriaNoticia
  },
  tags_noticias:{
    path:'listar_tags_noticias',
    component: ListarTagsNoticias
  },
  alta_tag_noticia:{
    path:'anade_tag_noticia',
    component: AltaTagNoticia
  }

};
