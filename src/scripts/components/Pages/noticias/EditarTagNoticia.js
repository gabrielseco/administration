import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { editTagNoticia } from 'actions';
import { browserHistory } from 'react-router';
import PageHeader from 'UI/PageHeader';
import Loading from 'UI/Loading';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './tag-form';
import find from 'lodash/find';
import { mapValues } from 'utils';


const titulo = 'Tags';

const info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes modificar tags'
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
    NAME:'Tags',
    LINK: '/intranet/listar_tags_noticias'
  },
  {
    NAME: 'Modificación de tag'
  }
];

const form = generateForm('Modificación de tag');




class EditarTagNoticia extends React.Component {

  constructor(props) {
    super(props);
    this.state = {form: null};
  }

  componentWillMount(){
    const form = generateForm.apply(this, [titulo]);
    mapValues(this.props.tag_noticia, form);
    this.setState({form: form});
    console.log('form',form);
  }

  makeAction(obj){
    this.props.editTagNoticia(this.props.params.id, obj, function(response){
      browserHistory.push('/intranet/listar_tags_noticias');
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
  const {tags_noticias} = state;
  return {
    tag_noticia:find(tags_noticias.items, {id: Number(props.params.id)})
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ editTagNoticia }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditarTagNoticia);
