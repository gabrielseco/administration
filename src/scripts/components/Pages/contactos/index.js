import ListarContactos from './ListarContactos';
import VerContacto from './VerContacto';

module.exports = {
  contactos:{
    path:'listar_contactos',
    component: ListarContactos
  },
  ver_contacto:{
    path:'ver_contacto/:id',
    component: VerContacto
  }
};
