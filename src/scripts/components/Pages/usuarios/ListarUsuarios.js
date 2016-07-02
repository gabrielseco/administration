import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import {Link} from 'react-router';
import PageHeader from 'UI/PageHeader';
import DataTable from 'UI/DataTable';
import FloatingButton from 'UI/FloatingButton';
import MainContainer from 'containers/MainContainer';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from 'actions';
import Loading from  'UI/Loading';





const plural = 'Usuarios';

const singular = 'Usuario';

const texto = 'Listado de usuarios';

const info = {
    TITULO : plural,
    ICON: 'md md-list',
    TEXTO: texto
};

const breadcrumb = [
  {
    NAME: 'GGSECO.COM',
    LINK:'http://www.ggseco.com'
  },
  {
    NAME: plural
  },
  {
    NAME: texto
  }
];

const tabla = {
  HEADERS:[
    {
      NAME: 'Fecha',
      SORT: true
    },
    {
      NAME: 'Activo',
      SORT: true
    },
    {
      NAME:'Nombre',
      SORT: true
    },
    {
      NAME:'Editar',
      SORT: false
    },
    {
      NAME:'Borrar',
      SORT: false
    }
  ],
  BODY:[
  ]
};

function mapToTable(json, headers, modal){


  let body = [];


  for(let i = 0; i < json.length; i++){

    const fecha = moment(json[i]["createdAt"]).format("DD/MM/YYYY");

    const borrar = {
      CLASS:'btn btn-danger',
      NAME:'Eliminar',
      refComponent: 'eliminar',
      ACTION: modal,
      STORE: 'idUser'
    };

    const editar = {
      CLASS:'btn btn-primary',
      NAME:'Editar',
      refComponent: 'editar',
      LINK:'editar_usuario'
    };

    editar.ID = json[i]["id"];
    borrar.ID = json[i];

    //borrar.ACTIONS = AppActions;

    const obj = {
      fecha: fecha,
      activo: json[i]["activo"] ? "Sí" : "No",
      usuario: json[i]["nombre"],
      editar: null,
      eliminar: null
    };

    body.push(obj);
  }


  tabla.BODY = body;

  console.log(tabla.BODY);


}



class ListarUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: 'user'
    };
  }
  componentDidMount(){
    const {fetchUsers} = this.props;
    fetchUsers(this.state.api);
  }
  formatTable(users){
    const headers = tabla.HEADERS;
    if(users.length > 0){
      mapToTable(users, headers, null);
    }

  }
  render() {
    const {isFetching, users} = this.props;

    return (
      <div>
        {isFetching ?  <Loading/> :
        <MainContainer data={breadcrumb}>
        {this.formatTable(users)}
        <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
            <section className="forms-advanced">
              <PageHeader info={info}/>
              <div className="p-b-10">
                <FloatingButton icon="md md-add" link="/anadir_usuario"/>
              </div>
              <DataTable data={tabla}/>
            </section>
        </div>
        </MainContainer>
        }
    </div>
    );
  }
}

ListarUsuarios.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchUsers: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { users} = state;
  return { users: users.items, isFetching: users.isFetching  };

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListarUsuarios);
