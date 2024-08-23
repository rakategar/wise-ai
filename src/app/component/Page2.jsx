import Image from 'next/image'
import React from 'react'

export default function Page2() {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full gap-32 "style={{ backgroundColor: '#ECF2FA' }} >

      {/* Login Form Section */}
      <Image
              src="/gambarpage2.svg"
              alt="Admin Tools Screenshot"
              width={465}
              height={292.36}
              className="rounded-tl-lg z-[10]"
            />

      {/* Content Section */}
      <div className="w-[465px] mr-28 z-[10]">
          
          <div className="mt-[45px] text-left">
            <h1 className="text-5xl font-bold text-black">
            Reach Further with Ease
            </h1>
            <p className="mt-[30px] text-black">
            Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.            </p>
          </div>
          
        </div>

        
    </div>
  )
}
