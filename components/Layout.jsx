import React from 'react'
import Console from './Console'
import Nav from './Nav'

const Layout = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <Nav/>
      <div className="flex flex-col items-center justify-center">
        <Console>
          <div className="bg-green-400 w-full h-full"></div>
        </Console>

      </div>
          
          
      <footer className="text-xs font-bold w-full flex items-center justify-center h-10">
        created by Petter Iversen 2022
      </footer>
    </div>
  )
}

export default Layout