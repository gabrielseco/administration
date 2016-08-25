import Home from './Home';
import Contact from './Contact';
import Portfolio from './Portfolio';
import NotFound from './NotFound';


module.exports = {
  home:{
    path:'home',
    component: Home
  },
  contact:{
    path:'contact',
    component: Contact
  },
  portfolio:{
    path:'portfolio',
    component:Portfolio
  },
  not_found:{
    path:'*',
    component:NotFound
  }
};
