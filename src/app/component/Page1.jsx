import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page1() {
  return (
    <div
      className="flex items-center justify-center min-h-screen min-w-full gap-32 "
      style={{ backgroundColor: "#ECF2FA" }}
    >
      <div className="absolute top-0 left-0     ">
        <Image
          src="/background.svg"
          alt="Forwardin Logo"
          width={1332}
          height={372.15}
          className="opacity-50"
        />
      </div>
      {/* Content Section */}
      <div className="w-[465px]  z-[10]">
        <div className="mt-[30px] text-left">
          <div className="flex flex-row">
            <h1 className="text-7xl font-extrabold text-blue-600">wise</h1>
            <h1 className="text-7xl font-extrabold text-amber-400">.ai</h1>
          </div>

          <p className="font-medium mt-[30px] text-black">
            Selamat datang di wise.ai <br />
            AI asistant & Smart Home Panel dalam genggaman anda !
          </p>
        </div>
        <Link
          href="/register"
          className="btn rounded-l-lg  bg-secondary hover:bg-sky-700 text-white mt-4 gap-8 border-none"
        >
          <p className="">{"Daftar Sekarang   "}</p>
          <p className="">{"   ->"}</p>
        </Link>
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
  );
}
