"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FileCsv,
  Microphone,
  PaperPlaneRight,
  X,
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "../components/Navbar";
import { PaintBrush } from "@phosphor-icons/react";

function Chatbot() {
  const [file, setFile] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // Menyimpan riwayat chat
  const [isImageGenerate, setIsImageGenerate] = useState(false); // State untuk checkbox PaintBrush

  const textareaRef = useRef(null);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const splitIntoSyllables = (text) => {
    if (typeof text !== "string") {
      return [];
    }
    return text.split(/\s+/); // Pisahkan berdasarkan spasi
  };

  const handleUpload = async () => {
    if (!file || !query.trim()) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("query", query); // Tambahkan query ke FormData

    // Tambahkan loading state ke riwayat chat
    setChatHistory((prev) => [
      ...prev,
      { type: "query", text: query }, // Tambahkan query user
      {
        type: "response",
        text: <span className="loading loading-dots loading-md"></span>,
      }, // Tambahkan "Loading..."
    ]);

    try {
      const res = await axios.post("http://localhost:8080/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Gantikan "Loading..." dengan respons dari API
      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1] = {
          type: "response",
          text: res.data.answer || "No response received.",
        };
        return updatedHistory;
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1] = {
          type: "response",
          text: "Error processing your request.",
        };
        return updatedHistory;
      });
    } finally {
      // Reset state file dan query
      setFile(null);
      setQuery("");

      // Reset elemen input file
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    }
  };

  const handleChat = async (chatQuery) => {
    if (typeof chatQuery !== "string" || !chatQuery.trim()) return;

    setQuery("");
    setChatHistory((prev) => [...prev, { type: "query", text: chatQuery }]);
    setChatHistory((prev) => [
      ...prev,
      {
        type: "response",
        text: <span className="loading loading-dots loading-md"></span>,
      },
    ]);

    try {
      const res = await axios.post("http://localhost:8080/chat", {
        query: chatQuery,
      });

      // Delay sebelum mengganti loading dots
      setTimeout(() => {
        setChatHistory((prev) => {
          const updatedHistory = [...prev];
          updatedHistory[updatedHistory.length - 1] = {
            type: "response",
            text: res.data.answer,
          };
          return updatedHistory;
        });
      }, 5000); // Delay 1 detik
    } catch (error) {
      console.error("Error querying chat:", error);
      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1] = {
          type: "response",
          text: "Error processing your request.",
        };
        return updatedHistory;
      });
    }
  };

  const handleImageGenerate = async (imageQuery) => {
    setChatHistory((prev) => [
      ...prev,
      { type: "query", text: imageQuery },
      {
        type: "response",
        text: <span className="loading loading-dots loading-md"></span>,
      },
    ]);
    setQuery("");

    try {
      const res = await axios.post("http://localhost:8080/generate-image", {
        query: imageQuery,
      });
      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1] = {
          type: "response",
          text: res.data.imagePath,
        };
        return updatedHistory;
      });
    } catch (error) {
      console.error("Error generating image:", error);
      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1] = {
          type: "response",
          text: "Error generating image.",
        };
        return updatedHistory;
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Mencegah default behavior Enter di textarea

      // Check if there's a file and query to trigger handleUpload, otherwise handleChat
      const currentQuery = query.trim(); // Trim the query to avoid sending empty queries
      if (!isChecked && file && currentQuery) {
        handleUpload(); // Trigger file upload when both file and query are present
      } else if (!isChecked && currentQuery) {
        handleChat(currentQuery); // Otherwise, trigger chat query
      } else if (isChecked && currentQuery) {
        handleImageGenerate(currentQuery); // Otherwise, trigger chat query
      }
    }
  };

  const handleInputChange = (e) => {
    const textarea = textareaRef.current;
    setQuery(e.target.value);
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleBlur = () => {
    const textarea = textareaRef.current;
    if (!query.trim()) {
      textarea.style.height = "4em";
    }
  };

  const handleCsvClick = () => {
    fileInputRef.current.click();
  };

  const handleCancelFile = () => {
    setFile(null); // Clear file state
  };

  return (
    <div
      className="flex flex-col h-screen mx-auto p-6  text-center font-sans w-full "
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <Navbar />

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* display chat box */}
      <div className="flex flex-col mb-6 rounded-lg mx-60 p-4 overflow-auto text-black">
        {chatHistory.map((chat, index) => (
          <motion.div
            key={index}
            className={`p-4 my-1 ${
              chat.type === "query"
                ? "text-left bg-cyan-400 text-white font-medium ml-auto max-w-3xl rounded-b-3xl rounded-l-3xl"
                : "text-left rounded-xl"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.01 }} // Tambahkan delay untuk setiap pesan
          >
            <p className="text-xl font-bold mb-1">
              {chat.type === "query" ? "" : "wise.ai"}
            </p>
            {chat.type === "response" &&
            typeof chat.text === "string" &&
            chat.text.match(/\.(png|jpe?g|gif)$/i) ? (
              <img
                src={encodeURI(chat.text)}
                alt="Generated"
                className="rounded-md"
                width={300}
                height={300}
              />
            ) : (
              <p className="text-base">
                {splitIntoSyllables(chat.text).map((syllable, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.01 }} // Animasi berurutan per suku kata
                  >
                    {syllable}{" "}
                  </motion.span>
                ))}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col flex-grow justify-end">
        <div className="flex flex-col">
          {file && (
            <div className="flex flex-row items-center gap-8 justify-center  pr-64 mr-72 py-4">
              <img
                src="/csv.png"
                width={30}
                height={30}
                alt="CSV Logo"
                className="shadow-xl"
              />
              <span className="font-medium text-base-300">{file.name}</span>
              <button
                onClick={handleCancelFile}
                className="btn btn-ghost btn-sm text-black"
              >
                <X size={24} className="text-black" />
              </button>
            </div>
          )}

          <div className="relative flex flex-row justify-center items-center mb-4 ">
            <textarea
              ref={textareaRef}
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              placeholder="Ask a question..."
              className="p-4 mr-4 border border-gray-300 text-black w-1/2 input rounded-3xl resize-none overflow-auto shadow-xl"
              style={{
                maxHeight: "calc(9 * 1.5em)",
                minHeight: "4em",
                height: query ? "4em" : "4em",
                overflowY: query.trim() ? "auto" : "hidden",
              }}
            ></textarea>
            <div
              className={`absolute right-1/4 mr-6 bottom-2 flex gap-2 text-black  transition-transform duration-600 ${
                query ? "translate-x-0" : "translate-x-2"
              }`}
            >
              <button
                onClick={handleCsvClick}
                className="btn btn-ghost rounded-full"
              >
                <FileCsv size={24} />
              </button>

              {/* Hidden checkbox */}
              <input
                type="checkbox"
                id="custom-checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{ display: "none" }}
              />

              {/* Label with dynamic icon */}
              <label
                htmlFor="custom-checkbox"
                className="btn btn-ghost rounded-full"
              >
                {isChecked ? (
                  <PaintBrush size={24} weight="fill" />
                ) : (
                  <PaintBrush size={24} />
                )}
              </label>

              {(query || file) && (
                <button
                  onClick={() => {
                    if (file && query.trim()) {
                      handleUpload(); // Trigger upload if both file and query are present
                    } else if (query.trim()) {
                      handleChat(query.trim()); // Otherwise, trigger chat query
                    }
                  }}
                  className="btn btn-ghost rounded-full"
                >
                  <PaperPlaneRight size={24} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
