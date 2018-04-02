const express = require('express');
const app = express();
const axios = require('axios');
const appHelpers = require('./helpers/appHelpers')
const wikiGetRequest = appHelpers.wikiGetRequest

app.get('/api', (req, res) => {
  wikiGetRequest(axios, res);
});

module.exports = app;
