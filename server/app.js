const express = require('express');
const app = express();
const axios = require('axios');

app.get('/api', (req, res) => {
  axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=1&rnnamespace=0')
    .then(response => {
      var article = response.data.query.random[0]
      article.url = `https://en.wikipedia.org/wiki/${article.title}`
      res.send(article)
    })
    .catch(err => {
      console.log('error is:', err)
    })
});

module.exports = app;
