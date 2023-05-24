import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggIn: true
      }
    }
  render() {
    // let message;
        return (
            this.state.isLoggIn ?(
                <div>Welcome Luffy</div>
            ):(
                <div>Welcome Naruto</div>
            )
        )
    }

    // return (
    //   <div>
    //     <div>Welcome Luffy</div>
    //     <div>Welcome Naruto</div>
    //   </div>
    // )
  } 

export default UserGreeting