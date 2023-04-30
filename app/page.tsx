import React from 'react'
import { SunIcon, AdjustmentsHorizontalIcon, CubeTransparentIcon, ShareIcon } from '@heroicons/react/24/outline'


function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-white w-screen h-screen  px-2">
      <h1 className="text-5xl font-bold mb-20">OpenAI</h1>

      <div className="flex space-x-2 text-center ">

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ShareIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Info text explained Info text explained Info text explained 1"</p>
            <p className="infoText">"Info text explained 2"</p>
            <p className="infoText">"Info text explained 3"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <AdjustmentsHorizontalIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Info text explained Info text explained Info text explained 1"</p>
            <p className="infoText">"Info text explained 2"</p>
            <p className="infoText">"Info text explained 3"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <CubeTransparentIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Info text explained Info text explained Info text explained 1"</p>
            <p className="infoText">"Info text explained 2"</p>
            <p className="infoText">"Info text explained 3"</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage