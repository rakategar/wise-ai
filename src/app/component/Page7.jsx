import Image from "next/image";
import React from "react";

export default function Page1() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen min-w-full gap-8 "
      style={{ backgroundColor: "#3366FF" }}
    >
      <h1 className="text-4xl font-bold text-white mt-40 mb-8">
        Frequently Asked Questions
      </h1>

      <div className="flex flex-row gap-4 items-center mb-8">
        <input className="bg-white rounded-lg w-96 h-8 px-2 text-black" />
        <Image
          src="/iconsearch.svg"
          alt="Admin Tools Screenshot"
          width={30}
          height={30}
          className="rounded-tl-lg z-[10]"
        />
      </div>
      <div className="flex flex-col gap-4 items-center z-30 w-[620px]">
        <div className="collapse collapse-arrow  text-black bg-white">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-bold ">
            Apa itu wise.ai ?
          </div>
          <div className="collapse-content">
            <p>
              Wise AI adalah asisten pintar yang dapat membantu Anda dalam
              berbagai hal, mulai dari menjawab pertanyaan hingga memanajemen
              penggunaan energi di rumah. Bayangkan memiliki asisten pribadi
              yang selalu siap membantu Anda 24/7.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow  text-black bg-white">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-bold ">
            Apakah wise.ai cocok untuk saya?
          </div>
          <div className="collapse-content">
            <p>
              Wise.ai dirancang untuk mengakomodasi berbagai kebutuhan pengguna.
              Baik Anda seorang individu, bisnis kecil, atau perusahaan besar,
              kami memiliki paket yang sesuai untuk Anda. Fitur-fitur kami yang
              dapat disesuaikan memungkinkan Anda mengoptimalkan Wise.ai sesuai
              dengan tujuan spesifik Anda.{" "}
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow  text-black bg-white">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-bold ">
            Apakah wise.ai cocok digunakan jangka panjang ?
          </div>
          <div className="collapse-content">
            <p>
              Kami berkomitmen untuk memberikan dukungan penuh kepada pengguna
              Wise.ai. Kami memiliki tim dukungan yang siap membantu Anda dan
              komunitas pengguna yang aktif untuk saling berbagi pengetahuan dan
              pengalaman. Ini menjamin bahwa Anda akan selalu mendapatkan
              bantuan yang Anda butuhkan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
