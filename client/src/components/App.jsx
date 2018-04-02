import React, { Component } from 'react';
import Article from './Article';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState(res))
      .catch(err => console.log(err));
  };

  callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <h2>Knowledgizer</h2>
        <Article
          key={this.state.id}
          title={this.state.title}
          url={this.state.url}
        />
      </div>
    )
  }
}

export default App;
