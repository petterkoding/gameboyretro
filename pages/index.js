import Page from "../components/Page"
import { useState } from "react"

export default function Home() {

  const [show, setShow] = useState(false)
  const [input, setInput] = useState("")

  return (
      <Page pageTitle="Start">
    
        {show
          ?
          <div>
            {input}
          </div>
          :
          <>
            <h1 className="font-Pixel uppercase mb-3">hello player 1</h1>

            <p className="text-xs">Click button to start</p>

            <button
              onClick={()=>setShow(true)}
              className="border-4 border-green-800 mt-2 hover:bg-green-400 px-2 py-1">
                start
            </button>
          </>
        }
      </Page>
  )
}
