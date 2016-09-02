import ListarPortfolio from './ListarPortfolio';
import AltaCategoriaPortfolio from './AltaCategoriaPortfolio';
import ListarCategoriasPortfolio from './ListarCategoriasPortfolio';
import EditarCategoriaPortfolio from './EditarCategoriaPortfolio';

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
  },
  editar_categoria_portfolio:{
    path:'editar_categoria_portfolio/:id',
    component: EditarCategoriaPortfolio
  }

};
