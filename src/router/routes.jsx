import Home from '../components/views/home/Home';
import Login from '../components/views/login/Login';

const baseRouterPaths = [
  {
    id: 'home',
    path: '/',
    view: <Home />,
  },
];

const loggedRouterPaths = [];

const unloggedRouterPaths = [
  {
    id: 'login',
    path: '/login',
    view: <Login />,
  },
];

export { baseRouterPaths, loggedRouterPaths, unloggedRouterPaths };
