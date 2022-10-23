import Page from "../../components/Page"
import { PlayIcon } from '@heroicons/react/24/solid'



export default function Index() {
  return (
    <Page pageTitle="Software">
        <h1 className="font-Pixel uppercase flex justify-around items-center">
          <PlayIcon className="w-3 h-3 text-black mr-1 animate-pulse"/>
          Project
        </h1>

        <div className="font-Pixel text-xs">
            <h2 className="text-[14px] mb-2">Retrospective</h2>
            <p>
                Created with <span className="uppercase">next.js</span>, framer-motion and tailwind css.
            </p>
        </div>

    </Page>
  )
}
