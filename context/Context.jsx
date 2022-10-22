import React, {useState, createContext} from 'react'

export const consoleContext = createContext(null)

const Context = ({children}) => {

  const [isOn, setIsOn] = useState(false)
  const [btnClick, setBtnClick] = useState("")
  
  return (
    <consoleContext.Provider value={[isOn, setIsOn, btnClick, setBtnClick]}>
        {children}
    </consoleContext.Provider>
  )
}

export default Context