import Page from '../../components/Page'
import { PlayIcon } from '@heroicons/react/24/solid'

export default function Index() {

  return (
    <Page pageTitle="About">
      <h1 className="font-Pixel uppercase flex items-center">
      <PlayIcon className="w-3 h-3 text-black mr-1 animate-pulse"/>
        About
      </h1>

      <div className="font-Pixel text-xs">
        <h2 className="text-[14px] mb-2">How it all began</h2>
        <p>
          I remember getting my first gameboy in the late 90&apos;s.
          Gifted to me from my grandmother. The sheer joy of playing Super Mario.
        </p>
      </div> 
    </Page>
  )
}
