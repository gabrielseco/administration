import ListarNoticias from './ListarNoticias';
import AltaNoticia from './AltaNoticia';
import EditarNoticia from './EditarNoticia';
import ListarCategoriasNoticias from './ListarCategoriasNoticias';
import AltaCategoriaNoticia from './AltaCategoriaNoticia';
import EditarCategoriaNoticia from './EditarCategoriaNoticia';
import ListarTagsNoticias from './ListarTagsNoticias';
import AltaTagNoticia from './AltaTagNoticia';
import EditarTagNoticia from './EditarTagNoticia';


module.exports = {
  noticias:{
    path:'listar_noticias',
    component: ListarNoticias
  },
  alta_noticia:{
    path:'anade_noticia',
    component: AltaNoticia
  },
  editar_noticia:{
    path:'editar_noticia/:id',
    component: EditarNoticia
  },
  categorias_noticias:{
    path:'listar_categorias_noticias',
    component: ListarCategoriasNoticias
  },
  alta_categoria_noticia:{
    path:'anade_categoria_noticia',
    component: AltaCategoriaNoticia
  },
  editar_categoria_noticia:{
    path:'editar_categoria_noticia/:id',
    component: EditarCategoriaNoticia
  },
  tags_noticias:{
    path:'listar_tags_noticias',
    component: ListarTagsNoticias
  },
  alta_tag_noticia:{
    path:'anade_tag_noticia',
    component: AltaTagNoticia
  },
  editar_tag_noticia:{
    path:'editar_tag_noticia/:id',
    component: EditarTagNoticia
  }

};
