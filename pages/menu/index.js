import React from 'react'
import Link from 'next/link'
import Page from '../../components/Page'


const Menu = () => {

  return (
    <Page pageTitle="Menu">
      <nav className="font-Pixel text-lg h-[200px] w-[300px] p-1">
        <h3 className="text-xs underline text-center pt-1">Menu options</h3>
        <div className="flex flex-col justify-evenly items-center h-full">
            <Link href="/">
                <a className="hover:bg-green-400 px-2 py-1">Start</a>
            </Link>
            <Link href="/beginning">
                <a className="hover:bg-green-400 px-2 py-1">Beginning</a>
            </Link>
        </div>
      </nav>
    </Page>
  )
}

export default Menu