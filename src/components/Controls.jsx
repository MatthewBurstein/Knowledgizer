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
          disabled={!this.props.isPrinting}
        >
          Stop
        </button>
        <button
          id='start-printing'
          onClick={this.props.startPrinting}
          disabled={this.props.isPrinting}
        >
          Start
        </button>
      </div>
    )
  }
}

export default Controls
