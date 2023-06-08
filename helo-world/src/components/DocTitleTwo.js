import React, {useState, useEffect} from 'react'

function DocTitleTwo() {
    const [count, setcount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
  return (
    <div>
        <button onClick={() => setcount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTwo