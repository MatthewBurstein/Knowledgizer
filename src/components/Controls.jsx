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
        <button
          id='stop-printing'
          onClick={this.props.stopPrinting}
        >
          Stop
        </button>
      </div>
    )
  }
}

export default Controls
