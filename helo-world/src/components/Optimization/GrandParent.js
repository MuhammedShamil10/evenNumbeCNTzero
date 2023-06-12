import React from 'react'
import { ParentOne } from './ParentOne'
import { Child } from './ChildOne'

export const GrandParent = () => {
    const [newCount, setNewCount] = useState(0)
  return (
    <div>
        <button onClick={() => setNewCount((nc) => nc + 1)}>
            GrandParent Count - {newCount }
        </button>
        <ParentOne>
            <Child />
        </ParentOne>

    </div>
  )
}
                                