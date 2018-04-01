const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ express: 'infrastructure complete'})
});

app.get('/api/hello', (req, res) => {
  res.send({ express: "hello from Express" })
});

module.exports = app;
