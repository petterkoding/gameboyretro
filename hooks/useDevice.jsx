import React, {useContext} from 'react'
import { consoleContext } from '../context/Context'

const useDevice = ({...css}) => {
    

    const CTX = useContext(consoleContext)

  return (
    <button
      onClick={()=> CTX[1](!CTX[0])}
      aria-label="turn on and off device"
      className={...css}>
      
    </button>
  )
}

export default useDevice