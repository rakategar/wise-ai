import Image from 'next/image'
import React from 'react'

export default function Page1() {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full gap-10 " style={{ backgroundColor: '#3366FF' }} >
        
       <div className='absolute  '>
      <Image
          src="/backgroundbawah.svg"
          alt="Forwardin Logo"
          width={2032}
          height={1572.15}
          className ="   bg-[#3366ff]"
        />
      </div>  
        <div className='flex flex-row gap-8 z-10  '>
            <div className='flex flex-col gap-4'>
            <Image
              src="/Logowhite.svg"
              alt="Admin Tools Screenshot"
              width={265}
              height={92.36}
              className="rounded-tl-lg"
            />
            <p className='text-white text-sm w-96'>Fowardin is your ultimate communication management solution. We empower businesses of all sizes with efficient message forwarding, streamlined contact management, and powerful campaign scheduling. Our mission is to simplify your communication processes, helping you engage with your audience effectively and effortlessly. Join us in transforming your communication game today!
            </p>
            </div>
        </div>
        <div className='flex flex-row gap-8 z-10  '>
            <div className='flex flex-col gap-4'>
            <h1 className='text-white text-2xl font-bold'>Contact Us</h1>
            <p className='text-white text-sm w-96'>Join our mailing list to receive updates, exclusive content, and early access to upcoming events. By signing up, you become an integral part of our community, spreading the message of compassion and making a difference. </p>
            <p className='text-white text-sm w-96'>Email: info@fowarin <br />Phone: +1 (123) 456-7890</p>
            <p></p>
            </div>
        </div>
        <div className='flex flex-row gap-8 z-10 pb-20  '>
            <div className='flex flex-col gap-4'>
            <h1 className='text-white text-2xl font-bold'>Lets Talk</h1>
            <p className='text-white text-sm '>Facebook <br /> Instagram <br /> Twitter </p>
            <p></p>
            </div>
        </div>
        
    </div>
  )
}
