import React, { Component } from 'react';

class Article extends Component {
  constructor() {
    super();

    let article =  { title: 'some headline', body: 'some body', url: 'some url'}

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
