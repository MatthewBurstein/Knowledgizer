import React, { Component } from 'react';
import Article from './Article';
import Controls from './Controls';
import { delayAndRepeat } from './helpers/ArticlesContainerHelpers.js';

class ArticlesContainer extends Component {
  constructor() {
    super();

    this.shouldPrint = { print : true }
    this.articlesInQueue = [];
    this.state = {
      articles: []
    };
  };

  componentDidMount() {
    this.printArticles();
  };

  printArticles = () => {
    this.callApi()
      .then(res => {
        this.articlesInQueue = this.articlesInQueue.concat(res.articles);
        delayAndRepeat(this.addArticleToState, this.articlesInQueue, this.shouldPrint, 1000);
      })
      .catch(err => console.log('error in callApi is ', err));
  }

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

  stopPrinting = () => {
    this.shouldPrint['print'] = false
  }

  startPrinting = () => {
    this.shouldPrint['print'] = true;
    this.printArticles();
  }

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
          stopPrinting={this.stopPrinting}
          startPrinting={this.startPrinting}
        />
        {this.state.articles && this.state.articles.map(article => {
          return this.renderArticle(article)
        })}
      </div>
    )
  };
};

export default ArticlesContainer;
