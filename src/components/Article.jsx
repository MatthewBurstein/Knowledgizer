import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super();
  }


  render() {
    return(
      <div>
        <a href={this.props.url}>
          {this.props.title}
        </a>
      </div>
    )
  }
}

export default Article;
