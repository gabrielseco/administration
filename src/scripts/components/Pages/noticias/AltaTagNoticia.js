import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import PageHeader from 'UI/PageHeader';
import Loading from 'UI/Loading';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './tag-form';
import { addTagNoticia } from 'actions';

const titulo = 'Tags';

const info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes crear tags'
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
    NAME:'Tags',
    LINK: '/listar_tags_noticias'
  },
  {
    NAME: 'Alta de tag'
  }
];

const form = generateForm('Alta de tag');




class AltaTagNoticia extends React.Component {

  constructor(props) {
    super(props);
    this.state = {form: null};
  }

  componentWillMount(){
    const form = generateForm.apply(this, [titulo]);
    this.setState({form: form});
  }

  makeAction(obj){
    delete obj['imagen'];
    this.props.addTagNoticia(obj, (response) => {

      browserHistory.push('/listar_tags_noticias');
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

AltaTagNoticia.propTypes = {
  addTagNoticia: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addTagNoticia }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AltaTagNoticia);
