import React, {useState} from 'react'
import { deviceContext } from './deviceContext'


const Context = ({children}) => {

  const {Provider} = deviceContext

  const [isOn, setIsOn] = useState(false)
  const [nightColor, setNightColor] = useState("#6E6C68")


  
  return (
    <Provider value={{isOn, setIsOn, nightColor, setNightColor}}>
        {children}
    </Provider>
  )
}

export default Context