import Page from "../components/Page"
import { motion } from "framer-motion"
import { useState, useContext, useEffect } from "react"
import { consoleContext } from "../context/Context"
import Link from "next/link"

export default function Home() {

  const [isFinished, setIsFinished] = useState(false)

  const isConsoleOn = useContext(consoleContext)

  useEffect(()=>{
    if(!isConsoleOn[0]){
      setIsFinished(false)
  
    }
  },[isConsoleOn[0]])

  function ShowNextScreen (){
    setIsFinished(true) 
  }

  return (
      <Page pageTitle="Start">
        {
          isFinished
          ?
          <motion.div
            initial={{opacity: 0, x: -10}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 10, delay: 10}}
            
            className="flex flex-col justify-evenly items-center h-full"
          >
            <h1 className="font-Pixel capitalize mb-3 underline">hi</h1>

            <p className="text-xs mb-4">I&apos;m made of css.</p>

            <Link href="/software">
                <a className="border-4 border-green-800 mt-2 hover:bg-green-400 px-2 py-1">um what else?</a>
            </Link>
          </motion.div>
          :
          <motion.div
            onAnimationComplete={ShowNextScreen}
            initial={{ y: -50}}
            animate={{ y: 0}}
            transition={{duration: 4.8}}
            className="flex flex-col justify-center items-center h-full w-full">
        
            <h1 className="text-xl text-gray-800 capitalize">
              nintendo
              <span className="text-xs align-top">&reg;</span>
            </h1>
          </motion.div>
        }
      </Page>
  )
}
