import React, { Component, PropTypes } from 'react';
import PageHeader from 'UI/PageHeader';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './form';

const titulo = 'Slide';
const texto  = 'Alta de banner';

const info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes crear banners nuevos'
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

const form = generateForm(titulo);



export default class AltaUsuario extends Component {
  constructor(props) {
    super(props);
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
AltaUsuario.propTypes = {
};
