import React,{useState} from 'react'

const initState = ['Bruce', 'Wayne']

const ArrayUseState = () => {

    const[persons, setPerson] = useState(initState)

    const handleClick = () => {
        // persons.push('clark')
        // persons.push('kent')
        // setPerson(persons)

        const newPerson = [...persons]
        newPerson.push('clark')
        newPerson.push('kent')
        setPerson(newPerson)
    }

    console.log('Render ?');

  return (
    <div>
        <button onClick={handleClick}>Click</button>   
        {
            persons.map(person => (
                <div key={person}>{person}</div>
            ))
        }
    </div>
  )
}         

export default ArrayUseState      