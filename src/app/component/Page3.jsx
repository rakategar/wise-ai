import Image from 'next/image'
import React from 'react'

export default function Page3() {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full gap-32 " style={{ backgroundColor: '#f7f7f7' }}>
      
      {/* Content Section */}
      <div className="w-[465px]  z-[10]">
          
          <div className="mt-[45px] text-left">
            <h1 className="text-4xl font-bold text-gray-800">
            Right Time, Effective Messages            </h1>
            <p className="mt-[30px] text-black">
            Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.            </p>
          </div>
          
        </div>

        {/* Login Form Section */}
        <Image
              src="/gambarpage3.svg"
              alt="Admin Tools Screenshot"
              width={465}
              height={292.36}
              className="rounded-tl-lg z-[10]"
            />
    </div>
  )
}
