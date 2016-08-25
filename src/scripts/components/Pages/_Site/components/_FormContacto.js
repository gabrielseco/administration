import React, { Component, PropTypes } from 'react';
import {sendContact} from 'actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class FormContacto extends React.Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.form = {};
    this.state = {
      sent: 0
    };
  }

  onSubmit(event){

    event.preventDefault();

    const form = this.getValues.call(this.form);

    this.props.sendContact(form, (res) => {
      this.reinitializeValues.call(this.form);
      this.showMessage();
    });

  }


  reinitializeValues(){

    Object.keys(this).map(key => {
      document.getElementById(key).value = '';
    });

    return this;
  }

  getValues(){
    for(let key in this){
      this[key] = this[key].value;
    }

    return this;
  }

  showMessage(){
    this.setState({
      sent: 1
    });
  }

  renderMessage(){

    return (
      <div className="form-sent">
        <p>El formulario ha sido envíado correctamente</p>
      </div>
    );
  }



  render(){
    const boxShadow = {
      boxShadow: 'none'
    };

    return(
      <section className="postcontents wrapper" itemProp="mainContentOfPage">
          <form action="/contacto" method="post" onSubmit={this.onSubmit} autoComplete="off">
          <p>Tu nombre (requerido)<br/>
              <span>
              <input type="text" id="name" ref={node => this.form.name = node}  style={boxShadow} required/></span> </p>
          <p>Tu email (requerido)<br/>
              <span>
              <input type="email" id="email" ref={node => this.form.email = node} style={boxShadow} required/></span> </p>
          <p>Asunto<br/>
              <span>
              <input type="text" id="subject" ref={node => this.form.subject = node} style={boxShadow}/></span> </p>
          <p>Tu mensaje<br/>
              <span>
              <textarea id="message" ref={node => this.form.message = node} cols="40" rows="10" style={boxShadow}></textarea></span> </p>
          {this.state.sent === 1 ? this.renderMessage() : <div></div>}
          <input type="submit" value="Enviar"/>
          </form>

     </section>
  );
 }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ sendContact }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContacto);
