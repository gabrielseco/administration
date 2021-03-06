import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import moment from 'moment';
import PageHeader from 'UI/PageHeader';
import DataTable from 'UI/DataTable';
import FloatingButton from 'UI/FloatingButton';
import MainContainer from 'containers/MainContainer';
import { fetchCategoriaNoticias, deleteCategoriaNoticia } from 'actions';
import Loading from  'UI/Loading';
import Button from  'UI/Button';
import Imagen from  'UI/Imagen';
import Modal from 'UI/Modal';

const titulo = 'Categorías';
const texto  = 'Listado de categorías';

const info = {
    TITULO : titulo,
    ICON: 'md md-list',
    TEXTO: texto
};

const breadcrumb = [
  {
    NAME: 'GGSECO.COM',
    LINK:'http://www.ggseco.com',
    TARGET:'_blank'
  },
  {
    NAME: 'Noticias',
    LINK:'/intranet/listar_noticias'
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
      NAME:'Activo',
      SORT:true
    },
    {
      NAME:'Titulo',
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
  COMPONENT:'Categoría',
  NAME: ''
};

function mapToTable(json, headers, func){


  let body = [];


  for(let i = 0; i < json.length; i++){

    const data = {
      TITLE: 'Eliminar categoría',
      DESCRIPTION:'Desea eliminar la categoria con titulo: '+ json[i]["titulo"]
    };


    const borrar = {
      CLASS:'btn btn-danger',
      NAME:'Eliminar',
      CLICK: () => {
        const id = json[i]["id"];
        this.setState({
          modalComponent: <Modal data={data} remove={this.delete.bind(this,id)}/>
        });

      }
    };

    const editar = {
      CLASS:'btn btn-primary',
      NAME:'Editar',
      CLICK:() => {
        browserHistory.push("/intranet" +'/editar_categoria_noticia/'+json[i]["id"]);
      }
    };

    editar.ID = json[i]["id"];
    borrar.ID = json[i];

    //borrar.ACTIONS = AppActions;

    const obj = {
      activo: json[i]["activo"] ? "Sí" : "No",
      titulo: json[i]["titulo"],
      editar: <Button data={editar}/>,
      eliminar: <Button data={borrar}/>
    };

    body.push(obj);
  }


  tabla.BODY = body;


}



class ListarCategoriasNoticias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:false,
      modalLoading: false
    };
  }

  componentWillMount(){
    const {fetchCategoriaNoticias} = this.props;
    fetchCategoriaNoticias();
  }

  formatTable(obj){
    const headers = tabla.HEADERS;
    if(obj.length > 0){
      //passing the this context
      mapToTable.apply(this, [obj, headers, null]);
    }
  }

  delete(id){
    this.props.deleteCategoriaNoticia(id, function(response){
      console.log('response',response);
      location.reload();
    });
  }



  render() {
    const {isFetching, categorias_noticias} = this.props;
    const {modalComponent} = this.state;
    return (
      <div>
        {isFetching ?  <Loading/> :

        <MainContainer data={breadcrumb}>
        {this.formatTable(categorias_noticias)}
            <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
              <section className="forms-advanced">
                <PageHeader info={info}/>
                <div className="p-b-10">
                  <FloatingButton icon="md md-add" link="/intranet/anade_categoria_noticia"/>
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

ListarCategoriasNoticias.propTypes = {
  categorias_noticias: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCategoriaNoticias: PropTypes.func.isRequired,
  deleteCategoriaNoticia: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { categorias_noticias} = state;
  return { categorias_noticias: categorias_noticias.items, isFetching: categorias_noticias.isFetching  };

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCategoriaNoticias, deleteCategoriaNoticia }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListarCategoriasNoticias);
