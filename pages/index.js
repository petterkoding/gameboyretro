import Page from "../components/Page"
import { motion } from "framer-motion"
import { useEffect } from "react"
import Link from "next/link"


export default function Home() {


  return (
      <Page pageTitle="Start">
     
        <motion.div
          initial={{y: -100}}
          animate={{y: 0}}
          transition={{duration: 4.8, ease: "easeInOut"}}
          className="flex flex-col justify-center items-center h-full w-full">
      
          <h1 className="text-xl text-gray-800 capitalize">
            nintenduh
            <span className="text-xs align-top">&reg;</span>
          </h1>
        </motion.div>

      </Page>
  )
}
