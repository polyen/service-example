import { permissions } from './serviceMenu';
import Page1 from '../pages/Page1';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

export const routes = [
  {
    path: '/example/page-1',
    requireAuth: true,
    component: Page1,
    permit: permissions,
  },
  {
    path: '/example/home',
    requireAuth: true,
    component: Home,
    permit: permissions,
  },
  {
    path: '/example/dashboard',
    requireAuth: true,
    component: Dashboard,
    permit: permissions,
  },
]