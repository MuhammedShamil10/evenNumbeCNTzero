import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 2)
    }
 

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    })
  return (
    <>
    <div>  
        {count}
    </div>
    <div>
<h1>smaple</h1>
    </div>
    </>
  )
}

export default IntervalHookCounter