import React from 'react'
import Console from './Console'

const Layout = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold uppercase mb-10">Gameboy</h1>
        <Console/>
    </div>
  )
}

export default Layout