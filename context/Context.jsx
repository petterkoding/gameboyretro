import React, {useState, createContext} from 'react'
import { deviceContext } from './deviceContext'


const Context = ({children}) => {

  const {Provider} = deviceContext

  const [isOn, setIsOn] = useState(false)
  const [nightColor, setNightColor] = useState("bg-[#6e6c68]")

  
  return (
    <Provider value={{isOn, setIsOn, nightColor, setNightColor}}>
        {children}
    </Provider>
  )
}

export default Context