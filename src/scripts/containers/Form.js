import React, { Component, PropTypes } from 'react';
import FormGroup from 'components/Forms/FormGroup';
import ButtonGroup from 'components/Forms/ButtonGroup';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {elements: this.props.form.ELEMENTS};
  }
  render() {
    const elements = this.state.elements.map((res, i) => {
      return <FormGroup key={i} data={res}/>;
    });
    return (
      <div className="row m-b-40">
        <div className="col-md-12">
          <div className="well white">
            <form ref="myForm" encType="multipart/form-data" className="form-floating placeholder-form" >
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
