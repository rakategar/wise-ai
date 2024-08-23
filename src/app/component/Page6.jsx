import Image from 'next/image'
import React from 'react'
import ToggleSwitch from './ToggleSwitch'

export default function Page6() {
  return (
    <div id='Page6' className="flex flex-col items-center justify-center min-h-screen min-w-full  "style={{ backgroundColor: '#f7f7f7' }} >
        <div className='w-[765px] mb-8'>
            <h1 className='text-4xl font-bold text-black text-center'>Our Pricing</h1>
        </div>
        <ToggleSwitch/>
        <div className='bg-sky-100  rounded-lg my-8 p-2'>
            <h1 className='text-sm  font-bold text-secondary text-center'>Hemat hingga 25% dengan paket tahunan</h1>
        </div>

        <div className='flex flex-row items-center justify-center gap-8 mb-12'>
          
        {/* Card Component 1 */}
        <div className='w-[300px] p-2  flex flex-col text-left'>
          <h1 className='text-2xl font-bold text-black'>Starter</h1>
          <p className='text-black text-sm mb-2'>Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.<br /></p>
          <h1 className='text-2xl font-bold text-black py-4'>Gratis</h1>
          <p className='text-black text-sm opacity-50 mb-4'>-</p>
          <button className='btn text-white bg-secondary mb-4'>Start Now</button>
          <div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon1.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>100 Auto reply</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon2.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>500 Broadcast</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon3.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>50 Campaign</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon4.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>500 Contact</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon5.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>50 Device</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon6.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>Excel / CSV Contact Import</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon7.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>Google Contact Sync</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          </div>
        </div>

          
        {/* Card Component 2 */}
        <div className='w-[300px] p-2  flex flex-col text-left rounded-lg shadow-2xl shadow-secondary  '>
          <h1 className='text-2xl font-bold text-black'>Basic</h1>
          <p className='text-black text-sm mb-2'>Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</p>
          <div className='flex flex-row items-center gap-4 '>
            <h1 className='text-2xl font-bold text-black py-4'>Rp 65.000</h1>
            <p className='text-black text-sm '>/ bulan</p>
          </div>
          <p className='text-black text-sm opacity-50 mb-4'>Rp. 650.000 /tahun</p>
          <button className='btn text-white bg-[#FFB020] mb-4'>Start Now</button>
          <div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon1.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>100 Auto reply</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon2.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>500 Broadcast</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon3.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>50 Campaign</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon4.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>500 Contact</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon5.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>50 Device</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon6.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>Excel / CSV Contact Import</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon7.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>Google Contact Sync</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          </div>
        </div>

          
        {/* Card Component 3 */}
        <div className='w-[300px] p-2  flex flex-col text-left'>
          <h1 className='text-2xl font-bold text-black'>Premium</h1>
          <p className='text-black text-sm mb-2'>Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</p>
          <div className='flex flex-row items-center gap-4 '>
            <h1 className='text-2xl font-bold text-black py-4'>Rp 76.000</h1>
            <p className='text-black text-sm '>/ bulan</p>
          </div>
          <p className='text-black text-sm opacity-50 mb-4'>Rp. 800.000 /tahun</p>
          <button className='btn text-white bg-secondary mb-4'>Start Now</button>
          <div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon1.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>100 Auto reply</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon2.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>500 Broadcast</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon3.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>50 Campaign</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon4.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>500 Contact</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon5.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>50 Device</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon6.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>Excel / CSV Contact Import</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon7.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>Google Contact Sync</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          </div>
        </div>

          
        {/* Card Component 4 */}
        <div className='w-[300px] p-2  flex flex-col text-left bg-white '>
          <h1 className='text-2xl font-bold text-black'>Pro</h1>
          <p className='text-black text-sm mb-2'>Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</p>
          <div className='flex flex-row items-center gap-4 '>
            <h1 className='text-2xl font-bold text-black py-4'>Rp 86.000</h1>
            <p className='text-black text-sm '>/ bulan</p>
          </div>
          <p className='text-black text-sm opacity-50 mb-4'>Rp. 900.000 /tahun</p>
          <button className='btn text-white bg-secondary mb-4'>Start Now</button>
          <div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon1.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>100 Auto reply</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon2.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>500 Broadcast</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon3.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>50 Campaign</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon4.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>500 Contact</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon5.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>50 Device</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon6.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>Excel / CSV Contact Import</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          <Image
              src="/icon7.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className='text-sm text-black'>Google Contact Sync</p>
          </div><div className='flex flex-row gap-2 items-center my-1'>
          </div>
        </div>

        
        </div>
    </div>
  )
}
