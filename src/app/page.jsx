import React from 'react'
import Navbar from './component/Navbar'
import Image from 'next/image'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
import Page3 from './component/Page3'
import Page4 from './component/Page4'
import Page5 from './component/Page5'
import Page6 from './component/Page6'
import Page7 from './component/Page7'
import Page8 from './component/Page8'

export default function () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen " >
      
      <div className="fixed top-0 p-4 z-50 ">
        <Navbar/>
      </div>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      <Page8/>
      <div className='flex flex-row items-center bottom-0 gap-4 z-10'>
            <h1>Powered By</h1>
            <Image
              src="/logofooter.svg"
              alt="Admin Tools Screenshot"
              width={265}
              height={92.36}
              className="rounded-tl-lg"
            />
        </div>
    </div>
  )
}
