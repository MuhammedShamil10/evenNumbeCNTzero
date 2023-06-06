import React from 'react'
import ComponetC from './components/ComponetC'
import App from './App'

export const UserContext = React.createContext()
function anotherApp() {
  return (
    <div className='App'>
        <UserContext.Provider value={'luffy'}>
        <ComponetC />
        </UserContext.Provider>
    </div>
  )
}

export default App