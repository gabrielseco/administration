import React, { Component, PropTypes } from 'react';


class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.active = this.props.display ? 'display--block' : 'display--hidden';
    this.classes = 'searchoverlay ' + this.active;
    this.state = {
      classes: this.classes,
      active: this.active
    };
  }

  handleDisplay() {
    this.active = 'display--hidden';
    this.classes = 'searchoverlay';
    this.setState({
      active: this.active,
      classes: this.classes
    });
  }

  render(){
    return(
      <div>
        <div className={this.classes}>
          <i className="fa fa-times closesearch" onClick={this.handleDisplay.bind(this)}></i>
          <form role="search" method="get" className="searchform" action="" _lpchecked="1">
            <input type="text" defaultValue="" name="q" className="query" placeholder="Buscar..." autoComplete="false"/>
            <i className="fa fa-search submit"></i>
          </form>
        </div>
      </div>
  );
 }
}

SearchForm.PropTypes = {
  display: PropTypes.bool.isRequired
};

export default SearchForm;
