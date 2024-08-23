import Image from 'next/image'
import React from 'react'

export default function Page1() {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full gap-32 " style={{ backgroundColor: '#ECF2FA' }} >
      <div className='absolute top-0 left-0     '>
      <Image
          src="/background.svg"
          alt="Forwardin Logo"
          width={1332}
          height={372.15}
          className ="opacity-50"
          
        />
      </div>  
      {/* Content Section */}
      <div className="w-[465px]  z-[10]">
          
          <div className="mt-[45px] text-left">
            <h1 className="text-4xl font-bold text-gray-800">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
            </h1>
            <p className="mt-[30px] text-black">
              Selamat datang di Forwardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronisasi Google Contact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.
            </p>
          </div>
          <div className='btn rounded-l-lg  bg-black text-white mt-4 gap-8'>
            <p className=''>{"Daftar Sekarang   "}</p>
            <p className=''>{"   ->"}</p>
          </div>
        </div>

        {/* Login Form Section */}
        <Image
              src="/gambarlogin.svg"
              alt="Admin Tools Screenshot"
              width={465}
              height={292.36}
              className="rounded-tl-lg z-[10]"
            />
    </div>
  )
}
