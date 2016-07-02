import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import PageHeader from 'UI/PageHeader';
import DataTable from 'UI/DataTable';
import FloatingButton from 'UI/FloatingButton';
import MainContainer from 'containers/MainContainer';



const titulo = 'Porfolio';
const texto  = 'Listado de portfolios';

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
  COMPONENT:'Portfolio',
  NAME: ''
};



class ListarPortfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tabla: '',api:'portfolio', modalLoading: false};
  }


  render() {
    return (
      <MainContainer data={breadcrumb}>
          <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
            <section className="forms-advanced">
              <PageHeader info={info}/>
              <div className="p-b-10">
                <FloatingButton icon="md md-add" link="/anade_portfolio"/>
              </div>
              <DataTable data={tabla}/>
            </section>
          </div>
        </MainContainer>
    );

  }
}

export default ListarPortfolio;
