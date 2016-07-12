import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import moment from 'moment';
import PageHeader from 'UI/PageHeader';
import DataTable from 'UI/DataTable';
import FloatingButton from 'UI/FloatingButton';
import MainContainer from 'containers/MainContainer';
import { fetchNoticias, deleteNoticia } from 'actions';
import Loading from  'UI/Loading';
import Button from  'UI/Button';
import Modal from 'UI/Modal';



const titulo = 'Noticias';
const texto  = 'Listado de noticias';

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
      NAME:'Imagen',
      SORT: false
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
  BODY:[]
};


const infoModal = {
  COMPONENT:'Noticia',
  NAME: ''
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
        browserHistory.push('/editar_noticia/'+json[i]["id"]);
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




class ListarNoticias extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      api:'noticias',
      modal:false,
      modalLoading: false
    };

  }

  componentDidMount(){
    const {fetchNoticias} = this.props;
    fetchNoticias();
  }

  formatTable(obj){
    const headers = tabla.HEADERS;
    if(obj.length > 0){
      //passing the this context
      mapToTable.apply(this, [obj, headers, null]);
    }
  }


  render() {
    const {isFetching, noticias} = this.props;
    const {modalComponent} = this.state;

    return (
      <div>
      {isFetching ?  <Loading/> :
      <MainContainer data={breadcrumb}>
          {this.formatTable(noticias)}
          <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
            <section className="forms-advanced">
              <PageHeader info={info}/>
              <div className="p-b-10">
                <FloatingButton icon="md md-add" link="/anade_noticia"/>
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

ListarNoticias.propTypes = {
  noticias: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchNoticias: PropTypes.func.isRequired,
  deleteNoticia: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { noticias} = state;
  return { noticias: noticias.items, isFetching: noticias.isFetching  };

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchNoticias, deleteNoticia }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListarNoticias);
