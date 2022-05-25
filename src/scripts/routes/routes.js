import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Reviews from '../views/pages/reviews';

const routes = {
    '/': Home, // default page
    '/home': Home,
    '/favorite': Favorite,
    '/reviews': Reviews,
};

export default routes;