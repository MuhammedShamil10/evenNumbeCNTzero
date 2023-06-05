import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: '', finalName: ''})
    // const [name,setName] = useStatr({firstName:'', lastName: ''})
  return (
    <form>
        <input type='text' 
        value={name.firstName} 
        onChange={e => setName({...name, firstName:e.target.value})}
        />
        <input type='text' 
        value={name.lastName} 
        onChange={e => setName({...name, lastName:e.target.value})}
        />
        <h2>Your first name is -{name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
        
        {/* <input type='text' 
        value={name.finalName} 
        onChange={e => setName({finalName:e.target.value})}
        /> */}
        {/* <h2>final name is {name.finalName}</h2> */}
    </form>
  )
}
// 

export default HookCounterThree