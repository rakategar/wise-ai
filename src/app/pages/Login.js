import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Gunakan React Router untuk navigasi
import axios from "axios"; // Gunakan axios untuk mengirim request ke API

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Mengirim request login ke API
      const res = await axios.post("http://localhost:3000/api/auth/route", {
        email,
        password,
      });

      if (res.data.token) {
        // Simpan token di localStorage atau sessionStorage
        localStorage.setItem("authToken", res.data.token);

        // Navigasi ke halaman dashboard setelah berhasil login
        navigate("/dashboard");
      } else {
        setError("Invalid Credentials");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#ECF2FA" }}
    >
      {/* Logo */}
      <Link className="absolute top-10 left-10" to={"/"}>
        <img src="/logo.svg" alt="Forwardin Logo" width={177} height={33.63} />
      </Link>

      {/* Content Section */}
      <div className="w-[465px] mr-28">
        <div className="w-[465px] h-[292.36px] rounded-tl-lg overflow-hidden">
          <img
            src="/gambarlogin.svg"
            alt="Admin Tools Screenshot"
            width={465}
            height={292.36}
            className="rounded-tl-lg"
          />
        </div>
        <div className="mt-[45px] text-left">
          <h1 className="text-2xl font-bold text-gray-800">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </h1>
          <p className="mt-[30px] text-gray-600">
            Selamat datang di Forwardin! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
            pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
            lebih praktis dengan fitur sinkronisasi Google Contact. Dapatkan
            kendali penuh pesan dengan manajemen konten yang praktis.
          </p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="w-[466px] flex flex-col justify-center p-[40px] bg-white rounded-lg shadow-md">
        <div className="text-center mb-[40px]">
          <h2 className="text-2xl font-bold text-black">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600">
            We’re so excited to see you again!
          </p>
        </div>
        <form className="flex flex-col gap-[30px]" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              placeholder="Username / Email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 placeholder-opacity-50 text-black"
              disabled={loading} // Nonaktifkan input jika loading
            />
          </div>
          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 placeholder-opacity-50 text-black"
              disabled={loading} // Nonaktifkan input jika loading
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
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <div className="text-center mt-4 ">
            <a className="text-sm text-black pr-2">Butuh buat akun?</a>
            <a href="/register" className="text-sm text-blue-500">
              Daftar di sini
            </a>
          </div>
        </form>
        {/* Error Message */}
        {error && (
          <p className="bg-red-500 rounded-lg flex justify-center items-center p-2">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
