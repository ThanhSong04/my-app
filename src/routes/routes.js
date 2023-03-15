import Home from '../page/Home';
import About from '../page/About';
import Support from '../page/Support';

// Public routes
const publicRoutes = [
  { path: '/my-app', component: Home },
  { path: '/about', component: About },
  { path: '/support', component: Support, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
