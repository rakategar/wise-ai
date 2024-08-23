import Image from 'next/image'
import React from 'react'

export default function Page1() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-full gap-8 " style={{ backgroundColor: '#3366FF' }} >
      
            <h1 className="text-4xl font-bold text-white mt-40 mb-8" >
            Frequently Asked Questions            
            </h1>

      <div className='flex flex-row gap-4 items-center mb-8'>
        <div className='bg-white rounded-lg w-96 h-8 '/>
        <Image
              src="/iconsearch.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
      </div>
        <div className='flex flex-col gap-4 items-center '>
            <div className='bg-white rounded-lg flex flex-col w-[620px] z-30 p-4 '>
                <div className='flex flex-row  items-center justify-between'>
                <h1 className=' text-black text-xl font-bold'>Apa itu Forwardin?</h1>
                <p className='flex justify-center items-center bg-secondary w-5 h-5 font-bold '>-</p>
                </div>
                <p className='text-black text-sm'>Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.</p>
            </div>
            <div className='bg-white rounded-lg flex flex-col w-[620px] z-30 p-4 '>
                <div className='flex flex-row  items-center justify-between'>
                <h1 className=' text-black text-xl font-bold'>Apakah forwardin cocok untuk saya?</h1>
                <p className='flex justify-center items-center bg-secondary w-5 h-5 font-bold '>-</p>
                </div>
            </div>
            <div className='bg-white rounded-lg flex flex-col w-[620px] z-30 p-4 '>
            <div className='flex flex-row  items-center justify-between'>
                <h1 className=' text-black text-xl font-bold'>Apakah Forwardin perlu di-install ke komputer?</h1>
                <p className='flex justify-center items-center bg-secondary w-5 h-5 font-bold '>-</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
