import React,{useState} from 'react'
import useInput from './useInput'

function UserForm() {
    let[firstName, setFirstName] = useState(' ')
    let[lastName, setLastName] = useState(' ')


    let submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First name</label>
                <input 
                type='text' 
                value={firstName} 
                onChange={e => setFirstName(e.target.value)} 
                />
            </div>
            <div>
                <label>Last name</label>
                <input
                type='text'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm
