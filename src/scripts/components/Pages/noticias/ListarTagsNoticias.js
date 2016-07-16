import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import moment from 'moment';
import PageHeader from 'UI/PageHeader';
import DataTable from 'UI/DataTable';
import FloatingButton from 'UI/FloatingButton';
import MainContainer from 'containers/MainContainer';
import { fetchTagNoticias, deleteTagNoticia } from 'actions';
import Loading from  'UI/Loading';
import Button from  'UI/Button';
import Modal from 'UI/Modal';


const titulo = 'Tags';
const texto  = 'Listado de tags';

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
    LINK:'/listar_noticias'
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
  COMPONENT:'Tag',
  NAME: ''
};

function mapToTable(json, headers, func){


  let body = [];


  for(let i = 0; i < json.length; i++){

    const data = {
      TITLE: 'Eliminar tag',
      DESCRIPTION:'Desea eliminar el tag con titulo: '+ json[i]["titulo"]
    };


    const borrar = {
      CLASS:'btn btn-danger',
      NAME:'Eliminar',
      CLICK: () => {
        console.log('this',this);
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
        browserHistory.push('/editar_tag_noticia/'+json[i]["id"]);
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



class ListarTagsNoticias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:false,
      modalLoading: false
    };
  }

  componentWillMount(){
    const {fetchTagNoticias} = this.props;
    fetchTagNoticias();
  }

  formatTable(obj){
    const headers = tabla.HEADERS;
    if(obj.length > 0){
      //passing the this context
      mapToTable.apply(this, [obj, headers, null]);
    }
  }

  delete(id){
    this.props.deleteTagNoticia(id, function(response){
      console.log('response',response);
      location.reload();
    });
  }


  render() {
    const {isFetching, tags_noticias} = this.props;
    const {modalComponent} = this.state;
    return (
      <div>
      {isFetching ?  <Loading/> :
      <MainContainer data={breadcrumb}>
        {this.formatTable(tags_noticias)}
          <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
            <section className="forms-advanced">
              <PageHeader info={info}/>
              <div className="p-b-10">
                <FloatingButton icon="md md-add" link="/anade_tag_noticia"/>
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

ListarTagsNoticias.propTypes = {
  tags_noticias: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchNoticias: PropTypes.func.isRequired,
  deleteNoticia: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { tags_noticias} = state;
  return { tags_noticias: tags_noticias.items, isFetching: tags_noticias.isFetching  };

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchTagNoticias, deleteTagNoticia }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListarTagsNoticias);
