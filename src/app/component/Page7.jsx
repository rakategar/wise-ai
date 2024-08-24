import Image from 'next/image'
import React from 'react'

export default function Page1() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-full gap-8 " style={{ backgroundColor: '#3366FF' }} >
      
            <h1 className="text-4xl font-bold text-white mt-40 mb-8" >
            Frequently Asked Questions            
            </h1>

      <div className='flex flex-row gap-4 items-center mb-8'>
        <input className='bg-white rounded-lg w-96 h-8 px-2 text-black'/>
        <Image
              src="/iconsearch.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
      </div>
        <div className='flex flex-col gap-4 items-center z-30 w-[620px]'>
            
            <div className="collapse collapse-arrow  text-black bg-white">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-bold ">Apa itu Forwardin ?</div>
            <div className="collapse-content">
                <p>Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.</p>
            </div>
            </div>
            <div className="collapse collapse-arrow  text-black bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-bold ">Apakah forwardin cocok untuk saya?</div>
            <div className="collapse-content">
                <p>Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.</p>
            </div>
            </div>
            <div className="collapse collapse-arrow  text-black bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-bold ">Apakah Forwardin perlu di-install ke komputer?</div>
            <div className="collapse-content">
                <p>Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.</p>
            </div>
</div>
        </div>
        
    </div>
  )
}
