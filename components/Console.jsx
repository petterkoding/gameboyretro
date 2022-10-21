import React from 'react'

const Console = () => {
  return (
    <div className="bg-gray-300 w-[450px] h-[700px] rounded-xl rounded-br-[50px] flex flex-col justify-between relative">

        {/* top half */}
        <div className="w-full h-full flex items-center justify-center relative">
            <div className="bg-zinc-600 w-[90%] h-[80%] rounded-xl rounded-br-[50px] flex flex-row items-center">
                {/* device on light */}
                <div className=" bg-green-400 w-3 h-3 rounded-full mx-4"/>
                
                {/* main screen */}
                <div className="w-[75%] h-[70%] bg-white rounded-md">
                    screen
                </div>

            </div>
            {/* brand logo */}
            <span className="absolute bottom-0 left-6 text-sm text-gray-800 font-bold">
                Nintendo 
                <span className="uppercase text-lg ml-2">game boy</span>
            </span>
        </div>

        {/* bottom half */}
        <div className="w-full h-full relative flex flex-col">

            {/* left control pad */}
            <div className="w-full h-[150px] flex items-start justify-between mt-6">
                <div className="w-[120px] h-[120px] rounded-full ml-6 flex items-center justify-center bg-gray-400">

                    <div className="w-[30px] h-[30px] bg-gray-800 relative">

                    <button className="w-[30px] h-[30px] bg-gray-800 absolute right-[-30px] bottom-0 rounded-r-lg"></button>
                    <button className="w-[30px] h-[30px] bg-gray-800 absolute left-[-30px] bottom-0 rounded-l-lg"></button>
                    <button className="w-[30px] h-[30px] bg-gray-800 absolute left-0 top-[-30px] rounded-t-lg"></button>
                    <button className="w-[30px] h-[30px] bg-gray-800 absolute left-0 top-[30px] rounded-b-lg"></button>
                    </div>
                

                </div>



                 {/* right control buttons */}
                <div className="p-2 rounded-full rotate-[70deg] mr-12 bg-gray-400">
                    <div className="w-10 h-10 bg-red-900 rounded-full mb-6">
                    <span className="pr-2 absolute right-[-22px] rotate-[-90deg] text-gray-800 uppercase font-bold">A</span>
                    </div>

                    <div className="w-10 h-10 bg-red-900 rounded-full relative">
                        <span className="pr-2 absolute right-[-30px] rotate-[-90deg] text-gray-800 uppercase font-bold">B</span>
                    </div>
                </div>


            </div>


            <div className="w-full flex items-center justify-center space-x-6">

                <div className="bg-gray-500 w-12 rounded-full h-4 rotate-[-15deg] relative">
                    <span className="absolute bottom-[-140%] text-xs text-gray-800 font-bold uppercase">select</span>
                </div>

                <div className="bg-gray-500 w-12 rounded-full h-4 rotate-[-15deg] relative">
                    <span className="absolute bottom-[-140%] text-xs text-gray-800 font-bold uppercase">start</span>
                </div>
               


            </div>

        </div>

        <div className="absolute bottom-10 right-4 rotate-[-15deg]">
            <div className="flex space-x-3">
                <div className="w-3 h-20 bg-gradient-to-t from-gray-300 to-gray-400 rounded-full"/>
                <div className="w-3 h-20 bg-gradient-to-t from-gray-300 to-gray-400 rounded-full"/>
                <div className="w-3 h-20 bg-gradient-to-t from-gray-300 to-gray-400 rounded-full"/>
                <div className="w-3 h-20 bg-gradient-to-t from-gray-300 to-gray-400 rounded-full"/>
                <div className="w-3 h-20 bg-gradient-to-t from-gray-300 to-gray-400 rounded-full"/>
                <div className="w-3 h-20 bg-gradient-to-t from-gray-300 to-gray-400 rounded-full"/>
            </div>
        </div>

    </div>
  )
}

export default Console