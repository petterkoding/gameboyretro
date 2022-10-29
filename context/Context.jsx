import React, {useState, createContext} from 'react'

export const consoleContext = createContext()


const Context = ({children}) => {

  const [isOn, setIsOn] = useState(false)
  const [nightColor, setNightColor] = useState("bg-[#6e6c68]")

  
  return (
    <consoleContext.Provider value={[isOn, setIsOn, nightColor, setNightColor]}>
        {children}
    </consoleContext.Provider>
  )
}

export default Context