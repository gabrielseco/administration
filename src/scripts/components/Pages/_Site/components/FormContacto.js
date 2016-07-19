import React, { Component, PropTypes } from 'react';

class FormContacto extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className="postcontents wrapper" itemProp="mainContentOfPage">
          <form action="/contacto" method="post">
          <p>Tu nombre (requerido)<br/>
              <span>
              <input type="text" name="nombre" value="" size="40"/></span> </p>
          <p>Tu email (requerido)<br/>
              <span>
              <input type="email" name="email" value="" size="40"/></span> </p>
          <p>Asunto<br/>
              <span>
              <input type="text" name="subject" value="" size="40"/></span> </p>
          <p>Tu mensaje<br/>
              <span>
              <textarea name="message" cols="40" rows="10"></textarea></span> </p>
          <input type="submit" value="Enviar"/>
          </form>

     </section>
  );
 }
}

export default FormContacto;
