import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
import LoginPage from '../components/LoginPage.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import Stacktraces from 'src/components/Dashboard/Views/Stacktraces.vue'
import Bookmarks from 'src/components/Dashboard/Views/Bookmarks.vue'

const routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'app',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'stacktraces',
        name: 'stacktraces',
        component: Stacktraces
      },
      {
        path: 'bookmarks',
        name: 'bookmarks',
        component: Bookmarks
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
