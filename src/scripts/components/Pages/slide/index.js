import ListarSlide from './ListarSlide';
import AltaSlide from './AltaSlide';
import EditarSlide from './EditarSlide';

module.exports = {
  slide:{
    path:'listar_slide',
    component: ListarSlide
  },
  anadir_slide:{
    path:'anade_slide',
    component: AltaSlide
  },
  editar_slide:{
    path:'editar_slide/:id',
    component: EditarSlide
  }
};
