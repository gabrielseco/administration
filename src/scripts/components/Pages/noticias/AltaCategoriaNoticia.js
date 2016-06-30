import React, { Component, PropTypes } from 'react';
import PageHeader from 'UI/PageHeader';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './category-form'; 

const titulo = 'Categoría';

const info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes crear categorías'
};

const breadcrumb = [
  {
    NAME: 'GGSECO.COM',
    LINK:'http://www.ggseco.com'
  },
  {
    NAME:'Noticias',
    LINK:'/listar_noticias'
  },
  {
    NAME:'Categorías',
    LINK: '/listar_noticias_categorias'
  },
  {
    NAME: 'Alta de categoría'
  }
];

const form = generateForm('Alta de categoría');




class AltaTagNoticia extends React.Component {

  constructor(props) {
    super(props);
    this.state = {api: 'tags_noticias'};

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
export default AltaTagNoticia;