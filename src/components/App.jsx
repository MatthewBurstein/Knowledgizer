import React, { Component } from 'react';
import ArticlesContainer from './ArticlesContainer';
import ControlsContainer from './ControlsContainer';

class App extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div>
        <h2>Knowledgizer</h2>
        <ArticlesContainer />
        <ControlsContainer />
      </div>
    )
  }
}

export default App;
