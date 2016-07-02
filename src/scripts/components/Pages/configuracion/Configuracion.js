import React, { Component, PropTypes } from 'react';
import PageHeader from 'UI/PageHeader';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './form';

const titulo = 'Configuración';

const info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes crear un formulario'
};

const breadcrumb = [
  {
    NAME: 'GGSECO.COM',
    LINK:'http://www.ggseco.com'
  },
  {
    NAME:'Configuración'
  },

  {
    NAME: 'Alta de formulario'
  }
];

const form = generateForm('Alta de configuración');




class Configuracion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {api: ''};

  }

  render() {

    return (
      <MainContainer data={breadcrumb}>
      <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
          <section className="forms-advanced">
            <PageHeader info={info}/>
            <Form form={form}/>
          </section>
      </div>
      </MainContainer>
    );
  }
}
export default Configuracion;
