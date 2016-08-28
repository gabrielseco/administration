import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import { bindActionCreators } from 'redux';
import PageHeader from 'UI/PageHeader';
import Loading from 'UI/Loading';
import MainContainer from 'containers/MainContainer';
import Form from 'containers/Form';
import {config} from 'config';
import {generateForm} from './form';
import { editSlide, uploadSlide } from 'actions';
import find from 'lodash/find';
import { mapValues } from 'utils';



const titulo = 'Slide';
const texto  = 'Desde este formulario puedes modificar banners nuevos';

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
    NAME: titulo,
    LINK:'/intranet/listar_slide'
  },
  {
    NAME: 'Edición de banner'
  }
];

const form = generateForm(titulo);

class EditarSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null
    };
  }
  componentWillMount(){
    const form = generateForm.apply(this, [titulo, this.props.uploadSlide]);
    mapValues(this.props.slide, form);
    this.setState({form: form});
  }

  makeAction(obj){
    this.props.editSlide(this.props.params.id, obj, function(response){
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
              <Form form={this.state.form} makeAction={this.makeAction.bind(this)}/>
            </section>
        </div>
        </MainContainer>
      );
    }
  }
}
EditarSlide.propTypes = {
  slide: PropTypes.object.isRequired,
  file:PropTypes.object.isRequired,
  editSlide: PropTypes.func.isRequired,
  uploadSlide: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
  const {slides} = state;
  return {
    file: slides.fileUpload,
    slide:find(slides.items, {id: Number(props.params.id)})
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ editSlide, uploadSlide }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditarSlide);
