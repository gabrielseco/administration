import React, { Component, PropTypes } from 'react';
import Cover from './components/Cover';
import PortfolioContainer from './components/Portfolio';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchActiveCategoriasPortfolio} from 'actions';
import Loading from  'UI/Loading';

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    const {fetchActiveCategoriasPortfolio} = this.props;
    fetchActiveCategoriasPortfolio();
  }
  render() {
    const headingBackground = {
      route:'/',
      title: 'Portfolio',
      description: 'Desarrollo Web'
    }
    const {isFetching, categorias_portfolio} = this.props;

    return (
      <div>
      {isFetching ?  <Loading/> :
      <div>
        <Cover backgroundImage="http://www.ggseco.com/wp-content/uploads/2015/01/hoodvista.jpg"
               headingBackground={headingBackground}
               center/>
        <PortfolioContainer filters={categorias_portfolio}/>
      </div>
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { categorias_portfolio} = state;
  return {
    categorias_portfolio: categorias_portfolio.items,
    isFetching: categorias_portfolio.isFetching
   };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchActiveCategoriasPortfolio}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
