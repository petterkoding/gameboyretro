import React, {useContext, useState, useEffect} from 'react'
import { PlayIcon, ArrowDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { consoleContext } from '../context/Context'

const Console = ({children}) => {

    const consoleCtx = useContext(consoleContext)


  return (
    <div className="scale-90 md:scale-100 bg-[#D0CCBD] w-[450px] h-[700px] rounded-xl rounded-br-[50px] flex flex-col justify-between relative z-[999] shadow-2xl">

        {/* pointing arrow */}
        {!consoleCtx[0] && <div className="absolute top-[-85px] left-5">
            <ArrowDownIcon className="w-20 h-20 text-black animate-bounce"/>
        </div>}
        
        <span className="absolute top-1 left-8 z-10 uppercase font-bold text-gray-400">On Off</span>


        {/* on off button */}
        <button onClick={()=> consoleCtx[1](!consoleCtx[0])} className="absolute top-[-5px] left-10 rounded-t-md bg-zinc-800 w-10 h-4"/>
        {/* shadow */}
        <div className="bg-[#B5B3A6] w-[95%] h-[98%] rounded-xl rounded-br-[50px] absolute left-3 top-1 shadow-inner"/>


        {/* top half */}
        <div className="w-full h-full flex items-center justify-center relative">

            <div className="bg-[#5C5A66] w-[90%] h-[82%] rounded-xl rounded-br-[50px] flex flex-row flex-wrap items-center">

                 {/* top of screen label */}
                <div className="flex justify-between items-center w-full h-4 px-2">
                    <div className="w-full px-2">
                        <div className="h-1 bg-red-900 rounded-full mb-2"/>
                        <div className="h-1 bg-indigo-800 rounded-full"/>
                    </div>

                    <div className="whitespace-nowrap text-gray-300 uppercase text-[9px]">dot matrix with stereo sound</div>
                    <div className="w-1/2 px-2">
                        <div className="h-1 bg-red-900 rounded-full mb-2"/>
                        <div className="h-1 bg-indigo-800 rounded-full"/>
                    </div>
                </div>

                {/* device on light */}
                <div className={`${consoleCtx[0] ? "bg-red-500" : "bg-gray-700"} w-3 h-3 rounded-full mx-5 relative transition duration-200 ease-in-out`} >
                    <span className="absolute bottom-[-20px] left-[-7px] text-gray-300 uppercase text-[8px]">battery</span>
                    <div className={`${consoleCtx[0] ? "animate-ping opacity-100" : "opacity-0"} w-3 h-3 bg-red-400/90 rounded-full`}/>
                </div>
                
                {/* main screen */}
                <div className="w-[300px] h-[200px] bg-emerald-500 rounded-md overflow-hidden">
                    {children}
                </div>

            </div>
            {/* brand logo */}
            <span className="absolute bottom-0 left-6 text-sm text-blue-800 font-bold">
                Nintendo 
                <span className="uppercase text-lg ml-2">game boy</span>
            </span>

        </div>

        {/* bottom half */}
        <div className="w-full h-full relative flex flex-col">

            {/* left control pad */}
            <div className="w-full h-[150px] flex items-start justify-between mt-6">
                <div className="w-[124px] h-[124px] rounded-full ml-6 flex items-center justify-center bg-[#A09A91]">

                    <div className="w-[30px] h-[30px] bg-gray-800 relative">

                        <button className="w-[30px] h-[30px] bg-gray-800 absolute right-[-30px] bottom-0 rounded-r-lg">
                            <PlayIcon className="w-4 h-4 text-[#D0CCBD] absolute right-[-16px] top-0 translate-y-1/2"/>
                        </button>

                        <button className="w-[30px] h-[30px] bg-gray-800 absolute left-[-30px] bottom-0 rounded-l-lg">
                            <PlayIcon className="w-4 h-4 text-[#D0CCBD] rotate-[180deg] absolute left-[-16px] translate-y-1/2 top-0"/>
                        </button>

                        <button className="w-[30px] h-[30px] bg-gray-800 absolute left-0 top-[-30px] rounded-t-lg">
                            <PlayIcon className="w-4 h-4 text-[#D0CCBD] rotate-[-90deg] absolute left-0 top-[-16px] right-0 translate-x-1/2"/>
                        </button>

                        <button className="w-[30px] h-[30px] bg-gray-800 absolute left-0 top-[30px] rounded-b-lg">
                            <PlayIcon className="w-4 h-4 text-[#D0CCBD] rotate-[90deg] absolute left-0 bottom-[-16px] right-0 translate-x-1/2"/>
                        </button>

                    
                    </div>
                

                </div>



                 {/* right control buttons */}
                <div className="p-2 rounded-full rotate-[70deg] mr-12 bg-[#A09A91]">
                    <div onClick={()=>consoleCtx[3]("A")} className="hover:cursor-pointer w-10 h-10 bg-[#963750] rounded-full mb-6">
                    <span className="pr-2 absolute right-[-22px] rotate-[-90deg] text-blue-800 uppercase font-bold">A</span>
                    </div>

                    <div onClick={()=>consoleCtx[3]("B")} className="hover:cursor-pointer w-10 h-10 bg-[#963750] rounded-full relative">
                        <span className="pr-2 absolute right-[-30px] rotate-[-90deg] text-blue-800 uppercase font-bold">B</span>
                    </div>
                </div>


            </div>


            <div className="w-full flex items-center justify-center space-x-8">

                <Link href="/menu">
                    <div className="bg-gray-500 w-12 rounded-full h-4 rotate-[-15deg] relative hover:cursor-pointer hover:bg-gray-600 transition duration-200 ease-in-out">
                         <a className="absolute bottom-[-140%] text-xs text-blue-800 font-bold uppercase">select</a>
                    </div>
                </Link>

                <Link href="/project">
                    <div className="bg-gray-500 w-12 rounded-full h-4 rotate-[-15deg] relative hover:cursor-pointer hover:bg-gray-600 transition duration-200 ease-in-out">
                        <a className="absolute bottom-[-140%] text-xs text-blue-800 font-bold uppercase">start</a>
                    </div>
                </Link>
            </div>

        </div>

        {/* details bottom right */}
        <div className="absolute bottom-10 right-6 rotate-[-20deg]">
            <div className="flex space-x-3">
                <div className="w-3 h-20 bg-[#D0CCBD] shadow-inner rounded-full"/>
                <div className="w-3 h-20 bg-[#D0CCBD] shadow-inner rounded-full"/>
                <div className="w-3 h-20 bg-[#D0CCBD] shadow-inner rounded-full"/>
                <div className="w-3 h-20 bg-[#D0CCBD] shadow-inner rounded-full"/>
                <div className="w-3 h-20 bg-[#D0CCBD] shadow-inner rounded-full"/>
                <div className="w-3 h-20 bg-[#D0CCBD] shadow-inner rounded-full"/>
            </div>
        </div>

    </div>
  )
}

export default Console