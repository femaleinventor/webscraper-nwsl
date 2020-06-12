import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
const routes = require('../src/routes');
const HTML = require('../src/client/components/HTML.jsx').default;
const App = require('../src/client/components/App.jsx').default;

export default function renderRoute(req, res) {
  // console.log('req: ', req.url);
  const branch = matchRoutes(routes['default'][0]['routes'], req.url);
  const promises = [];

  branch.forEach(({ route, match }) => {
// console.log('route: ', route);
// console.log('match: ', match);
    if (route.loadData) {
        promises.push(route.loadData(match));
    }
});

Promise.all(promises)
  .then(data => {
    const context = data.reduce((context, data) => Object.assign(context, data), {});
    const ddd = <StaticRouter location={req.url} context={context}>
    <App />
    </StaticRouter>;
    const app = renderToString(ddd);
    const html = renderToString(<HTML html={app} />);
    return res.send(`<!DOCTYPE html>${html}`);
  });
}
