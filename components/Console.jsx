import React from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'

const Console = ({children}) => {
  return (
    <div className="bg-[#D0CCBD] w-[450px] h-[700px] rounded-xl rounded-br-[50px] flex flex-col justify-between relative">

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
                <div className=" bg-lime-400 w-3 h-3 rounded-full mx-5 relative">
                    <span className="absolute bottom-[-20px] left-[-7px] text-gray-300 uppercase text-[8px]">battery</span>
                </div>
                
                {/* main screen */}
                <div className="w-[75%] h-[70%] bg-white rounded-md">
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
                            <PlayIcon className="w-4 h-4 text-gray-300 absolute right-[-16px] top-0 translate-y-1/2"/>
                        </button>

                        <button className="w-[30px] h-[30px] bg-gray-800 absolute left-[-30px] bottom-0 rounded-l-lg">
                            <PlayIcon className="w-4 h-4 text-gray-300 rotate-[180deg] absolute left-[-16px] translate-y-1/2 top-0"/>
                        </button>

                        <button className="w-[30px] h-[30px] bg-gray-800 absolute left-0 top-[-30px] rounded-t-lg">
                            <PlayIcon className="w-4 h-4 text-gray-300 rotate-[-90deg] absolute left-0 top-[-16px] right-0 translate-x-1/2"/>
                        </button>

                        <button className="w-[30px] h-[30px] bg-gray-800 absolute left-0 top-[30px] rounded-b-lg">
                            <PlayIcon className="w-4 h-4 text-gray-300 rotate-[90deg] absolute left-0 bottom-[-16px] right-0 translate-x-1/2"/>
                        </button>
                    
                    </div>
                

                </div>



                 {/* right control buttons */}
                <div className="p-2 rounded-full rotate-[70deg] mr-12 bg-[#A09A91]">
                    <div className="w-10 h-10 bg-[#963750] rounded-full mb-6">
                    <span className="pr-2 absolute right-[-22px] rotate-[-90deg] text-blue-800 uppercase font-bold">A</span>
                    </div>

                    <div className="w-10 h-10 bg-[#963750]  rounded-full relative">
                        <span className="pr-2 absolute right-[-30px] rotate-[-90deg] text-blue-800 uppercase font-bold">B</span>
                    </div>
                </div>


            </div>


            <div className="w-full flex items-center justify-center space-x-8">

                <div className="bg-gray-500 w-12 rounded-full h-4 rotate-[-15deg] relative">
                    <span className="absolute bottom-[-140%] text-xs text-blue-800 font-bold uppercase">select</span>
                </div>

                <div className="bg-gray-500 w-12 rounded-full h-4 rotate-[-15deg] relative">
                    <span className="absolute bottom-[-140%] text-xs text-blue-800 font-bold uppercase">start</span>
                </div>
               


            </div>

        </div>

        {/* details bottom right */}
        <div className="absolute bottom-10 right-6 rotate-[-20deg]">
            <div className="flex space-x-3">
                <div className="w-3 h-20 bg-gradient-to-t from-gray-400 to-gray-500 rounded-full"/>
                <div className="w-3 h-20 bg-gradient-to-t from-gray-400 to-gray-500 rounded-full"/>
                <div className="w-3 h-20 bg-gradient-to-t from-gray-400 to-gray-500 rounded-full"/>
                <div className="w-3 h-20 bg-gradient-to-t from-gray-400 to-gray-500 rounded-full"/>
                <div className="w-3 h-20 bg-gradient-to-t from-gray-400 to-gray-500 rounded-full"/>
                <div className="w-3 h-20 bg-gradient-to-t from-gray-400 to-gray-500 rounded-full"/>
            </div>
        </div>

    </div>
  )
}

export default Console