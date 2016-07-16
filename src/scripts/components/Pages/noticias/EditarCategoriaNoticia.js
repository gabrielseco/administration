import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { editCategoriaNoticia } from 'actions';
import { browserHistory } from 'react-router';
import PageHeader from 'UI/PageHeader';
import Loading from 'UI/Loading';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './category-form';
import find from 'lodash/find';
import { mapValues } from 'utils';

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

class EditarCategoriaNoticia extends Component {
  constructor(props) {
    super(props);
    this.state = {form: null};
  }
  componentWillMount(){
    const form = generateForm.apply(this, [titulo]);
    mapValues(this.props.categoria_noticia, form);
    this.setState({form: form});
  }

  makeAction(obj){
    this.props.editCategoriaNoticia(this.props.params.id, obj, function(response){
      browserHistory.push('/listar_categorias_noticias');
    });
  }
  render() {
    if(this.state.form === null){
      return <Loading/>;
    } else {
    return (
      <MainContainer data={breadcrumb}>
      <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
          <section className="forms-advanced">
            <PageHeader info={info}/>
            <Form form={this.state.form} makeAction={this.makeAction.bind(this)}/>
          </section>
      </div>
      </MainContainer>
    );
   }
  }
}
EditarCategoriaNoticia.propTypes = {
  categoria_noticia:PropTypes.object.isRequired
};
function mapStateToProps(state, props) {
  const {categorias_noticias} = state;
  return {
    categoria_noticia:find(categorias_noticias.items, {id: Number(props.params.id)})
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ editCategoriaNoticia }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditarCategoriaNoticia);
