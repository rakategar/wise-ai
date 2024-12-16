"use client";
import {
  Bell,
  Calendar,
  CaretDown,
  Gear,
  SignOut,
  User,
} from "@phosphor-icons/react";
import { Drop } from "@phosphor-icons/react/dist/ssr";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Chart from "./Chart";

export default function Page() {
  const [openDropdown, setOpenDropdown] = useState(null); // State untuk melacak dropdown yang terbuka
  const { data: session } = useSession();
  const username = session?.user?.username; // Pastikan menggunakan username, bukan name
  const handleLogout = () => {
    signOut({ callbackUrl: "/login" }); // Ganti '/login' dengan URL yang ingin Anda arahkan setelah logout
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <div className="left-0 h-screen w-72 p-2 flex flex-col items-center gap-1 fixed top-8">
        <Link href={"/"} className="flex cursor-pointer flex-row my-4  ">
          <p className="font-bold text-2xl text-blue-600">wise</p>
          <p className="font-bold text-2xl text-amber-400">.ai</p>
        </Link>

        {/* Side Bar */}
        <div className="bg-secondary w-56 h-10 hover:bg-gray-200 rounded-lg flex items-center p-1 gap-2">
          <Image
            src="/Component 4 (14).svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />
          <p className="text-white">Dashboard</p>
        </div>
        <div className="w-56 h-10 hover:bg-gray-200 rounded-lg flex items-center p-1 gap-2">
          <Image
            src="/Component 4 (13).svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />
          <p className="text-black">Device</p>
        </div>

        {/* First Dropdown */}
        <div>
          <div
            onClick={() => toggleDropdown("firstDropdown")}
            role="button"
            className="w-56 h-10  rounded-lg flex items-center p-1 gap-2 text-black cursor-pointer hover:bg-gray-200"
          >
            <Image
              src="/Component 4 (12).svg"
              alt="Forwardin Logo"
              width={20}
              height={20}
              className="ml-4"
            />
            <p>Contact</p>
            <CaretDown size={20} className="absolute right-14" />
          </div>

          {/* First Dropdown Content */}
          {openDropdown === "firstDropdown" && (
            <ul className="w-56 mt-2 bg-base-100 rounded-lg shadow p-2 text-black menu">
              <li>
                <a href="#">
                  <Image
                    src="/Component 4 (12).svg"
                    alt="Forwardin Logo"
                    width={20}
                    height={20}
                    className="ml-4"
                  />
                  Contact
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/Component 4 (11).svg"
                    alt="Forwardin Logo"
                    width={20}
                    height={20}
                    className="ml-4"
                  />
                  Groups
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Second Dropdown */}
        <div>
          <div
            onClick={() => toggleDropdown("secondDropdown")}
            role="button"
            className="w-56 h-10 hover:bg-gray-200 rounded-lg flex items-center p-1 gap-2 text-black cursor-pointer"
          >
            <Image
              src="/Component 4 (10).svg"
              alt="Forwardin Logo"
              width={20}
              height={20}
              className="ml-4"
            />
            <p>Message List</p>
            <CaretDown size={20} className="absolute right-14" />
          </div>

          {/* Second Dropdown Content */}
          {openDropdown === "secondDropdown" && (
            <ul className="w-56 mt-2 bg-base-100 rounded-lg shadow p-2 text-black menu">
              <li>
                <a href="#">
                  <Image
                    src="/Component 4 (9).svg"
                    alt="Forwardin Logo"
                    width={20}
                    height={20}
                    className="ml-4"
                  />
                  Message
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/Component 4 (8).svg"
                    alt="Forwardin Logo"
                    width={20}
                    height={20}
                    className="ml-4"
                  />
                  Incoming Chat
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/Component 4 (7).svg"
                    alt="Forwardin Logo"
                    width={20}
                    height={20}
                    className="ml-4"
                  />
                  Outgoing Chat
                </a>
              </li>
            </ul>
          )}
        </div>
        <p className="text-black text-xs mr-48">Tools</p>

        {/* Remaining Menu Items */}
        <div
          className={`w-56 h-10 hover:bg-gray-200 rounded-lg flex items-center p-1 gap-2 transition-all duration-300 ${
            openDropdown ? "mt-2" : "mt-0"
          }`}
        >
          <Image
            src="/Component 4 (6).svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />
          <p className="text-black">Broadcast</p>
        </div>
        <div
          className={`w-56 h-10 hover:bg-gray-200 rounded-lg flex items-center p-1 gap-2 transition-all duration-300 ${
            openDropdown ? "mt-2" : "mt-0"
          }`}
        >
          <Image
            src="/Component 4 (5).svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />
          <p className="text-black">Campaign</p>
        </div>
        <div
          className={`w-56 h-10 hover:bg-gray-200 rounded-lg flex items-center p-1 gap-2 transition-all duration-300 ${
            openDropdown ? "mt-2" : "mt-0"
          }`}
        >
          <Image
            src="/Component 4 (4).svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />
          <p className="text-black">Auto Reply</p>
        </div>
        <div
          className={`w-56 h-10 hover:bg-gray-200 rounded-lg flex items-center p-1 gap-2 transition-all duration-300 ${
            openDropdown ? "mt-2" : "mt-0"
          }`}
        >
          <Image
            src="/Component 4 (2).svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />
          <p className="text-black">Customer Service</p>
        </div>
        <div
          className={`w-56 h-10 hover:bg-gray-200 rounded-lg flex items-center p-1 gap-2 transition-all duration-300 ${
            openDropdown ? "mt-2" : "mt-0"
          }`}
        >
          <Image
            src="/Component 4 (3).svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />
          <p className="text-black">Analytic</p>
        </div>
        <div
          className={`w-56 h-10 hover:bg-gray-200 rounded-lg flex items-center p-1 gap-2 transition-all duration-300 ${
            openDropdown ? "mt-2" : "mt-0"
          }`}
        >
          <Image
            src="/Component 4 (1).svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />
          <p className="text-black">Forwardin Api</p>
        </div>
        <p className="text-black text-xs mr-48">Others</p>

        <div
          className={`w-56 h-10 hover:bg-gray-200 rounded-lg flex items-center p-1 gap-2 transition-all duration-300 ${
            openDropdown ? "mt-2" : "mt-0"
          }`}
        >
          <Image
            src="/settings.svg"
            alt="Forwardin Logo"
            width={20}
            height={20}
            className="ml-4"
          />

          <p className="text-black">Settings</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#ECF2FA] w-[1400px] h-[795px] rounded-lg flex flex-col fixed right-7 p-4 gap-4 ">
        <div className="flex  items-center justify-end gap-4">
          <div className="bg-[#F7F7F7] w-10 h-10 btn-circle flex items-center justify-center ">
            <Bell size={20} weight="fill" className="text-black" />
          </div>
          <div className="bg-[#F7F7F7] w-52 h-10 rounded-full flex justify-end items-center">
            <p className="text-black w-42 flex justify-center mr-9">
              {username}
            </p>
            <div className="bg-secondary w-8 h-8 btn-circle flex items-center justify-center mr-2 ">
              <User size={20} weight="fill" className="text-white" />
            </div>
          </div>
          <div className="bg-[#F7F7F7] w-10 h-10 btn-circle flex items-center justify-center  ">
            <Gear size={20} weight="fill" className="text-black" />
          </div>

          <div
            className="bg-[#F7F7F7] w-16 h-9 btn btn-circle flex items-center justify-center mr-2 "
            onClick={handleLogout}
          >
            <SignOut size={20} weight="fill" className="text-error" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center ">
          <h1 className="text-black font-bold text-2xl">
            Selamat Siang, {username}
          </h1>
          <div className="flex flex-row justify-center items-center gap-2 mr-2">
            <div className="flex flex-col justify-start  text-left">
              <p className="text-xs text-black opacity-40 ">Tanggal hari ini</p>
              <p className="text-xs text-black opacity-70 ">
                Selasa, 29 Agustus 2024
              </p>
            </div>
            <Calendar size={20} weight="fill" className="text-black" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-col bg-[#F7F7F7] w-[819px] h-[233px] p-4 gap-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <p className="text-black text-xs flex  mr-8">
                  Paket <br /> saat ini
                </p>
                <h1 className="text-black text-xl font-bold flex justify-start mr-2">
                  Starter
                </h1>
                <p className="text-white bg-black text-xs flex items-center justify-start rounded-full p-1 px-2 ">
                  free
                </p>
              </div>
              <div className="flex flex-col  text-right">
                <p className="text-xs text-black opacity-40 justify-end ">
                  Tanggal hari ini
                </p>
                <p className="text-xs text-black opacity-70 justify-end">
                  Selasa, 29 Agustus 2024
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <p className="text-black text-xs flex  mr-8">Device</p>
                <div className="flex flex-col">
                  <progress
                    className="progress w-56 progress-error"
                    value="85"
                    max="100"
                  ></progress>
                  <p className="text-xs text-black opacity-40 justify-end ">
                    8 dari 10 device yang tersedia
                  </p>
                </div>
              </div>
              <div className="flex flex-col  text-right">
                <p className="text-xs text-black opacity-70 justify-end">
                  Upgrade paket untuk meningkatkan <br /> batasan fitur yang ada
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <p className="text-black text-xs flex  mr-8">Device</p>
                <div className="flex flex-col">
                  <progress
                    className="progress w-56 progress-success"
                    value="30"
                    max="100"
                  ></progress>
                  <p className="text-xs text-black opacity-40 justify-end ">
                    5 dari 100 kontak yang tersedia
                  </p>
                </div>
              </div>
              <div className="flex flex-col  text-right">
                <p className="text-xs text-secondary border-secondary   w-52 h-8  items-center justify-center btn btn-outline btn-secondary">
                  Upgrade Paket
                </p>
              </div>
            </div>
            <p className="text-xs text-black opacity-40 flex justify-center items-center mt-6 ">
              Tampilkan kapasitas fitur lainnya
            </p>
          </div>
          <div className="flex flex-col bg-[#F7F7F7] w-[540px] h-[233px] rounded-lg p-4 gap-1">
            <p className="text-black  font-bold mb-2">Pesan Terakhir</p>
            <div className="flex flex-row w-full h-10 bg-[#ECF2FA] rounded-lg items-center gap-4 justify-between">
              <div className="flex-row flex items-center gap-4">
                <div className="bg-secondary w-6 h-6 btn-circle flex items-center justify-center ml-4 ">
                  <User size={16} weight="fill" className="text-white" />
                </div>
                <div className="flex flex-col  text-left">
                  <p className="text-black text-xs font-bold text-left">Anda</p>
                  <p className="text-black text-xs text-left">
                    Hai apa kabarmu hari ini? Semoga...
                  </p>
                </div>
              </div>

              <p className="text-white bg-secondary text-xs flex items-center justify-end rounded-full p-1 px-2 mr-4 ">
                Terkirim
              </p>
            </div>

            <div className="flex flex-row w-full h-10 bg-[#ECF2FA] rounded-lg items-center gap-4 justify-between">
              <div className="flex-row flex items-center gap-4">
                <div className="bg-secondary w-6 h-6 btn-circle flex items-center justify-center ml-4 ">
                  <User size={16} weight="fill" className="text-white" />
                </div>
                <div className="flex flex-col  text-left">
                  <p className="text-black text-xs font-bold text-left">Anda</p>
                  <p className="text-black text-xs text-left">
                    Hai apa kabarmu hari ini? Semoga...
                  </p>
                </div>
              </div>

              <p className="text-white bg-secondary text-xs flex items-center justify-end rounded-full p-1 px-2 mr-4 ">
                Terkirim
              </p>
            </div>

            <div className="flex flex-row w-full h-10 bg-[#ECF2FA] rounded-lg items-center gap-4 justify-between">
              <div className="flex-row flex items-center gap-4">
                <div className="bg-success w-6 h-6 btn-circle flex items-center justify-center ml-4 ">
                  <p className="text-white text-xs font-bold ">IA</p>
                </div>
                <div className="flex flex-col  text-left">
                  <p className="text-black text-xs font-bold text-left">
                    Ihsanul Aftar
                  </p>
                  <p className="text-black text-xs text-left">
                    Hai apa kabarmu hari ini? Semoga...
                  </p>
                </div>
              </div>

              <p className="text-white bg-secondary text-xs flex items-center justify-end rounded-full p-1 px-2 mr-4 ">
                Terkirim
              </p>
            </div>
            <Link
              href={""}
              className="text-xs text-secondary  flex justify-center items-center mt-4 "
            >
              Tampilkan lainnya
            </Link>
          </div>
        </div>
        <div className="flex flex-col bg-[#F7F7F7] w-full h-full rounded-lg p-4 gap-1">
          <p className="text-black  font-bold mb-2 text-xl">Analitik</p>
          <div className="flex flex-row  items-center gap-2">
            <div className="flex flex-col border-gray-400 border w-[400px] h-full rounded-lg p-4 gap-1">
              <p className="text-black  font-bold mb-2 ">Ringkasan Hari Ini</p>
              <div className="flex flex-row items-center justify-between">
                <div className="dropdown dropdown-bottom">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 flex flex-row w-52 justify-between"
                  >
                    <div className="flex text-left flex-col">
                      <p className="text-black opacity-40 text-xs">Device</p>
                      <p>RMX3263</p>
                    </div>
                    <CaretDown size={20} className="text-black" />
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-black"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-200 w-32 h-12  rounded-lg p-1">
                  <div className="flex text-left flex-col text-black justify-center ml-2">
                    <p className="text-black opacity-40 text-xs">Aktif sejak</p>
                    <p className=" font-bold">29.8.2003</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-2">
                <div className="flex text-left flex-col text-black justify-center ml-2">
                  <p className="text-black opacity-40 text-xs">Pesan Keluar</p>
                  <p className=" font-bold">24</p>
                </div>
                <div className="flex text-left flex-col text-black justify-center ml-2">
                  <p className="text-black opacity-40 text-xs">Pesan Masuk</p>
                  <p className=" font-bold">7</p>
                </div>
                <div className="flex text-left flex-col text-black justify-center ml-2">
                  <p className="text-black opacity-40 text-xs">Pesan Gagal</p>
                  <p className=" font-bold">0</p>
                </div>
              </div>
              <div className="flex flex-row gap-8 items-center mt-4">
                <div className="bg-gray-200 w-32 h-12  rounded-lg p-1">
                  <div className="flex text-left flex-col text-black justify-center ml-2">
                    <p className="text-black opacity-40 text-xs">Hari ini</p>
                    <p className=" font-bold">24</p>
                  </div>
                </div>
                <div className="bg-gray-200 w-32 h-12  rounded-lg p-1">
                  <div className="flex text-left flex-col text-black justify-center ml-2">
                    <p className="text-black opacity-40 text-xs">
                      Rata-rata harian
                    </p>
                    <p className=" font-bold">7</p>
                  </div>
                </div>
              </div>
              <div className="flex text-left flex-col text-black justify-center ml-2 mt-4 gap-2">
                <p className="text-black font-medium ">Grafik chart perjam</p>
                <p className=" font-bold text-secondary">505</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center border-gray-400 border w-full h-full rounded-lg p-4 gap-1">
              <div className="flex flex-col justify-between">
                <p className="text-black  font-bold mb-10 ">
                  Total Statistik Pesan
                </p>

                <div className="flex flex-row">
                  <div className="flex text-left flex-col text-black justify-center ml-2">
                    <p className="text-black opacity-40 text-xs">
                      Total Pesan Keluar
                    </p>
                    <p className=" font-bold">48</p>
                  </div>
                  <div className="flex text-left flex-col text-black justify-center ml-2">
                    <p className="text-black opacity-40 text-xs">
                      Total Pesan Gagal
                    </p>
                    <p className=" font-bold">8</p>
                  </div>
                </div>
                <div className="flex text-left flex-col text-black justify-center ml-2">
                  <p className="text-black opacity-40 text-xs">
                    Total Pesan Masuk
                  </p>
                  <p className=" font-bold">24</p>
                </div>
              </div>
              <div className="w-[600px]">
                <Chart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
