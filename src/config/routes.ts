import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const routes = [
  {
    path: '/',
    component: Home,
    protected: false,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    protected: true,
  },
];

export default routes;