import ListarUsuarios from './ListarUsuarios';
import AltaUsuario from './AltaUsuario';
import EditarUsuario from './EditarUsuario';

module.exports = {
  usuarios:{
    path:'listar_usuarios',
    component: ListarUsuarios
  },
  anadir_usuario:{
    path:'anadir_usuario',
    component: AltaUsuario
  },
  editar_usuario:{
    path:'editar_usuario/:id',
    component: EditarUsuario
  }
};
