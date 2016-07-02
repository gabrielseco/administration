import React, { Component, PropTypes } from 'react';
export default class Modal extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    $("#exampleModal").modal('show');
  }
  render() {
    return (
      <div className="modal"  id="exampleModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">{this.props.data.TITLE}</h4>
              </div>
              <div className="modal-body">
                {this.props.data.DESCRIPTION}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="button" data-dismiss="modal" className="btn btn-primary" onClick={this.props.remove.bind(this)} >Eliminar</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
Modal.propTypes = {
};
