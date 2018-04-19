import React, { Component } from 'react';
import ArticleContainer from './ArticleContainer';

class App extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div>
        <h2>Knowledgizer</h2>
        <ArticleContainer />
      </div>
    )
  }
}

export default App;
