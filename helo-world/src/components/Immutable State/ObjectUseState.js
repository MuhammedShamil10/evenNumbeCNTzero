import React, {useState} from 'react'

const initState = {
    fname: 'Bruce',
    Iname: 'Wayne'
}

export const ObjectUseState = () => {

    const[Person, setPerson] = useState(initState)
    console.log(Person);
    // console.log(initState);

    const changeName = () => {
        // Person.fname = 'Clark'
        // Person.Iname = 'kent'
        // setPerson(Person)
        const newPerson = {...Person}
        newPerson.fname = 'Clark'
        newPerson.Iname = 'kent'
        setPerson(newPerson)
    }

    console.log('Render?');

  return (
    <div>
        <button onClick={changeName}>{Person.fname} {Person.Iname}</button>
    </div>
  )
}
