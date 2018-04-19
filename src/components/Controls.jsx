import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return(
      <div>
        <button
          id='clear'
          onClick={this.props.clearArticles}
          />
      </div>

    )
  }
}

export default Controls
