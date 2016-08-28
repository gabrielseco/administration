import ListarPortfolio from './ListarPortfolio';
import AltaCategoriaPortfolio from './AltaCategoriaPortfolio';
import ListarCategoriasPortfolio from './ListarCategoriasPortfolio'; 

module.exports = {
  portfolio:{
    path:'listar_portfolio',
    component: ListarPortfolio
  },
  listar_categorias_portfolio:{
    path:'listar_categorias_portfolio',
    component:ListarCategoriasPortfolio
  },
  alta_portfolio_categoria:{
    path:'anade_categoria_portfolio',
    component: AltaCategoriaPortfolio
  }

};
