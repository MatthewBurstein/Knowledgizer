import React, { Component } from 'react';
import Article from './Article';
import Controls from './Controls';
import { delayAndRepeat } from './helpers/ArticlesContainerHelpers.js';

class ArticlesContainer extends Component {
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

  clearArticles = () => {
    this.setState(prevState => ({ articles: [] }))
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
    return(
      <div>
        <Controls
          clearArticles={this.clearArticles}
        />
        {this.state.articles && this.state.articles.map(article => {
          return this.renderArticle(article)
        })}
      </div>
    )
  };
};

export default ArticlesContainer;
