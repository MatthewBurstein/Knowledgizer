const wikiDataProcessor = data => {
  const article =  data.data.query.random[0];
  article.url = `https://en.wikipedia.org/wiki/${article.title}`;
  return article;
}

const wikiGetRequest = (axios, res) =>{
  axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=1&rnnamespace=0')
    .then(response => {
      res.send(wikiDataProcessor(response));
    })
    .catch(err => {
      console.log('error is:', err)
    })
}

module.exports = { wikiDataProcessor, wikiGetRequest }
