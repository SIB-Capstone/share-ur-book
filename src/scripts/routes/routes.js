import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Reviews from '../views/pages/reviews';
import Detail from '../views/pages/detail';
import About from '../views/pages/aboutus';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/reviews': Reviews,
  '/detail/:id': Detail,
  '/aboutus': About,
};

export default routes;