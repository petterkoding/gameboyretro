import Page from "../../components/Page"
import { PlayIcon } from "@heroicons/react/24/solid"




export default function Index() {
  return (
    <Page pageTitle="Info">
        <h1 className="font-Pixel uppercase flex justify-around items-center text-sm underline">
          <PlayIcon className="w-3 h-3 text-black mr-1 animate-pulse"/>
          Software
        </h1>

        <div className="flex flex-col justify-between h-full">
            <h2 className="text-xs">Released <time dateTime="1989-04-21">April 21. 1989</time></h2>
            <p className="text-xs">118.69m units sold</p>
            <p className="text-xs">CPU: Sharp LR35902 core @ 4.19 MHz</p>
            <p className="text-xs">Display: STN LCD 160x144 pixels</p>
            <p className="text-xs">Power: 4x AA batteries</p>
          </div>

    </Page>
  )
}
