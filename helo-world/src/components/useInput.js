import {useState} from 'react'

function useInput() {
    const [value, setvalue] = useState(intialValue)
    const reset = () => {
        setvalue(intialValue)
    }
    const bind = {
        value,
        onChange: e => {
            setvalue(e.target.value)
        }
    }
    return [value, bind, reset]
}

export default useInput