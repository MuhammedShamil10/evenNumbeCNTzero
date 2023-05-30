import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true

    }
  }
   
  render() { 

    return this.state.isLoggedIn && <div>Welcome zoro</div>

    // return this.state.isLoggedIn ?(
    //        <div>Welcome Luffy</div>
    //   ):(
    //   <div>Welcome zoro</div>
    // )
    // let message;
    // if(this.state.isLoggedIn) {
    //   message = <div>Welcome Muzan</div>
      
    // }else {
    //   message = <div>Welcome Yorochi</div>
    // }
    // return message
    // return(
    //   <div>
    //     <div>Welcome Muzan</div>
    //     <div>Welcome Yorochi</div>
    //   </div>
    // )
  }
}

export default UserGreeting
 