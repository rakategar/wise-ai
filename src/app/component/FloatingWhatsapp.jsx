"use client";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FloatingWhatsapp() {
  const [message, setMessage] = useState(""); // State to store the input message

  // Function to handle Enter key press and open WhatsApp link
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const url = `https://wa.me/6285810337949?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank"); // Open WhatsApp link in a new tab
    }
  };

  return (
    <div className="flex flex-col justify-end items-end fixed bottom-4 right-4">
      {/* Chat Box */}
      <motion.div
        className="bg-gray-100 w-40 h-60 flex flex-col justify-between rounded-xl"
        initial={{ opacity: 0, scale: 0.8 }} // Initial state: small and invisible
        animate={{ opacity: 1, scale: 1 }} // Animate to full size and visible
        transition={{ duration: 0.2, delay: 6 }} // 6 seconds delay after page load
      >
        <div className="bg-green-600 w-full h-10 justify-start items-center flex flex-row gap-4 px-2 rounded-lg">
          <Image
            src={"/pprizka.jpg"}
            width={30}
            height={30}
            className="rounded-full"
            alt="Profile"
          />
          <p className="text-xs font-bold">Kak Rizka</p>
        </div>
        <div>
          <div className="bg-white mb-4 h-8 flex justify-start items-center flex-row p-2 mx-2 gap-2 rounded-r-xl rounded-tl-xl shadow-lg">
            <Image
              src={"/pprizka.jpg"}
              width={20}
              height={20}
              className="rounded-full"
              alt="Profile"
            />
            <p className="text-black text-xs">emm mau tanya ?</p>
          </div>
          <div className="bg-green-600 w-full h-10 flex justify-center p-2 rounded-lg">
            <input
              type="text"
              className="bg-white w-full rounded-xl text-black text-xs px-2"
              placeholder="hallo kak rizka!"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update state on input change
              onKeyDown={handleKeyDown} // Handle Enter key press
            />
          </div>
        </div>
      </motion.div>

      {/* WhatsApp Logo */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start off-screen below
        animate={{
          opacity: 1,
          y: 0, // Move to normal position
        }}
        transition={{
          duration: 0.8, // Duration of the entry animation
          delay: 3, // 3 seconds delay before the animation starts
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, 0], // Shake effect
          }}
          transition={{
            duration: 0.5, // Duration of the shake effect
            repeat: Infinity, // Loop the shake effect
            repeatType: "loop", // Repeat the shake animation continuously
            repeatDelay: 1, // 1-second delay before repeating the shake
          }}
        >
          <WhatsappLogo
            size={80}
            color="#79dd36"
            weight="duotone"
            className="cursor-pointer"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
