import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    };
  }

  onChange(item){
    if(this.props.onChange){
      this.props.onChange(item);
    }

    this.setState({
      selected: item
    });

  }

  render() {
    const {filters} = this.props;
    const {selected} = this.state;

    return (
      <div>
        <ul className="filters">
          {filters.map((item,i) => {
            const selectedClass = classNames({
              'selected': item === selected
            });
            return (<li key={i}
                        onClick={this.onChange.bind(this, item)}><a className={selectedClass}>{item}</a></li>);
          })}
        </ul>
      </div>
    );
  }
}
Filters.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
