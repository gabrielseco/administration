import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import PageHeader from 'UI/PageHeader';
import DataTable from 'UI/DataTable';
import FloatingButton from 'UI/FloatingButton';
import MainContainer from 'containers/MainContainer';



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
      NAME:'Imagen',
      SORT: false
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
  COMPONENT:'Portfolio',
  NAME: ''
};



class ListarContactos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tabla: '',api:'contactos', modalLoading: false};
  }


  render() {
    return (
      <MainContainer data={breadcrumb}>
          <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
            <section className="forms-advanced">
              <PageHeader info={info}/>
              <DataTable data={tabla}/>
            </section>
          </div>
        </MainContainer>
    );

  }
}

export default ListarContactos;
