import React from 'react'

function Person({person}) {
  return (
    <div>
       <h2>
        Ore va {person.name}. I am {person.age} years old. and i am the {person.skill}... so arigatho
      </h2>
    </div> 
  )
}

export default Person   