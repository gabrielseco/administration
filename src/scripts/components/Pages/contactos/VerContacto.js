import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import find from 'lodash/find';
import PageHeader from 'UI/PageHeader';
import Card from 'UI/Card';
import MainContainer from 'containers/MainContainer';
import {config} from 'config';

const titulo = 'Contactos';
const texto  = 'Ver contacto';

const info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes ver los datos del contacto'
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

class VerContacto extends Component {
  constructor(props) {
    super(props);
    this.template = this.template.bind(this);
    this.title = this.title.bind(this);
  }

  template(){
    return `
    <p>Ha contactado contigo la siguiente persona:</p>
    <p><b>Nombre</b>: ${this.props.contact.nombre}</p>
    <p><b>Correo</b>: ${this.props.contact.email}</p>
    <p><b>Telefono</b>: ${this.props.contact.telefono}</p>
    <p><b>Observaciones</b>: ${this.props.contact.observaciones}</p>
    `;
  }

  title(){
    return `Contacto #${this.props.contact.id}`;
  }

  render() {
    return (
      <MainContainer data={breadcrumb}>
      <div className="main-content" autoscroll="true" bs-affix-target="" init-ripples="">
          <section className="forms-advanced">
            <PageHeader info={info}/>
            <Card title={this.title()} template={this.template()}/>
          </section>
      </div>
      </MainContainer>
    );
  }
}

VerContacto.propTypes = {
  contact: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  const { contacts} = state;
  console.log('props',props);
  console.log('contacts',contacts)
  return { contact:find(contacts.items, {id: Number(props.params.id)})
 };

}

function mapDispatchToProps(dispatch){
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(VerContacto);
