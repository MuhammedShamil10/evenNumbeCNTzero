import {useEffect} from 'react'

function useDocumentTile(count) {
    const [count, setcount] = useState(0)
    const increment = () => {
        setcount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setcount(prevCount => prevCount - 1)
    }

    // 

    const reset = () => {
        setcount(0)
    }
useEffect(() => {
    document.title = `count ${count}`
},[count])
}

export default useDocumentTile 