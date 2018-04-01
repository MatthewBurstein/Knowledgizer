import React, { Component } from 'react';
import Article from './Article';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <h2>Knowledgizer</h2>
        <p>{this.state.response}</p>
        <Article />
      </div>
    )
  }
}

export default App;
