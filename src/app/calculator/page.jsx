"use client";
import Navbar from "../component/Navbar";
import { Lightbulb } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

export default function page() {
  const [inputs, setInputs] = useState({
    daya: "",
    satuanDaya: "W",
    harga: 1700,
    satuanHarga: "Rp / kWh",
    jam: 24,
    menit: 0,
    periode: "Hari",
  });

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    }).format(angka);
  };

  const [results, setResults] = useState({
    jam: { konsumsi: 0, harga: 0 },
    hari: { konsumsi: 0, harga: 0 },
    bulan: { konsumsi: 0, harga: 0 },
    tahun: { konsumsi: 0, harga: 0 },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handlePeriodeChange = (periode, value) => {
    const updatedResults = { ...results };
    updatedResults[periode].konsumsi = (value * inputs.daya * 24).toFixed(2);
    updatedResults[periode].harga = (
      updatedResults[periode].konsumsi * inputs.harga
    ).toFixed(2);
    setResults(updatedResults);
  };

  const handleCalculate = () => {
    const { daya, satuanDaya, harga, jam, menit, periode } = inputs;

    // Konversi daya ke kWh jika satuan daya adalah Watt
    const dayaKwh = satuanDaya === "W" ? daya / 1000 : daya;

    // Total waktu dalam jam
    const totalJam = parseInt(jam) + parseInt(menit) / 60;

    // Hitung konsumsi dan harga untuk setiap periode
    const konsumsiJam = dayaKwh * totalJam;
    const hargaJam = konsumsiJam * harga;

    const konsumsiHari = konsumsiJam * 24;
    const hargaHari = konsumsiHari * harga;

    const konsumsiBulan = konsumsiHari * 30;
    const hargaBulan = konsumsiBulan * harga;

    const konsumsiTahun = konsumsiBulan * 12;
    const hargaTahun = konsumsiTahun * harga;

    setResults({
      jam: { konsumsi: konsumsiJam.toFixed(2), harga: hargaJam.toFixed(2) },
      hari: { konsumsi: konsumsiHari.toFixed(2), harga: hargaHari.toFixed(2) },
      bulan: {
        konsumsi: konsumsiBulan.toFixed(2),
        harga: hargaBulan.toFixed(2),
      },
      tahun: {
        konsumsi: konsumsiTahun.toFixed(2),
        harga: hargaTahun.toFixed(2),
      },
    });
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen text-black px-12 pt-16"
      style={{ backgroundColor: "#ECF2FA" }}
    >
      <div className="fixed top-0 p-4 z-50 ">
        <Navbar />
      </div>
      <div className="bg-white w-full h-full p-4 flex flex-col justify-center gap-8 rounded-lg text-white">
        <div className="flex flex-row gap-8">
          <div className="bg-secondary shadow-2xl w-full  rounded-lg p-4 font-medium text-xl flex flex-col gap-2">
            Masukkan daya
            <select
              name="satuanDaya"
              onChange={handleChange}
              className="select select-bordered w-full   items-center  text-black"
            >
              <option>daya listrik</option>
              <option>konsumsi listrik</option>
            </select>
            <div className="flex flex-row gap-2">
              <input
                type="text"
                placeholder="Type here"
                name="daya"
                onChange={handleChange}
                className="input input-bordered w-full max-w-xs text-black"
              />
              <select className="select select-bordered w-full max-w-xs jus items-center  text-black">
                <option>W ( Watt )</option>
                <option>kWh ( Kilo Watt per Hour )</option>
              </select>
            </div>
          </div>
          <div className="bg-secondary shadow-2xl w-full  rounded-lg p-4 font-medium text-xl flex flex-col gap-2">
            Masukkan harga
            <div className="flex flex-row gap-2">
              <input
                type="text"
                name="harga"
                placeholder="Type here"
                defaultValue={1700}
                onChange={handleChange}
                className="input input-bordered w-full max-w-xs text-black"
              />
              <select className="select select-bordered w-full max-w-xs jus items-center  text-black">
                <option>Rp / kWh</option>
                <option>Rp / mWh</option>
              </select>
            </div>
          </div>
          <div className="bg-secondary shadow-2xl w-full  rounded-lg p-4 font-medium text-xl flex flex-col gap-2">
            Berapa lama alat bekerja ?
            <div className="flex flex-row gap-2 items-center">
              <input
                type="text"
                name="jam"
                placeholder="Type here"
                defaultValue={24}
                onChange={handleChange}
                className="input input-bordered w-full max-w-xs text-black"
              />{" "}
              Jam
              <input
                type="text"
                name="menit"
                placeholder="Type here"
                defaultValue={0}
                onChange={handleChange}
                className="input input-bordered w-full max-w-xs text-black"
              />
              Menit
              <select className="select select-bordered w-full max-w-xs jus items-center  text-black">
                <option>Hari</option>
                <option>Minggu</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full ">
          <button
            className="btn btn-outline w-40 btn-secondary"
            onClick={handleCalculate}
          >
            Hitung
          </button>
          <button
            className="btn btn-outline w-40 btn-secondary"
            onClick={() =>
              setResults({
                jam: { konsumsi: 0, harga: 0 },
                hari: { konsumsi: 0, harga: 0 },
                bulan: { konsumsi: 0, harga: 0 },
                tahun: { konsumsi: 0, harga: 0 },
              })
            }
          >
            Reset
          </button>

          <div className="flex items-center ml-8 gap-8">
            <Lightbulb size={32} color="#7b830c" weight="fill" />
            <p className="text-black">
              Masukkan jumlah daya listrik / konsumsi listrik, lalu masukkan
              harga serta waktu pemakaian, dan tekan tombol hitung{" "}
            </p>
          </div>
        </div>
        <div className="bg-secondary shadow-2xl w-full  rounded-lg p-4 font-medium text-xl flex flex-col gap-2">
          <div className="overflow-x-auto text-white">
            <table className="table ">
              <thead className="text-white text-md">
                <tr>
                  <th>Periode</th>
                  <th>
                    Konsumsi Listrik <br /> ( kWh )
                  </th>
                  <th>
                    Harga <br /> ( Rp )
                  </th>
                </tr>
              </thead>
              <tbody>
                {["jam", "hari", "bulan", "tahun"].map((periode) => (
                  <tr key={periode}>
                    <td className="flex flex-row items-center gap-4">
                      <input
                        type="number"
                        defaultValue={1}
                        onChange={(e) =>
                          handlePeriodeChange(periode, e.target.value)
                        }
                        className="input input-bordered w-28 text-black flex items-center justify-center"
                      />
                      {periode}
                    </td>
                    <td>{results[periode].konsumsi}</td>
                    <td>{formatRupiah(results[periode].harga)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
