import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import moment from 'moment';
import PageHeader from 'UI/PageHeader';
import DataTable from 'UI/DataTable';
import FloatingButton from 'UI/FloatingButton';
import MainContainer from 'containers/MainContainer';
import { fetchCategoriasPortfolio, deleteCategoriaPortfolio } from 'actions';
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
    NAME: 'Portfolio',
    LINK:'/intranet/listar_portfolio'
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
        browserHistory.push("/intranet" +'/editar_categoria_portfolio/'+json[i]["id"]);
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



class ListarCategoriasPortfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:false,
      modalLoading: false
    };
  }

  componentWillMount(){
    const {fetchCategoriasPortfolio} = this.props;
    fetchCategoriasPortfolio();
  }

  formatTable(obj){
    const headers = tabla.HEADERS;
    if(obj.length > 0){
      //passing the this context
      mapToTable.apply(this, [obj, headers, null]);
    }
  }

  delete(id){
    this.props.deleteCategoriaPortfolio(id, function(response){
      console.log('response',response);
      location.reload();
    });
  }



  render() {
    const {isFetching, categorias_portfolio} = this.props;
    const {modalComponent} = this.state;
    return (
      <div>
        {isFetching ?  <Loading/> :

        <MainContainer data={breadcrumb}>
        {this.formatTable(categorias_portfolio)}
            <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
              <section className="forms-advanced">
                <PageHeader info={info}/>
                <div className="p-b-10">
                  <FloatingButton icon="md md-add" link="/intranet/anade_categoria_portfolio"/>
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

ListarCategoriasPortfolio.propTypes = {
  categorias_noticias: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCategoriasPortfolio: PropTypes.func.isRequired,
  deleteCategoriaPortfolio: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { categorias_portfolio} = state;
  return { categorias_portfolio: categorias_portfolio.items, isFetching: categorias_portfolio.isFetching  };

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCategoriasPortfolio, deleteCategoriaPortfolio }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListarCategoriasPortfolio);
