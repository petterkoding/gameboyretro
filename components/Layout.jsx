import React, {useContext, useEffect, useState} from 'react'
import { deviceContext } from '../context/deviceContext'
import Console from './Console'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Layout = ({children}) => {

  const [selectedColor, setSelectedColor] = useState("")

  const {isOn} = useContext(deviceContext)


  const router = useRouter()
  
 
  function changeNightColor(event){
    let wantedColor = event.target.dataset.color
    CTX[3](wantedColor)
    setSelectedColor(wantedColor)
  
  }

  return (
    <div className={` ${isOn ? "bg-yellow-500" : "bg-[#090a2c]"} w-full h-screen flex flex-col justify-center items-center relative transition-all duration-300 ease-linear pt-20`}>
      <div className={`${isOn ? "text-black" : "text-indigo-400"} uppercase text-5xl lg:text-8xl font-Pixel text-center mb-[-100px] lg:mb-24 skew-x-[30deg]`}>retro</div>
      <div className="h-auto flex flex-col items-center justify-center scale-[.6] lg:scale-100">
        <Console>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.pathname}
              initial={{opacity: 0, y: 4}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -4, transition:{duration: 0.4}}}
              className="w-full h-full bg-stone-400">
              {children}
            </motion.div>
          </AnimatePresence>
        </Console>
        <div className={`${isOn ? "text-black" : "text-indigo-300"} uppercase text-8xl font-Pixel mt-3 tracking-tighter text-center skew-x-[30deg]`} >game boy</div>
        

        { !isOn &&
        <motion.div
          initial={{opacity: 0, y: -15}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 0.2}}
          className="absolute top-10 right-[-13%] bg-white/10 w-1 rounded-full h-[50%] translate-y-[-50%]">
          <span className="text-gray-200 font-Pixel text-xs skew-x-[15deg] absolute top-[-60px] left-[-50px] lg:left-[-70px]">change color</span>
          <div className="flex items-center justify-between flex-col h-full">
            <div data-color='bg-[#6e6c68]' onClick={changeNightColor} className={` w-10 h-10 rounded-full bg-[#6e6c68] hover:scale-[1.1] transition duration-200 ease-in-out cursor-pointer`}/>
            <div data-color='bg-indigo-300' onClick={changeNightColor} className={` w-10 h-10 rounded-full bg-indigo-300 hover:scale-[1.1] transition duration-200 ease-in-out cursor-pointer`} />
            <div data-color='bg-yellow-600' onClick={changeNightColor} className={` w-10 h-10 rounded-full bg-yellow-600 hover:scale-[1.1] transition duration-200 ease-in-out cursor-pointer`}/>
            <div data-color='bg-sky-600' onClick={changeNightColor} className={` w-10 h-10 rounded-full bg-sky-600 hover:scale-[1.1] transition duration-200 ease-in-out cursor-pointer`}/>
            <div data-color='bg-pink-500' onClick={changeNightColor} className={` w-10 h-10 rounded-full bg-pink-500 hover:scale-[1.1] transition duration-200 ease-in-out cursor-pointer`}/>
          </div>
        </motion.div>}

      </div>
          
          
      <footer className={`${isOn ? "text-black" : "text-indigo-300"} font-Pixel text-[10px] w-full flex items-center justify-center h-10 text-black z-[99999]`}>
        created by Petter Iversen 2022
      </footer>
    </div>
  )
}

export default Layout