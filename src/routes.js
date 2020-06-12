import Root from './client/components/Root';
import Home from './client/components/Home';
import App from './client/components/App';
import Main from './client/components/Main';
import NotFound from './client/components/NotFound';

import loadData from './loadData';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: App,
        loadData: props => {
          return;
        }
      },
      {
        path: '/players',
        exact: true,
        component: Home,
        loadData: props => {
          return loadData.getPlayersStats();
        }
      },
      {
        path: '/teams',
        exact: true,
        component: Main,
        loadData: props => {
          console.log("Route PAth: MAINN");
          return props
        }
      },
      {
        path: '*',
        restricted: false,
        component: NotFound
      }
    ]
  }
];

export default routes;
