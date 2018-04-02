const wikiDataProcessor = response => {
  let articles = response.data.query.random.map( article => {
    article.url = `https://en.wikipedia.org/wiki/${article.title}`;
    return article;
  })
  return { articles };
}

const wikiGetRequest = (axios, res) =>{
  axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnlimit=10&rnnamespace=0')
    .then(response => {
      res.send(wikiDataProcessor(response));
    })
    .catch(err => {
      console.log('error is:', err)
    })
}

module.exports = { wikiDataProcessor, wikiGetRequest }
