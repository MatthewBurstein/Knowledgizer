import express from 'express';
import path from 'path';
import open from 'open';
import config from '../webpack.config.dev';
import webpack from 'webpack';
import axios from 'axios';
import wdm from 'webpack-dev-middleware'
import { wikiGetRequest } from './helpers/serverHelpers'

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);
const NODE_ENV = process.env.NODE_ENV;

if(NODE_ENV !== 'test') {
  app.use(wdm(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
};

app.listen(port, err => {
  if (err) {
    console.log(err)
  }
  console.log(`Listening on port ${port}`)
  if (NODE_ENV !== 'test') {
    open(`http://localhost:${port}`)
  }
});

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/api', (req, res) => {
  wikiGetRequest(axios, res);
});

module.exports = app;
