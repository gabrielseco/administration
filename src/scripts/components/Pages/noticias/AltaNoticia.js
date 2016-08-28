import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import PageHeader from 'UI/PageHeader';
import Loading from 'UI/Loading';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './noticia-form';
import { addNoticia, uploadNoticia } from 'actions';


const titulo = 'Noticias';

const info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes crear noticia'
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
    NAME: 'Alta de noticia'
  }
];

const form = generateForm('Alta de noticia');




class AltaNoticia extends React.Component {

  constructor(props) {
    super(props);
    this.state = {form: null};

  }

  componentWillMount(){
    const form = generateForm.apply(this, [titulo, this.props.uploadNoticia]);
    this.setState({form: form});
  }

  makeAction(obj){
    delete obj['imagen'];
    this.props.addNoticia(obj, (response) => {

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

AltaNoticia.propTypes = {
  addNoticia: PropTypes.func.isRequired,
  uploadNoticia: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addNoticia, uploadNoticia }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AltaNoticia);
