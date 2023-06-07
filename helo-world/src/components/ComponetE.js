import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'


function ComponetE() {
 const user = useContext(UserContext);
 const channel = useContext(ChannelContext);

 const array1 = [1,2,3,4];
 const reducer = (accumlator, currentValue) => accumlator + currentValue;

 console.log(array1.reduce(reducer, 100 + 100));


  return (
    <div>
      {user}-{channel}
    </div>
  )
}


export default ComponetE