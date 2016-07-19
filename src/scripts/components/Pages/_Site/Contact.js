import React, { Component, PropTypes } from 'react';
import Cover from './components/Cover';
import FormContacto from './components/FormContacto';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Cover/>
        <FormContacto/>
      </div>

    );
  }
}
Contact.propTypes = {
};

export default Contact;
