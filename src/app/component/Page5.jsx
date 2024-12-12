import Image from "next/image";
import React from "react";

export default function Page5() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen min-w-full gap-24 "
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="w-[765px]">
        <h1 className="text-4xl font-bold text-secondary text-center flex flex-row justify-center">
          " Be <p className="text-amber-400">&ensp;Wise&ensp;</p> Be You ! "
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center">
        {/* Login Form Section */}
        <Image
          src="/gambarpage5.svg"
          alt="Admin Tools Screenshot"
          width={265}
          height={92.36}
          className="rounded-tl-lg z-[10]"
        />

        {/* Content Section */}
        <div className="w-[665px] mr-28 z-[10]">
          <div className=" flex flex-row gap-2 ">
            <p className="rounded-lg p-2 outline-secondary outline-4 bg-secondary">
              Bisnis dan Pemasaran
            </p>
            <p className="rounded-lg p-2 border-secondary border  text-secondary ">
              Komersial dan penjualan
            </p>
            <p className="rounded-lg p-2 border-secondary border  text-secondary">
              Organisasi Sosial
            </p>
          </div>
          <div className="mt-[45px] text-left ">
            <p className="mt-[30px] text-black">
              Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim
              promosi, pengumuman, dan informasi produk kepada pelanggan dalam
              jumlah besar secara efisien. Selain itu, fitur Campaign dapat
              membantu merencanakan dan menyampaikan pesan iklan dengan waktu
              yang tepat kepada target audiens yang sesuai.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
