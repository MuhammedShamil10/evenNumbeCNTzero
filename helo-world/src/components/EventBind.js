import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: "Helo"
      }
    //   this.clickEvent = this.clickEvent.bind(this)
    }
    
    // clickEvent() {
    //     this.setState({
    //         message: "one Piece"
    //     })
    // }

clickEven = () => {
    this.setState({
        message: "one Piece"
    })
}


  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        {/* <button onClick={this.clickEvent.bind(this)}>ClickEvent</button> */}
        {/* <button onClick={() =>this.clickEvent()}>ClickEvent</button> */}
        <button onClick={this.clickEven}>ClickEvent</button>
        
      </div>
    )
  }
}

export default EventBind