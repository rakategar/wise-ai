"use client";
import { useState } from "react";

export default function ToggleSwitch() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePlan = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={togglePlan}
        className={`relative inline-flex items-center h-10 w-56 rounded-full cursor-pointer transition-colors duration-300 ${
          isYearly ? " bg-gray-300" : "bg-gray-300"
        }`}
      >
        <span
          className={`${
            isYearly ? "translate-x-28" : "translate-x-4"
          } inline-block w-24 h-8 transform bg-secondary rounded-full transition-transform duration-300 ease-in-out`}
        />
        <span
          className={`absolute left-9 text-sm font-medium ${
            isYearly ? "text-gray-700" : " text-white"
          }`}
        >
          Monthly
        </span>
        <span
          className={`absolute right-10 text-sm font-medium ${
            isYearly ? "text-white" : "text-gray-700"
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
}
