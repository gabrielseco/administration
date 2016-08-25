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
      sent: 0,
      name:'',
      email:'',
      subject:'',
      message:''
    };
    this.defaultState = Object.assign({},this.state);
  }

  onSubmit(event){

    event.preventDefault();

    const form = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };

    console.log('form',form);

    this.props.sendContact(form, (res) => {
      this.reinitializeValues();
      this.showMessage();
    });

  }

  onChange(field, e){
    let nextState = {}
        nextState[field] = e.target.value;
        this.setState(nextState);
  }


  reinitializeValues(){
    this.setState({});
  }


  showMessage(){
    this.setState({
      sent: 1
    });
  }

  renderMessage(){
    const style = {
      background:'#2196F3',
      padding:'5px',
      marginBottom:'40px',
      marginTop:'-20px'
    }
    return (
      <div className="form-sent alert alert-success" style={style}>
        <p className="text-center" style={{color:'#fff'}}>El formulario ha sido envíado correctamente</p>
      </div>
    );
  }



  render(){
    const boxShadow = {
      boxShadow: 'none'
    };

    const {name, email, subject, message} = this.state;

    return(
      <section className="postcontents wrapper" itemProp="mainContentOfPage">
          <form action="/contacto" method="post" onSubmit={this.onSubmit} autoComplete="off">
          <p>Tu nombre (requerido)<br/>
              <span>
              <input type="text"  value={name} onChange={this.onChange.bind(this, 'name')}  style={boxShadow} required/></span> </p>
          <p>Tu email (requerido)<br/>
              <span>
              <input type="email" value={email}  onChange={this.onChange.bind(this, 'email')} style={boxShadow} required/></span> </p>
          <p>Asunto<br/>
              <span>
              <input type="text"  value={subject} onChange={this.onChange.bind(this, 'subject')} style={boxShadow}/></span> </p>
          <p>Tu mensaje<br/>
              <span>
              <textarea value={message} cols="40"  onChange={this.onChange.bind(this, 'message')} rows="10" style={boxShadow}></textarea></span> </p>
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
