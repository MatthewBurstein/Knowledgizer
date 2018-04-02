import React, { Component } from 'react';
import Article from './Article';

class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: [{id:'', title: '', url: ''}]
    };
  }


  componentDidMount() {
    this.callApi()
      .then(res => this.setState(res))
      .catch(err => console.log(err));
  };

  async callApi() {
    const response = await fetch('/api');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div>
        <h2>Knowledgizer</h2>
        {this.state.articles.map(article => {
          return <Article
            key={article.id}
            title={article.title}
            url={article.url}
          />
        })}
      </div>
    )
  }
}

export default App;
