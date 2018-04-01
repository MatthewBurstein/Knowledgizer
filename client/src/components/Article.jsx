import React, { Component } from 'react';

class Article extends Component {
  constructor() {
    super();

    // let article =  wikiGetRequest();

    this.state;
  }


  render() {
    return(
      <div>
        <a href={this.state.url}>
          {this.state.title}
        </a>
      </div>
    )
  }
}

export default Article;
