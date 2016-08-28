import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import PageHeader from 'UI/PageHeader';
import Loading from 'UI/Loading';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './form';
import { addSlide, uploadSlide } from 'actions';


const titulo = 'Slide';
const texto  = 'Alta de banner';

const info = {
    TITULO : titulo,
    ICON: 'md-add-circle',
    TEXTO: 'Desde este formulario puedes crear banners nuevos'
};
const breadcrumb = [
  {
    NAME: 'GGSECO.COM',
    LINK:'http://www.ggseco.com'
  },
  {
    NAME: titulo,
    LINK:'/intranet/listar_slide'
  },
  {
    NAME: texto
  }
];

const form = generateForm(titulo);

//TODO: MAKE THE UPLOAD

class AltaSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {form: null};
  }

  componentWillMount(){
    const form = generateForm.apply(this, [titulo, this.props.uploadSlide]);
    this.setState({form: form});
  }

  makeAction(obj){
    delete obj['imagen'];
    this.props.addSlide(obj, (response) => {

      browserHistory.push('/intranet/listar_slide');
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
            <Form form={this.state.form} makeAction={this.makeAction.bind(this)} />
          </section>
      </div>
      </MainContainer>
    );
  }
  }
}


AltaSlide.propTypes = {
  addSlide: PropTypes.func.isRequired,
  uploadSlide: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addSlide, uploadSlide }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AltaSlide);
