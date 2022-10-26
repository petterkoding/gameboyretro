import React, {useState, createContext} from 'react'

export const consoleContext = createContext()


const Context = ({children}) => {

  const [isOn, setIsOn] = useState(false)

  
  return (
    <consoleContext.Provider value={[isOn, setIsOn]}>
        {children}
    </consoleContext.Provider>
  )
}

export default Context