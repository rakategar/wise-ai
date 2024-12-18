"use client";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          phone,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#ECF2FA" }}
    >
      {/* Logo */}
      <div className="absolute top-10 left-10">
        <Link href={"/"} className="cursor-pointer flex flex-row ml-8 ">
          <h1 className="font-bold text-4xl   text-blue-600">wise</h1>
          <h1 className="font-bold text-4xl  text-amber-400">.ai</h1>
        </Link>
      </div>

      {/* Content Section */}
      <div className="w-[465px] mr-28">
        <div className="w-[465px] h-[292.36px] rounded-xl shadow-2xl overflow-hidden">
          <Image
            src="/imagelanding.png"
            alt="Admin Tools Screenshot"
            width={465}
            height={292.36}
            className="rounded-tl-lg rounded-xl "
          />
        </div>
        <div className="mt-[45px] text-left">
          <h1 className="text-2xl font-bold text-gray-800">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </h1>
          <p className="mt-[30px] text-gray-600">
            Selamat datang di Wise.ai ! Siap untuk membuat hidup Anda lebih
            mudah? Mulai dengan menjelajahi fitur-fitur keren kami, seperti
            pengingat cerdas, kontrol rumah pintar, dan analisis data. Jangan
            ragu untuk menyesuaikan pengaturan agar sesuai dengan kebutuhan
            Anda. Mari kita optimalkan potensi Wise.ai bersama!
          </p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="w-[466px] flex flex-col justify-center p-[40px] bg-white rounded-lg shadow-md">
        <div className="text-center mb-[40px]">
          <h2 className="text-2xl font-bold text-black">
            Welcome to Forwardin
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Revolutionize your communication
          </p>
          <p className="text-sm text-gray-600">journey with Forwardin today</p>
        </div>

        <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 placeholder-opacity-50 text-black"
            />
          </div>

          <div className="relative">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 placeholder-opacity-50 text-black"
            />
          </div>

          <div className="relative flex gap-2">
            <select className="w-32 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-black">
              <option value="+62">(ID) +62</option>
              {/* Add other country codes as needed */}
            </select>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              id="phone"
              placeholder="WhatsApp Phone Number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 placeholder-opacity-50 text-black"
            />
          </div>

          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 placeholder-opacity-50 text-black"
            />
          </div>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-500">
              Lupa Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>

          {/* Error Massage */}
          {error && (
            <p className="bg-red-500 rounded-lg flex justify-center items-center p-2">
              {error}
            </p>
          )}

          <div className="text-center mt-4">
            <a className="text-sm text-black pr-2">Sudah punya akun?</a>
            <a href="/login" className="text-sm text-blue-500">
              Masuk di sini
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
