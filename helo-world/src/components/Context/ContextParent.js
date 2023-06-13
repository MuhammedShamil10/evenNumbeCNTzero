import React, { useState } from "react";
import { MemoizedChildA } from "./ContextChild";

export const CountContext = React.createContext()
const CounterProvider = CountContext.Provider

export const ContextParent = ({children}) => {
    const [count, setCount] = useState(0)

    console.log('ContextParent Render');                                                                                                                                                                          
  return (
    <>
    <button onClick={() => setCount(c => c + 1)}>Count {count}</button>
    <CounterProvider value={count}>
        {children}
    </CounterProvider>
    </>
  );
};
