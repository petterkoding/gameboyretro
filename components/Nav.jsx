import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="flex justify-center items-center h-20 bg-yellow-400 space-x-10">
        <Link href="/">
            <a className="text-md font-bold uppercase text-zinc-800 bg-yellow-500 px-4 py-2 hover:bg-yellow-300 transition duration-200 ease-out">Home</a>
        </Link>
        <Link href="/games">
            <a className="text-md font-bold uppercase text-zinc-800 bg-yellow-500 px-4 py-2 hover:bg-yellow-300 transition duration-200 ease-out">About</a>
        </Link>
    </nav>
  )
}

export default Nav