import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory} from 'react-router';
import moment from 'moment';
import PageHeader from 'UI/PageHeader';
import DataTable from 'UI/DataTable';
import FloatingButton from 'UI/FloatingButton';
import MainContainer from 'containers/MainContainer';
import Loading from  'UI/Loading';
import Button from  'UI/Button';
import Imagen from 'UI/Imagen';
import Modal from 'UI/Modal';

import { fetchSlides, deleteSlide } from 'actions';




const titulo = 'Slide';
const texto  = 'Listado de banners';

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
  COMPONENT:'Slide',
  NAME: ''
};


function mapToTable(json, headers, func){


  let body = [];


  for(let i = 0; i < json.length; i++){

    const imagen = {
      URL:"http://localhost:1337/images/"+json[i]["imagenFD"],
      WIDTH:200,
      TITLE:json[i]["titulo"]
    };

    const data = {
      TITLE: 'Eliminar slide',
      DESCRIPTION:'Desea eliminar el slide con titulo: '+ json[i]["titulo"]
    };

    const borrar = {
      CLASS:'btn btn-danger',
      NAME:'Eliminar',
      CLICK: () => {
        console.log('this',this);
        const id = json[i]["id"];
        this.setState({
          modalComponent: <Modal data={data} remove={this.deleteSlide.bind(this,id)}/>
        });

        //func['deleteUser']();
      }
    };

    const editar = {
      CLASS:'btn btn-primary',
      NAME:'Editar',
      CLICK:() => {
        browserHistory.push('/editar_slide/'+json[i]["id"]);
      }
    };

    editar.ID = json[i]["id"];
    borrar.ID = json[i];

    //borrar.ACTIONS = AppActions;

    const obj = {
      imagen: <Imagen data={imagen}/>,
      activo: json[i]["activo"] ? "Sí" : "No",
      titulo: json[i]["titulo"],
      editar: <Button data={editar}/>,
      eliminar: <Button data={borrar}/>
    };

    body.push(obj);
  }


  tabla.BODY = body;


}




class ListarSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modal:false, modalComponent: false};
  }

  componentDidMount(){
    const {fetchSlides} = this.props;
    fetchSlides();
  }

  formatTable(slides){
    const headers = tabla.HEADERS;
    if(slides.length > 0){
      //passing the this context
      mapToTable.apply(this, [slides, headers, null]);
    }

  }

  deleteSlide(id){
    this.props.deleteSlide(id, function(response){
      console.log('response',response);
      location.reload();
    });
  }


  render() {
    const {isFetching, slides} = this.props;
    const {modalComponent} = this.state;

    return (
      <div>
      {isFetching ?  <Loading/> :
      <MainContainer data={breadcrumb}>
        {this.formatTable(slides)}

          <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
            <section className="forms-advanced">
              <PageHeader info={info}/>
              <div className="p-b-10">
                <FloatingButton icon="md md-add" link="/anade_slide"/>
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

ListarSlide.PropTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchSlides: PropTypes.func.isRequired,
  deleteSlide: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { slides} = state;
  return { slides: slides.items, isFetching: slides.isFetching  };

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchSlides, deleteSlide }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListarSlide);
