import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'


function ComponetE() {
 const user = useContext(UserContext);
 const channel = useContext(ChannelContext);

  return (
    <div>
      {user}-{channel}
    </div>
  )
}


export default ComponetE