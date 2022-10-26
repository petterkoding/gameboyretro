import Page from "../../components/Page"
import { PlayIcon } from '@heroicons/react/24/solid'
import Image from "next/image"



export default function Index() {
  return (
    <Page pageTitle="Project">
        <h1 className="font-Pixel uppercase flex justify-around items-center text-sm">
          <PlayIcon className="w-3 h-3 text-black mr-1 animate-pulse"/>
          Project
        </h1>

        <div className="font-Pixel text-xs grid grid-cols-2 gap-2 gap-y-4">

          <div className="flex flex-col items-center justify-center">
            <Image src={"/nextjs.png"} alt="next.js logo" width={120} height={40} objectFit="contain"/>
          </div>  

          <div className="flex flex-col items-center justify-center">
            <Image src={"/framer.webp"} alt="framer-motion logo" width={120} height={40} objectFit="contain"/>
          </div> 

          <div className="flex flex-col items-center justify-center">
            <Image src={"/tailwind.png"} alt="tailwind css logo" width={120} height={40} objectFit="contain"/>
          </div> 

          <div className="flex flex-col items-center justify-center">
            <Image src={"/favicon.ico"} alt="vercel logo" width={120} height={40} objectFit="contain"/>
          </div>  
  
        </div>

    </Page>
  )
}
