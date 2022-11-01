import React, {useContext, useState, useEffect} from 'react'
import { PlayIcon, ArrowDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { deviceContext } from '../context/deviceContext'
import { motion } from 'framer-motion'

const Console = ({children}) => {

    const {isOn, setIsOn, nightColor, setNightColor} = useContext(deviceContext)    

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    function moveDevice(dir){
        if(dir === "RIGHT"){
            setX([0,20,0])
        }
        if(dir === "LEFT"){
            setX([0,-20,0])
        }
        if(dir === "UP"){
            setY([0,-20,0])
        }
        if(dir === "DOWN"){
            setY([0,20,0])
        }
    }

    function resetConsolePos(){
        setY(0)
        setX(0)
    }


  return (
         
    <motion.div
        initial={{x:0, y: 0}}
        animate={{x: x, y: y}}
        transition={{duration: 2, type: "tween"}}
        onAnimationComplete={resetConsolePos}
        className={`${isOn ? "bg-[#D0CCBD]" : "bg-[#5e5c58]"} w-[450px] h-[700px] rounded-0 rounded-br-[50px] flex flex-col justify-between relative shadow-2xl ml-[2em]`} >

        {/* box leftside */}
        <div className={`${isOn ? "bg-[#807e77]" : "bg-[#3f3e3c]"}  w-[60px] h-full absolute skew-y-[45deg] left-[-60px] top-[-30px] z-[100]`} />
        {/* box top */}
        <div className={`${isOn ? "bg-[#949289]" : "bg-[#7c7b74]"} w-[450px] h-[60px] absolute top-[-60px] left-[-31px] skew-x-[45deg]`} />
        {/* shadow behind */}
        <div className={`${isOn ? "bg-black/80" : "bg-black"}  w-[400px] h-[400px] absolute bottom-[16px] left-[-215px] skew-x-[45deg] z-[-10]`} />


        {/* pointing arrow */}
        {!isOn &&
        <div className="absolute top-[-95px] left-[-7px] z-[9999]">
            <ArrowDownIcon className="w-20 h-20 text-pink-600 animate-bounce"/>
        </div>
        }
        
        <span className={`${isOn ? "text-gray-400" : "text-gray-700"} absolute top-2 left-8 z-10 uppercase text-sm font-bold `} >off - on</span>


        {/* on off button */}
        <div onClick={()=> setIsOn(!isOn)} className={`${isOn ? 'bg-[#70706d]' : 'bg-[#585857]'} absolute top-[-25px] left-0 skew-x-[45deg]  w-24 h-4 hover:cursor-pointer z-[9999]`}>
            <button className={`absolute top-0 ${isOn ? 'right-[0] ' : 'right-[32px]'} p-2 bg-zinc-900 w-16 h-4 transition duration-300 ease-in-out`}/>
        </div>
        {/* shadow */}
        <div className={`${isOn ? "bg-[#B5B3A6]" : "bg-[#6e6c68]"} w-[95%] h-[98%] rounded-0 rounded-br-[50px] absolute left-3 top-1 shadow-inner`}/>

        {/* alternative colorway for nightmode */}
        {/* {
            !consoleCtx[0] && (
                <div className={`${consoleCtx[0] ? "" : "bg-[#ce9e3e]"} w-[95%] h-[98%] rounded-0 rounded-br-[50px] absolute left-3 top-1 shadow-inner`}/>
            )
        } */}
        {
            !isOn && (
                <div className={`${isOn ? "" : nightColor} w-[95%] h-[98%] rounded-0 rounded-br-[50px] absolute left-3 top-1 shadow-inner`}/>
            )
        }

        {
            !isOn && (
                <div className={`${isOn ? "bg-transparent" : "bg-gradient-to-b from-sky-600 blur-3xl"}  w-[450px] h-[400px] absolute bottom-[-400px] left-[200px] skew-x-[45deg] z-[-10] rounded-0 rounded-tr-[50px]`} />
            )
        }


        {/* top half */}
        <div className="w-full h-full flex items-center justify-center relative">

            <div className={`${isOn ? "bg-[#5C5A66]" : "bg-[#37363b]"}  w-[90%] h-[82%] rounded-xl rounded-br-[50px] flex flex-row flex-wrap items-center`} >

                 {/* top of screen label */}
                <div className="flex justify-between items-center w-full h-4 px-2">
                    <div className="w-full px-2">
                        <div className="h-1 bg-red-900 rounded-full mb-2"/>
                        <div className="h-1 bg-indigo-800 rounded-full"/>
                    </div>

                    <div className={`${isOn ? "text-gray-300" : "text-gray-500"} whitespace-nowrap  uppercase text-[9px]`}>dot matrix with stereo sound</div>
                    <div className="w-1/2 px-2">
                        <div className="h-1 bg-red-900 rounded-full mb-2"/>
                        <div className="h-1 bg-indigo-800 rounded-full"/>
                    </div>
                </div>

                {/* device on light */}
                <div className={`${isOn ? "bg-red-500" : "bg-gray-700"} w-3 h-3 rounded-full mx-5 relative transition duration-200 ease-in-out`} >
                    <span className={`${isOn ? "text-gray-300" : "text-gray-500"} absolute bottom-[-20px] left-[-7px] uppercase text-[8px]`}>battery</span>
                    <div className={`${isOn ? "animate-ping opacity-100" : "opacity-0"} w-3 h-3 bg-red-400/90 rounded-full`}/>
                </div>
                
                {/* main screen */}
                <div className="w-[300px] h-[200px] bg-stone-400 rounded-md relative overflow-hidden">
                    {/* screen glow */}
                    <motion.div
                        initial={{y: "-150px", rotate: -30}}
                        animate={{y: "350px", rotate: -30}}
                        transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop", repeatDelay: 4}}
                        className={`absolute w-[700px] h-10  left-[-50%] top-[-30px] z-[100] blur-md ${isOn ? "bg-green-400/20" : "bg-gray-300/20"}`} />
                    <motion.div
                        initial={{y: "-150px", rotate: -30}}
                        animate={{y: "350px", rotate: -30}}
                        transition={{ duration: 1.15, repeat: Infinity, repeatType: "loop", repeatDelay: 4, delay: 0.2}}
                        className={`absolute w-[700px] h-3  left-[-50%] top-[-30px] z-[100] blur-sm ${isOn ? "bg-green-400/20" : "bg-gray-300/20"}`} />
                    {children}
                </div>

            </div>
            {/* brand logo */}
            <span className="absolute bottom-0 left-6 text-sm text-blue-800 font-bold">
                Nintenduh 
                <span className="uppercase text-lg ml-2">game boy</span>
            </span>

        </div>

        {/* bottom half */}
        <div className="w-full h-full relative flex flex-col">

            {/* left control pad */}
            <div className="w-full h-[150px] flex items-center justify-between my-6">
                <div className={`${isOn ? "bg-[#A09A91]" : "bg-[#5f5e5d]"} w-[124px] h-[124px] rounded-full ml-6 flex items-center justify-center `}>

                    <div className="w-[30px] h-[30px] bg-gray-800 relative">

                        <button onClick={()=>moveDevice("RIGHT")} className="w-[30px] h-[30px] bg-gray-800 absolute right-[-30px] bottom-0 rounded-r-lg after:hidden after:w-4 after:h-4 after:absolute after:top-1/2 after:right-1/2 after:translate-x-[50%] after:translate-y-[-50%] after:rounded-md after:bg-gray-500/40 after:hover:block">
                            <PlayIcon className={`${isOn ? "text-[#D0CCBD]" : "text-[#83827f]"} w-4 h-4  absolute right-[-16px] top-0 translate-y-1/2`}/>
                        </button>

                        <button onClick={()=>moveDevice("LEFT")} className="w-[30px] h-[30px] bg-gray-800 absolute left-[-30px] bottom-0 rounded-l-lg after:hidden after:w-4 after:h-4 after:absolute after:top-1/2 after:right-1/2 after:translate-x-[50%] after:translate-y-[-50%] after:rounded-md after:bg-gray-500/40 after:hover:block">
                            <PlayIcon className={`${isOn ? "text-[#D0CCBD]" : "text-[#83827f]"} w-4 h-4 rotate-[180deg] absolute left-[-16px] translate-y-1/2 top-0`}/>
                        </button>

                        <button onClick={()=>moveDevice("UP")} className="w-[30px] h-[30px] bg-gray-800 absolute left-0 top-[-30px] rounded-t-lg after:hidden after:w-4 after:h-4 after:absolute after:top-172 after:right-1/2 after:translate-x-[50%] after:translate-y-[-50%] after:rounded-md after:bg-gray-500/40 after:hover:block">
                            <PlayIcon className={`${isOn ? "text-[#D0CCBD]" : "text-[#83827f]"} w-4 h-4 rotate-[-90deg] absolute left-0 top-[-16px] right-0 translate-x-1/2`}/>
                        </button>

                        <button onClick={()=>moveDevice("DOWN")} className="w-[30px] h-[30px] bg-gray-800 absolute left-0 top-[30px] rounded-b-lg after:hidden after:w-4 after:h-4 after:absolute after:top-1/2 after:right-1/2 after:translate-x-[50%] after:translate-y-[-50%] after:rounded-md after:bg-gray-500/40 after:hover:block">
                            <PlayIcon className={`${isOn ? "text-[#D0CCBD]" : "text-[#83827f]"} w-4 h-4 rotate-[90deg] absolute left-0 bottom-[-16px] right-0 translate-x-1/2`}/>
                        </button>

                    
                    </div>
                

                </div>



                 {/* right control buttons */}
                <div className={`${isOn ? "bg-[#A09A91]" : "bg-[#5f5e5d]"} p-2 rounded-full rotate-[70deg] translate-x-[-90%]`} >
                    <div className={`${isOn ? "bg-[#963750]" : "bg-[#5e1e2f]"} hover:cursor-pointer w-14 h-14 rounded-full mb-8 relative`}>
                        <span className={`${isOn ? "text-blue-800" : "text-blue-900"} pr-2 absolute right-[-28px] rotate-[-90deg] uppercase font-bold`}>A</span>
                    </div>

                    <div className={`${isOn ? "bg-[#963750]" : "bg-[#5e1e2f]"} hover:cursor-pointer w-14 h-14  rounded-full relative`}>
                        <span className={`${isOn ? "text-blue-800" : "text-blue-900"} pr-2 absolute right-[-30px] rotate-[-90deg] uppercase font-bold`}>B</span>
                    </div>
                </div>


            </div>


            <div className="w-full flex items-center justify-center space-x-8">

                <Link href="/menu">
                    <div className={` ${isOn ? "bg-gray-500" : "bg-gray-700"} w-12 rounded-full h-4 rotate-[-15deg] relative hover:cursor-pointer hover:bg-gray-600 transition duration-200 ease-in-out`} >
                        <a className={`${isOn ? "text-blue-800" : "text-blue-900"} absolute bottom-[-140%] text-xs  font-bold uppercase`} >select</a>
                    </div>
                </Link>

                <Link href="/project">
                    <div className={` ${isOn ? "bg-gray-500" : "bg-gray-700"} w-12 rounded-full h-4 rotate-[-15deg] relative hover:cursor-pointer hover:bg-gray-600 transition duration-200 ease-in-out`} >
                        <a className={`${isOn ? "text-blue-800" : "text-blue-900"} absolute bottom-[-140%] text-xs text-blue-800 font-bold uppercase`}>start</a>
                    </div>
                </Link>
            </div>

        </div>

        {/* details bottom right */}
        <div className="absolute bottom-10 right-6 rotate-[-20deg]">
            <div className="flex space-x-3">
                <div className={`${isOn ? "bg-[#D0CCBD]" : "bg-[#777674]"} w-3 h-20  shadow-inner rounded-full`} />
                <div className={`${isOn ? "bg-[#D0CCBD]" : "bg-[#777674]"} w-3 h-20  shadow-inner rounded-full`}/>
                <div className={`${isOn ? "bg-[#D0CCBD]" : "bg-[#777674]"} w-3 h-20  shadow-inner rounded-full`}/>
                <div className={`${isOn ? "bg-[#D0CCBD]" : "bg-[#777674]"} w-3 h-20  shadow-inner rounded-full`}/>
                <div className={`${isOn ? "bg-[#D0CCBD]" : "bg-[#777674]"} w-3 h-20  shadow-inner rounded-full`}/>
                <div className={`${isOn ? "bg-[#D0CCBD]" : "bg-[#777674]"} w-3 h-20  shadow-inner rounded-full`}/>
            </div>
        </div>

        <div className={`${isOn ? "bg-[#D0CCBD]" : "bg-[#7e7d7a]"} absolute bottom-6 left-[50%] translate-x-[-50%] h-5 w-[60px] rounded-full shadow-lg`} />

    </motion.div>
  )
}

export default Console