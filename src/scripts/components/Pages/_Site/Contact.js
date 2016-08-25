import React, { Component, PropTypes } from 'react';
import Cover from './components/Cover';
import FormContacto from './components/FormContacto';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const headingBackground = {
      route:'#',
      title: 'Contacto',
      description: 'En el siguiente formulario puedes contactar conmigo'
    }
    return (
      <div>
        <Cover backgroundImage="http://i2.wp.com/www.ggseco.com/wp-content/uploads/2015/03/dev_cover.jpg?fit=1670%2C1110"
               headingBackground={headingBackground}
               center/>
        <FormContacto/>
      </div>

    );
  }
}
Contact.propTypes = {
};

export default Contact;
