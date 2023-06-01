import React, { Component } from 'react'
import withCounter from './components/withCounter'
 
class ClickCounter extends Component {

  render() {
    let {count, incrementCount} = this.props
    return <div>
            <button onClick={incrementCount}> 
            {this.props.name} Clicked{count}times</button>
            </div>
    
  }
}

export default withCounter(ClickCounter)