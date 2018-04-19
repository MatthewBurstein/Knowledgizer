import React, { Component } from 'react';
import ArticlesContainer from './ArticlesContainer';

class App extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div>
        <h2>Knowledgizer</h2>
        <ArticlesContainer />
      </div>
    )
  }
}

export default App;
