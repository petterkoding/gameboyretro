import React, {useContext} from 'react'
import { consoleContext } from '../context/Context'
import Console from './Console'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Layout = ({children}) => {

  const CTX = useContext(consoleContext)

  const router = useRouter()

  return (
    <div className="bg-yellow-500 w-full h-screen flex flex-col justify-center items-center relative transition-all duration-300 ease-linear pt-20">
      <div className="absolute top-0 left-0 text-[50vw] text-yellow-600 font-Pixel">{CTX[2]}</div>
      <div className="uppercase text-5xl lg:text-8xl font-Pixel text-center mb-[-100px] lg:mb-24">retro</div>
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
        <div className="uppercase text-8xl font-Pixel mt-3 tracking-tighter text-center">game boy</div>

      </div>
          
          
      <footer className="font-Pixel text-[10px] w-full flex items-center justify-center h-10 text-black">
        created by Petter Iversen 2022
      </footer>
    </div>
  )
}

export default Layout