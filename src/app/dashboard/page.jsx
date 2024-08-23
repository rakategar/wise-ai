"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export default function Page() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#F7F7F7' }}>
      <div className=' left-0 h-screen w-72 p-2 flex flex-col  items-center gap-1 absolute top-8'>
        <Image 
          src="/logoblue.svg"
          alt="Forwardin Logo"
          width={207}
          height={63.63}
          className="p-4"
        />

        {/* Side Bar */}
        <div className='bg-secondary w-56 h-10 rounded-lg flex items-center p-1 gap-2'>
          <Image 
            src="/Component 4 (14).svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />
          <p className='text-white'>Dashboard</p>
        </div>
        <div className='w-56 h-10 rounded-lg flex items-center p-1 gap-2'>
          <Image 
            src="/Component 4 (13).svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />
          <p className='text-black'>Device</p>
        </div>

        {/* Dropdown */}
        <div>
          <div 
            onClick={toggleDropdown}
            role="button" 
            className="w-56 h-10 rounded-lg flex items-center p-1 gap-2 text-black cursor-pointer">
            <Image 
              src="/Component 4 (12).svg"
              alt="Forwardin Logo"
              width={20}
              height={20}
              className="ml-4"
            />
            <p>Contact</p>
          </div>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <ul className="w-56 mt-2 bg-base-100 rounded-lg shadow p-2 text-black menu">
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
            </ul>
          )}
        </div>

        {/* Remaining Menu Items */}
        <div className={`w-56 h-10 rounded-lg flex items-center p-1 gap-2 transition-all duration-300 ${isDropdownOpen ? 'mt-2' : 'mt-0'}`}>
          <Image 
            src="/Component 4 (14).svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />
          <p className='text-black'>Dashboard</p>
        </div>
        <div className={`w-56 h-10 rounded-lg flex items-center p-1 gap-2 transition-all duration-300 ${isDropdownOpen ? 'mt-2' : 'mt-0'}`}>
          <Image 
            src="/Component 4 (14).svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />
          <p className='text-black'>Dashboard</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className='bg-[#ECF2FA] w-[1400px] h-[795px] rounded-lg fixed right-7'>
        {/* Content goes here */}
      </div>
    </div>
  )
}
