import React from 'react'
// import { UserConsumer } from '../App'
import {UserContext, ChannelContext} from '../App'

// class ComponentF extends Component {
  function ComponetF() {

    return (
      <div>
        <UserContext.Consumer>
      {
        user => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return (
                  <div>
                    User context value {user}, channel context value {channel}
                  </div>
                )
              }}
            </ChannelContext.Consumer>
          )
        }
      }
        </UserContext.Consumer>
      </div>
        // <UserConsumer>
        //     {username => {
        //             return <div> hello {username}</div>
        //         }
        //     }
        // </UserConsumer>
    )
  
}

export default ComponetF