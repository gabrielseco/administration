import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import {Link} from 'react-router';
import PageHeader from 'UI/PageHeader';
import DataTable from 'UI/DataTable';
import FloatingButton from 'UI/FloatingButton';
import MainContainer from 'containers/MainContainer';


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




export default class ListarUsuarios extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <MainContainer data={breadcrumb}>
      <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
          <section className="forms-advanced">
            <PageHeader info={info}/>
            <div className="p-b-10">
              <FloatingButton icon="md md-add" link="/anadir_usuario"/>
            </div>
            <DataTable data={tabla}/>
          </section>
      </div>
      </MainContainer>
    );
  }
}
ListarUsuarios.propTypes = {
};
