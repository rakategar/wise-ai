import Image from 'next/image'
import React from 'react'

export default function Page4() {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full gap-32 "style={{ backgroundColor: '#ECF2FA' }} >

      {/* Login Form Section */}
      <Image
              src="/gambarpage4.png"
              alt="Admin Tools Screenshot"
              width={465}
              height={292.36}
              className="rounded-tl-lg z-[10]"
            />

      {/* Content Section */}
      <div className="w-[465px] mr-28 z-[10]">
          
          <div className="mt-[45px] text-left">
            <h1 className="text-4xl font-bold text-black">
            Respond Faster with the Convenience of Auto Reply 
            </h1>
            <p className="mt-[30px] text-black">
            Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.
            </p>
        </div>
          
        </div>

        
    </div>
  )
}
