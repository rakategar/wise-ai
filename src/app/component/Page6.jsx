import Image from "next/image";
import React from "react";
import ToggleSwitch from "./ToggleSwitch";

export default function Page6() {
  return (
    <div
      id="Page6"
      className="flex flex-col items-center justify-center min-h-screen min-w-full  "
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="w-[765px] mb-14 mt-24">
        <h1 className="text-4xl font-bold text-secondary text-center flex flex-row justify-center">
          " Be <p className="text-amber-400">&ensp;Wise&ensp;</p> Be You ! "
        </h1>
      </div>
      <ToggleSwitch />
      <div className="bg-sky-100  rounded-lg my-8 p-2">
        <h1 className="text-sm  font-bold text-secondary text-center">
          Hemat hingga 25% dengan paket tahunan
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center gap-8 mb-24">
        {/* Card Component 1 */}
        <div className="w-[300px] p-2  flex flex-col text-left">
          <h1 className="text-2xl font-bold text-black">Starter</h1>
          <p className="text-black text-sm mb-2">
            Mulai perjalanan Anda dengan paket Starter nikmati kemudahan Smart
            Home Energy dengan bantuan chat bot asistant yang sigap membantu dan
            mengelola semua alat pintar di rumah anda, dan fitur text to image
            yang menunjang kreativitas
            <br />
          </p>
          <h1 className="text-2xl font-bold text-black py-4">Gratis</h1>
          <p className="text-black text-sm opacity-50 mb-4">-</p>
          <button className="btn rounded-l-lg bg-secondary hover:bg-sky-700 text-white mb-4 gap-8 border-none">
            Start Now
          </button>

          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon2.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">IoT Web Panel</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon3.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Datalyze AI</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon4.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Customer Service </p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon5.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">50 Device</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon6.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Excel / CSV Import</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon7.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Google Sync</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1"></div>
        </div>

        {/* Card Component 2 */}
        <div className="w-[300px] p-2  flex flex-col text-left rounded-lg shadow-2xl shadow-secondary  ">
          <h1 className="text-2xl font-bold text-black">Basic</h1>
          <p className="text-black text-sm mb-2">
            Mulai perjalanan Anda dengan paket Starter nikmati kemudahan Smart
            Home Energy dengan bantuan chat bot asistant yang sigap membantu dan
            mengelola semua alat pintar di rumah anda, dan fitur text to image
            yang menunjang kreativitas
          </p>
          <div className="flex flex-row items-center gap-4 ">
            <h1 className="text-2xl font-bold text-black py-4">Rp 15.000</h1>
            <p className="text-black text-sm ">/ bulan</p>
          </div>
          <p className="text-black text-sm opacity-50 mb-4">
            Rp. 150.000 /tahun
          </p>
          <button className="btn text-white bg-[#FFB020] hover:bg-amber-600 mb-4">
            Start Now
          </button>

          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon2.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">IoT Web Panel</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon3.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Datalyze AI</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon4.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Customer Service </p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon5.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">50 Device</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon6.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Excel / CSV Import</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon7.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Google Sync</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1"></div>
        </div>

        {/* Card Component 3 */}
        <div className="w-[300px] p-2  flex flex-col text-left">
          <h1 className="text-2xl font-bold text-black">Premium</h1>
          <p className="text-black text-sm mb-2">
            Mulai perjalanan Anda dengan paket Starter nikmati kemudahan Smart
            Home Energy dengan bantuan chat bot asistant yang sigap membantu dan
            mengelola semua alat pintar di rumah anda, dan fitur text to image
            yang menunjang kreativitas
          </p>
          <div className="flex flex-row items-center gap-4 ">
            <h1 className="text-2xl font-bold text-black py-4">Rp 85.000</h1>
            <p className="text-black text-sm ">/ bulan</p>
          </div>
          <p className="text-black text-sm opacity-50 mb-4">
            Rp. 900.000 /tahun
          </p>
          <button className="btn rounded-l-lg bg-secondary hover:bg-sky-700 text-white mb-4 gap-8 border-none">
            {" "}
            Start Now
          </button>

          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon2.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">IoT Web Panel</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon3.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Datalyze AI</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon4.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Customer Service </p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon5.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">50 Device</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon6.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Excel / CSV Import</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon7.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Google Sync</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1"></div>
        </div>

        {/* Card Component 4 */}
        <div className="w-[300px] p-2  flex flex-col text-left bg-white ">
          <h1 className="text-2xl font-bold text-black">Pro</h1>
          <p className="text-black text-sm mb-2">
            Mulai perjalanan Anda dengan paket Starter nikmati kemudahan Smart
            Home Energy dengan bantuan chat bot asistant yang sigap membantu dan
            mengelola semua alat pintar di rumah anda, dan fitur text to image
            yang menunjang kreativitas
          </p>
          <div className="flex flex-row items-center gap-4 ">
            <h1 className="text-2xl font-bold text-black py-4">Rp 100.000</h1>
            <p className="text-black text-sm ">/ bulan</p>
          </div>
          <p className="text-black text-sm opacity-50 mb-4">
            Rp. 1.000.000 /tahun
          </p>
          <button className="btn rounded-l-lg bg-secondary hover:bg-sky-700 text-white mb-4 gap-8 border-none">
            {" "}
            Start Now
          </button>

          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon2.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">IoT Web Panel</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon3.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Datalyze AI</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon4.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Customer Service </p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon5.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">50 Device</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon6.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Excel / CSV Import</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1">
            <Image
              src="/icon7.svg"
              alt="Admin Tools Screenshot"
              width={30}
              height={30}
              className="rounded-tl-lg z-[10]"
            />
            <p className="text-sm text-black">Google Sync</p>
          </div>
          <div className="flex flex-row gap-2 items-center my-1"></div>
        </div>
      </div>
    </div>
  );
}
