"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Page1() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen min-w-full gap-32"
      style={{ backgroundColor: "#ECF2FA" }}
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0">
        <Image
          src="/background.svg"
          alt="Forwardin Logo"
          width={1332}
          height={372.15}
          className="opacity-50"
        />
      </div>

      {/* Content Section */}
      <motion.div
        className="w-[465px] z-[10]" // Ensure content has z-index lower than image
        initial={{ opacity: 0, x: -200 }} // Initial position off-screen to the left
        animate={{ opacity: 1, x: 0 }} // Animate to normal position
        transition={{ duration: 1 }} // Duration of the animation
      >
        <div className="mt-[30px] text-left">
          <div className="flex flex-row">
            <h1 className="text-7xl font-extrabold text-blue-600">wise</h1>
            <h1 className="text-7xl font-extrabold text-amber-400">.ai</h1>
          </div>
          <div className="flex flex-row text-black text-xl">
            <p className="font-bold">W</p>
            <p className="font-light">ellness&nbsp;</p>
            <p className="font-bold">I</p>
            <p className="font-light">ntelegent&nbsp;</p>
            <p className="font-bold">S</p>
            <p className="font-light">mart&nbsp;</p>
            <p className="font-bold">E</p>
            <p className="font-light">ynergy</p>
          </div>
          <p className="font-medium mt-[40px] text-black">
            Selamat datang di wise.ai <br />
            AI assistant & Smart Home Panel dalam genggaman anda!
          </p>
        </div>
        <Link
          href="/register"
          className="btn rounded-l-lg bg-secondary hover:bg-sky-700 text-white mt-4 gap-8 border-none"
        >
          <p className="">{"Daftar Sekarang   "}</p>
          <p className="">{"   ->"}</p>
        </Link>
      </motion.div>

      {/* Login Form Section */}
      <motion.div
        className="z-[50]" // Set higher z-index to bring this image to the top layer
        initial={{ opacity: 0, x: 200 }} // Start from right side
        animate={{ opacity: 1, x: 0 }} // Animate to normal position
        transition={{ duration: 1, delay: 0.2 }} // Add slight delay for effect
      >
        <Image
          src="/gambarlogin.svg"
          alt="Admin Tools Screenshot"
          width={465}
          height={292.36}
          className="rounded-tl-lg"
        />
      </motion.div>
    </div>
  );
}
