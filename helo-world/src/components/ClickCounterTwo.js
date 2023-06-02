import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
    }
    }
    increamentCount = () => {
        this.setState(prevState => {
            return {count: prevState.count +1}
        })
    }
  render() {
      const {count} = this.state
      return <button onClick={this.increamentCount}>clicked {count}times</button>
  }

} 
export default ClickCounterTwo