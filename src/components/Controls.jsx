import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return(
      <div>
        <button
          id='clear'
          onClick={this.props.clearArticles}
        >
        Clear
      </button>
      </div>
    )
  }
}

export default Controls
