import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

const routes = require('../src/routes');
const HTML = require('../src/client/components/HTML.jsx').default;
const App = require('../src/client/components/App.jsx').default;

export default function renderRoute(req, res) {
    const branch = matchRoutes(routes['default'][0]['routes'], req.url);
    // const currentRoute = routes.find(route => matchPath(req.url, route)) || {};

    // console.log('currentRoute: ', currentRoute);

    const holder = [];
    
    branch.forEach(({ route, match }) => {
        if (route.loadData) {
            holder.push(route.loadData(match));
        };
    });

    console.log('holder: ', holder);

    Promise.all(holder)
        .then(data => {
            // const contextData = data.reduce((context, data) => Object.assign(context, data), {});
            const contextData = {};
            const ddd = <StaticRouter location={req.url} context={contextData}>
                <App />
            </StaticRouter>;
            // console.log('ddd: ', ddd);
            const app = renderToString(ddd);
            const html = renderToString(<HTML html={app} />);
            return res.send(`<!DOCTYPE html>${html}`);
        })
};