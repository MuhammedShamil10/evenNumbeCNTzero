import React from 'react'

function Hero({herosName}) {
  if(herosName === 'Joker') {
    throw new Error('Not a hero')
  } 
  return (
    <div>
        {herosName}
    </div>
  )
}

export default Hero