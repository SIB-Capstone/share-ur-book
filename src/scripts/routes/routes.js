import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Reviews from '../views/pages/reviews';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Favorite,
  '/reviews': Reviews,
  '/detail/:id': Detail,
};

export default routes;