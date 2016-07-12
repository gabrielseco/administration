import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import {Link, browserHistory} from 'react-router';
import PageHeader from 'UI/PageHeader';
import DataTable from 'UI/DataTable';
import FloatingButton from 'UI/FloatingButton';
import MainContainer from 'containers/MainContainer';
import { fetchUsers, deleteUser } from 'actions';
import Loading from  'UI/Loading';
import Button from  'UI/Button';
import Modal from 'UI/Modal';






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

function mapToTable(json, headers, func){


  let body = [];


  for(let i = 0; i < json.length; i++){

    const fecha = moment(json[i]["createdAt"]).format("DD/MM/YYYY");

    const data = {
      TITLE: 'Eliminar usuario',
      DESCRIPTION:'Desea eliminar el usuario con nombre: '+ json[i]["nombre"]
    };

    const borrar = {
      CLASS:'btn btn-danger',
      NAME:'Eliminar',
      CLICK: () => {
        console.log('this',this);
        const id = json[i]["id"];
        this.setState({
          modalComponent: <Modal data={data} remove={this.deleteUser.bind(this,id)}/>
        });

        //func['deleteUser']();
      }
    };

    const editar = {
      CLASS:'btn btn-primary',
      NAME:'Editar',
      CLICK:() => {
        browserHistory.push('/editar_usuario/'+json[i]["id"]);
      }
    };

    editar.ID = json[i]["id"];
    borrar.ID = json[i];

    //borrar.ACTIONS = AppActions;

    const obj = {
      fecha: fecha,
      activo: json[i]["activo"] ? "Sí" : "No",
      usuario: json[i]["nombre"],
      editar: <Button data={editar}/>,
      eliminar: <Button data={borrar}/>
    };

    body.push(obj);
  }


  tabla.BODY = body;


}



class ListarUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalComponent: null
    };
  }
  componentDidMount(){
    const {fetchUsers} = this.props;
    fetchUsers();
  }
  //TODO:UPDATE REDUX
  deleteUser(id){
    this.props.deleteUser(id, function(response){
      console.log('response',response);
      location.reload();
    });
  }

  formatTable(users){
    const headers = tabla.HEADERS;
    if(users.length > 0){
      //passing the this context
      mapToTable.apply(this, [users, headers, null]);
    }

  }
  render() {
    const {isFetching, users} = this.props;
    const {modalComponent} = this.state;

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
        {modalComponent}
        </MainContainer>
        }
    </div>
    );
  }
}

ListarUsuarios.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchUsers: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { users} = state;
  return { users: users.items, isFetching: users.isFetching  };

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchUsers, deleteUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListarUsuarios);
