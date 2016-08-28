import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { editNoticia, uploadNoticia } from 'actions';
import { browserHistory } from 'react-router';
import PageHeader from 'UI/PageHeader';
import Loading from 'UI/Loading';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './noticia-form';
import find from 'lodash/find';
import { mapValues } from 'utils';


const titulo = 'Noticias';

const info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes modificar noticias'
};

const breadcrumb = [
  {
    NAME: 'GGSECO.COM',
    LINK:'http://www.ggseco.com'
  },
  {
    NAME:'Noticias',
    LINK:'/intranet/listar_noticias'
  },
  {
    NAME: 'Modificación de noticia'
  }
];

const form = generateForm('Modificación de noticia');




class EditarNoticia extends React.Component {

  constructor(props) {
    super(props);
    this.state = {form: null};

  }

  componentWillMount(){
    const form = generateForm.apply(this, [titulo, this.props.uploadNoticia]);
    mapValues(this.props.noticia, form);
    this.setState({form: form});
  }

  makeAction(obj){
    this.props.editNoticia(this.props.params.id, obj, function(response){
      browserHistory.push('/intranet/listar_noticias');
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

function mapStateToProps(state, props) {
  const {noticias} = state;
  return {
    file: noticias.fileUpload,
    noticia:find(noticias.items, {id: Number(props.params.id)})
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ editNoticia, uploadNoticia }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditarNoticia);
