import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import moment from 'moment';
import PageHeader from 'UI/PageHeader';
import DataTable from 'UI/DataTable';
import FloatingButton from 'UI/FloatingButton';
import MainContainer from 'containers/MainContainer';
import { fetchContacts, deleteContact } from 'actions';
import Loading from  'UI/Loading';
import Button from  'UI/Button';
import Modal from 'UI/Modal';



const titulo = 'Contactos';
const texto  = 'Listado de contactos';

const info = {
    TITULO : titulo,
    ICON: 'md md-list',
    TEXTO: texto
};

const breadcrumb = [
  {
    NAME: 'GGSECO.COM',
    LINK:'http://www.ggseco.com'
  },
  {
    NAME: titulo
  },
  {
    NAME: texto
  }
];


const tabla = {
  HEADERS:[
    {
      NAME:'Fecha',
      SORT: false
    },
    {
      NAME:'Nombre',
      SORT: true
    },
    {
      NAME:'Ver',
      SORT: false
    },
    {
      NAME:'Borrar',
      SORT: false
    }
  ],
  BODY:[]
};



function mapToTable(json, headers, func){


  let body = [];


  for(let i = 0; i < json.length; i++){

    const fecha = moment(json[i]["createdAt"]).format("DD/MM/YYYY");

    const data = {
      TITLE: 'Eliminar contacto',
      DESCRIPTION:'Desea eliminar el contacto con nombre: '+ json[i]["nombre"]
    };

    const borrar = {
      CLASS:'btn btn-danger',
      NAME:'Eliminar',
      CLICK: () => {
        console.log('this',this);
        const id = json[i]["id"];
        this.setState({
          modalComponent: <Modal data={data} remove={this.deleteContact.bind(this,id)}/>
        });

        //func['deleteUser']();
      }
    };

    const ver = {
      CLASS:'btn btn-primary',
      NAME:'Ver',
      CLICK:() => {
        browserHistory.push("/intranet" + '/ver_contacto/'+json[i]["id"]);
      }
    };

    ver.ID = json[i]["id"];
    borrar.ID = json[i];

    //borrar.ACTIONS = AppActions;

    const obj = {
      fecha: fecha,
      nombre: json[i]["nombre"],
      editar: <Button data={ver}/>,
      eliminar: <Button data={borrar}/>
    };

    body.push(obj);
  }


  tabla.BODY = body;


}

class ListarContactos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tabla: '',api:'contactos', modalComponent: null};
  }

  componentDidMount(){
    const {fetchContacts} = this.props;
    fetchContacts(this.state.api);
  }

  formatTable(contacts){
    const headers = tabla.HEADERS;
    if(contacts.length > 0){
      //passing the this context
      mapToTable.apply(this, [contacts, headers, null]);
    }

  }

  deleteContact(id){
    this.props.deleteContact(id, function(response){
      console.log('response',response);
      location.reload();
    });
  }



  render() {
    const {isFetching, contacts} = this.props;
    const {modalComponent} = this.state;

    return (
      <div>
      {isFetching ?  <Loading/> :
      <MainContainer data={breadcrumb}>
        {this.formatTable(contacts)}
          <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
            <section className="forms-advanced">
              <PageHeader info={info}/>
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

function mapStateToProps(state) {
  const { contacts } = state;
  return { contacts: contacts.items, isFetching: contacts.isFetching  };

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchContacts, deleteContact }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListarContactos);
