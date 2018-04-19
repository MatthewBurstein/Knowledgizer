import React, { Component } from 'react';
import Article from './Article';
import ArticleContainer from './ArticleContainer';
import { delayAndRepeat } from './helpers/AppHelpers.js';

class App extends Component {
  constructor() {
    super();

    this.articles=[];
    this.state = {
      articles: []
    };
  };


  componentDidMount() {
    this.callApi()
      .then(res => {
        this.articles = this.articles.concat(res.articles);
        delayAndRepeat(this.addArticleToState, this.articles, 1000);
      })
      .catch(err => console.log(err));
  };

  addArticleToState = article => {
    this.setState(prevState => ({ articles: [...prevState.articles, article] }));
  };

  async callApi() {
    const response = await fetch('/api');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  renderArticle(article) {
      return(
        <Article
          key={article.id}
          title={article.title}
          url={article.url}
          />
        )
  };

  render() {
    return (
      <div>
        <h2>Knowledgizer</h2>
        <ArticleContainer />
        {this.state.articles && this.state.articles.map(article => {
          return this.renderArticle(article)
        })}
      </div>
    )
  }
}

export default App;
