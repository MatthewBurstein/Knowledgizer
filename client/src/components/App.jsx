import React, { Component } from 'react';
import Article from './Article';

class App extends Component {
  constructor() {
    super();

    this.articles=[];

    this.state = {
      articles: [{id:'', title: '', url: ''}]
    };
  }


  componentDidMount() {
    this.callApi()
      .then(res => {
        console.log('res: ', res)
        this.articles = this.articles.concat(res.articles);
        console.log('this.articles', this.articles)
        this.setState(prevState => {
          console.log("prevstate", prevState);
          console.log('inside setState this.articles ', this.articles)
          console.log(prevState.articles)
          let newState = {articles: [...prevState.articles, this.articles[0]]}
          console.log(newState)
          return newState
        })
      })
      .catch(err => console.log(err));
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
  }

  render() {
    return (
      <div>
        <h2>Knowledgizer</h2>
        {this.state.articles.map(article => {
          return this.renderArticle(article)
        })}
      </div>
    )
  }
}

export default App;
