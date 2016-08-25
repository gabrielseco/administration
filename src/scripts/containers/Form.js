import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FormGroup from 'components/Forms/FormGroup';
import ButtonGroup from 'components/Forms/ButtonGroup';
import jQuery from "jquery";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {elements: this.props.form.ELEMENTS};
  }
  componentWillMount(){
    require('assets/validator.min.js');
    //require('assets/jquery.hammer.js');
  }
  componentDidMount(){

    const node = ReactDOM.findDOMNode(this.refs.myForm);
    $(node).validator();

  }

  handleSubmit(e){
    e.preventDefault();
    let imagen = null;
    let obj = new Object();

    for(let i = 0; i < this.props.form.ELEMENTS.length; i++) {

      const key = this.props.form.ELEMENTS[i].ID;

      const type  = this.props.form.ELEMENTS[i].TYPE;
      let value = "";

      switch(type){
        case 'select-multiple':
          value = $("#"+key).select2('data');
          break;
        case 'note':
          value = $("#"+key).code();
          break;
        case 'file':
          imagen = "";
          break;
        default:
          try {
            value = document.getElementById(key).value;

          }
          catch(err) {
            value = this.props.form.ELEMENTS[i].VALUE;
          }

      }
      if(value === ""){
        value = null;
      }
      if(value === 'true' && type === 'switch'){
        value = 1;
      } else if(value === 'false' && type === 'switch'){
        value = 0;
      }

      obj[key] = value;
    }

    this.props.makeAction.bind(this)(obj);
  }

  render() {
    const elements = this.state.elements.map((res, i) => {
      return <FormGroup key={i} data={res}/>;
    });
    return (
      <div className="row m-b-40">
        <div className="col-md-12">
          <div className="well white">
            <form ref="myForm" encType="multipart/form-data"
                  className="form-floating placeholder-form" onSubmit={this.handleSubmit.bind(this)} >
              <fieldset>
                <legend>{this.props.form.TITULO}</legend>
                {elements}
                <ButtonGroup {...this.props} data={this.props.form.BUTTONS}/>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Form.propTypes = {
  form: PropTypes.object.isRequired
};
