"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Page4() {
  return (
    <div
      className="flex items-center justify-center min-h-screen min-w-full gap-32"
      style={{ backgroundColor: "#ECF2FA" }}
    >
      {/* Login Form Section */}
      <motion.div
        initial={{ opacity: 0, x: -200 }} // Start off-screen to the left
        animate={{ opacity: 1, x: 0 }} // Animate to its normal position
        transition={{ duration: 1 }} // Animation duration
      >
        <Image
          src="/imagegenerate.png"
          alt="Admin Tools Screenshot"
          width={465}
          height={292.36}
          className="rounded-tl-lg z-[10] shadow-2xl rounded-xl"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="w-[465px] mr-28 z-[10]"
        initial={{ opacity: 0, x: 200 }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Animate to its normal position
        transition={{ duration: 1, delay: 0.2 }} // Slight delay for staggered effect
      >
        <div className="mt-[45px] text-left">
          <div className="text-4xl font-bold text-black flex flex-row">
            Be
            <h1 className="text-4xl font-bold text-amber-400">
              &ensp;wise&ensp;
            </h1>
            <h1 className="text-4xl font-bold text-black">with curiosity</h1>
          </div>
          <h1 className="text-4xl font-bold text-black">about something</h1>
          <p className="mt-[30px] text-black">
            wise.ai membantu berkreasi dengan semua kreativitas yang anda
            miliki, semua yang anda ingin tahu, ada bersama wise!
          </p>
        </div>
      </motion.div>
    </div>
  );
}
