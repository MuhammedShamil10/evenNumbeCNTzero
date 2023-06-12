import React, { useState } from 'react'
import { MemoizedChilThree } from './ChildThree';
import { MemoizedChildFour } from '../Incorrect Optimizations/ChildFour';


export const ParentThree = () => {
    const[count, setCount] = useState(0)
    const[name, setName] = useState('luffy')

    console.log('ParentThree Render');
  return (
    <div>
        <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
        <button onClick={() => setName('dragon')}>Change name</button>
        {/* <MemoizedChilThree name={name}>
            <strong>Hello</strong>
        </MemoizedChilThree> */}
        <MemoizedChildFour name={name} />
    </div>
  )
}
