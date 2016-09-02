import React, { Component, PropTypes } from 'react';
import Filters from './Filters';
import PortfolioList from './PortfolioList';


class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.filters = this.props.filters;
    this.data = [
      {
        title:'ReactIonic',
        img:'http://themes.webinane.com/wp/electric/portfolio/wp-content/uploads/sites/8/2015/04/16-585x277.jpg',
        categories:['Todas','Github','ReactJS']
      },
      {
        title:'PotterAPI',
        img:'http://themes.webinane.com/wp/electric/portfolio/wp-content/uploads/sites/8/2015/04/16-585x277.jpg',
        categories:['Todas','GraphQL','Github']
      }

    ]

    this.state = {
      selected: 'Todas',
      filteredData: this.data
    }


    this.onChange = this.onChange.bind(this);
  }


  onChange(selectedFilter){

    const data = this.data.filter(obj => {
      const isInside =  obj.categories.filter(category => {
        return category === selectedFilter
      });
      console.log('isInside',isInside)
      if(isInside.length > 0){
        return obj;
      }
    });

    console.log('data',data);

    this.setState({
      selected: selectedFilter,
      filteredData: data
    });
  }


  render() {
    return (
      <div className="portfolio">
        <div className="portfolio-wrapper-filters">
          <Filters filters={this.props.filters} selected={this.state.selected} onChange={this.onChange}/>
        </div>
        <PortfolioList filter={this.state.selected} data={this.state.filteredData}/>
      </div>
    );
  }
}

PortfolioContainer.propTypes = {
  filters: PropTypes.array.isRequired
};



export default PortfolioContainer;
