import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    mouseHandeler = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

  render() {
    let {count} = this.state
    return (
      <h2 onMouseOver={this.mouseHandeler}>Hover {count} times</h2>
    )
  }
}

export default HoverCounterTwo