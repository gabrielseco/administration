import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import PageHeader from 'UI/PageHeader';
import DataTable from 'UI/DataTable';
import FloatingButton from 'UI/FloatingButton';
import MainContainer from 'containers/MainContainer';



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



class ListarTagsNoticias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tabla: '',api:'slide', modalLoading: false};
  }


  render() {
    return (
      <MainContainer data={breadcrumb}>
          <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
            <section className="forms-advanced">
              <PageHeader info={info}/>
              <div className="p-b-10">
                <FloatingButton icon="md md-add" link="/anade_tag_noticia"/>
              </div>
              <DataTable data={tabla}/>
            </section>
          </div>
        </MainContainer>
    );

  }
}

export default ListarTagsNoticias;
