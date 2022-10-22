import Page from "../components/Page"
import { useState } from "react"

export default function Home() {

  const [show, setShow] = useState(false)

  return (
      <Page pageTitle="Start">
    
        {show
          ?
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-xs underline">Released <time dateTime="1989-04-21">April 21. 1989</time></h2>
            <p className="text-xs">118.69m units sold</p>
            <p className="text-xs">CPU: Sharp LR35902 core @ 4.19 MHz</p>
            <p className="text-xs">Display: STN LCD 160x144 pixels</p>
            <p className="text-xs">Power: 4x AA batteries</p>
          </div>
          :
          <>
            <h1 className="font-Pixel uppercase mb-3 underline">hello</h1>

            <p className="text-xs">I&apos;m made of css.</p>

            <button
              onClick={()=>setShow(true)}
              className="border-4 border-green-800 mt-2 hover:bg-green-400 px-2 py-1">
                um what else?
            </button>
          </>
        }
      </Page>
  )
}
