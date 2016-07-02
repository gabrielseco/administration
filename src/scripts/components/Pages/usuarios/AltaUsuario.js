import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import PageHeader from 'UI/PageHeader';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './form';
import {addUser} from 'actions';

const titulo = 'Usuarios';
const texto  = 'Alta de usuario';

const info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes crear usuarios nuevos'
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



class AltaUsuario extends Component {
  constructor(props) {
    super(props);
  }
  makeAction(obj){

    this.props.addUser(obj, function(response){
      browserHistory.push('/listar_usuarios');
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


AltaUsuario.propTypes = {
  addUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {};

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AltaUsuario);
