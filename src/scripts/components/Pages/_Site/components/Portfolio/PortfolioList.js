import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
export default class PortfolioList extends Component {
  constructor(props) {
    super(props);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      index:-1
    };
  }
  onMouseOver(index){
    this.setState({
      index: index + 1
    });
  }

  onMouseLeave(index){
    this.setState({
      index: 0
    });
  }

  render() {
    const {filter, data, filterName} = this.props;

    return (
      <div className="portfolio-list">
        {data.map((item, i) => {
          const __index = i + 1;
          const portfolioItemClass = classNames({
            'portfolio-item-hover': true,
            'hidden' : this.state.index !== __index
          });
          return (
            <div key={i} className="portfolio-item" onMouseOver={this.onMouseOver.bind(this, i)} onMouseLeave={this.onMouseLeave.bind(this,i)} >
              <img src={item.img} alt={item.title} />
              <div className={portfolioItemClass}>
                <div className="portfolio-meta">
                  <h3 className="portfolio-item-title">{item.title}</h3>
                  <p className="portfolio-category-title">{filter}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

PortfolioList.propTypes = {
  filter: PropTypes.string.isRequired,
  data:PropTypes.arrayOf(PropTypes.object).isRequired
};
