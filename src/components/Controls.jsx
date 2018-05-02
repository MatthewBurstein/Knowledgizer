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
        <button
          id='start-printing'
          onClick={this.props.startPrinting}
        >
          Start
        </button>
      </div>
    )
  }
}

export default Controls
