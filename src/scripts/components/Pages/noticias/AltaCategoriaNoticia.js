import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import PageHeader from 'UI/PageHeader';
import Loading from 'UI/Loading';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './category-form';
import { addCategoriaNoticia } from 'actions';

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




class AltaCategoriaNoticia extends React.Component {

  constructor(props) {
    super(props);
    this.state = {form: null};
  }

  makeAction(obj){
    this.props.addCategoriaNoticia(obj, (response) => {

      browserHistory.push('/listar_categorias_noticias');
    });
  }

  render() {

    return (
      <MainContainer data={breadcrumb}>
      <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
          <section className="forms-advanced">
            <PageHeader info={info}/>
            <Form form={form} makeAction={this.makeAction.bind(this)}/>
          </section>
      </div>
      </MainContainer>
    );
  }
}

AltaCategoriaNoticia.propTypes = {
  addTagNoticia: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addCategoriaNoticia }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AltaCategoriaNoticia);
