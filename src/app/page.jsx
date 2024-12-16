import React from "react";
import Navbar from "./component/Navbar";
import Image from "next/image";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import Page3 from "./component/Page3";
import Page4 from "./component/Page4";
import Page6 from "./component/Page6";
import Page7 from "./component/Page7";
import Page8 from "./component/Page8";
import FloatingWhatsapp from "./component/FloatingWhatsapp";
import { motion } from "framer-motion";

export default function () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="fixed top-0 p-4 z-50 ">
        <Navbar />
      </div>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page6 />
      <Page7 />
      <Page8 />
      <div className="flex flex-row items-center justify-items-center justify-center bottom-0 gap-4 z-10">
        <h1>Powered By</h1>
        <div className="flex flex-row">
          <h1 className="text-4xl font-extrabold text-white">wise</h1>
          <h1 className="text-4xl font-extrabold text-white">.ai</h1>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 z-10 p-8">
        <FloatingWhatsapp />
      </div>
    </div>
  );
}
