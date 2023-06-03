import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '',lastName: ''})
  return (
    <form>
        <input type='text' 
        value={name.firstName} 
        onChange={e => setName({firstName:e.target.value})}
        />
        <input type='text' 
        value={name.lastName} 
        onChange={e => setName({lastName:e.target.value})}
        />
        <h2>Your first name is -{name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
    </form>
  )
}

export default HookCounterThree