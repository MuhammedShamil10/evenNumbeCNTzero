import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    
  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    )
  }
}

export default counter