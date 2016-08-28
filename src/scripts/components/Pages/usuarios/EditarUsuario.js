import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { editUser} from 'actions';
import find from 'lodash/find';
import PageHeader from 'UI/PageHeader';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './form';
import {browserHistory} from 'react-router';

import { mapValues } from 'utils';


const titulo = 'Usuarios';
const texto  = 'Desde este formulario puedes modificar usuarios';

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
    NAME: titulo
  },
  {
    NAME: 'Edición de usuario'
  }
];

const form = generateForm(titulo);

class EditarUsuario extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    mapValues(this.props.user, form);
  }
  //TODO:HAVE UPDATE REDUX REDUCER
  makeAction(obj){
    this.props.editUser(this.props.params.id, obj, function(response){
      browserHistory.push('/intranet/listar_usuarios');
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

function mapStateToProps(state, props) {
  const { users} = state;
  return { user:find(users.items, {id: Number(props.params.id)})
 };

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({editUser}, dispatch);
}


EditarUsuario.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EditarUsuario);
