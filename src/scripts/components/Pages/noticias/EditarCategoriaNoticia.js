import React, { Component, PropTypes } from 'react';
import PageHeader from 'UI/PageHeader';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './category-form';
import {browserHistory} from 'react-router';

const titulo = 'Categoría';
const texto  = 'Desde este formulario puedes modificar categorías';

const info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: texto
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
    NAME: 'Edición de banner'
  }
];

const form = generateForm(titulo);

export default class EditarCategoriaNoticia extends Component {
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
EditarCategoriaNoticia.propTypes = {
};
