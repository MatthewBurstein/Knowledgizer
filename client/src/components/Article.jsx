import React, { Component } from 'react';
import { wikiGetRequest } from '../helpers/requestHelper';

class Article extends Component {
  constructor() {
    super();

    let article =  wikiGetRequest();

    this.state = article;
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
