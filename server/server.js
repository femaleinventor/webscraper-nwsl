import express from 'express';
import bodyParser from 'body-parser';   
import logger from 'morgan';
import renderMiddleware from './renderRoute';

const buildPath = '../build/index.bundle.js';
const app = express();
const port = 3000;

app.set('port', process.env.PORT || port);
// app.use(logger('short'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/favicon.ico', (req, res) => res.status(204));

app.use(express.static(buildPath));
app.use(express.static('../build/styles.min.css'));

require('./statistics/statisticsRoutes')(app);
// app.get('*', renderMiddleware);
// app.use('/api', players);

app.listen(port, () => {
    console.log("Listening on 3000~");
});

module.exports = app;