import React from "react";

export default function CategoryTab({ name, selected }) {
  return (
    <div className="flex flex-col items-center justify-start">
      {/* Dynamic Text Color */}
      <span className={`text-sm font-medium ${selected ? "text-purple-600 font-semibold" : "text-gray-500"}`}>
        {name}
      </span>

      {/* Conditional Horizontal Line */}
      <div
        className={`w-6 h-1 rounded-full mt-1 transition-all duration-300 place-self-start ${
          selected ? "bg-purple-600" : "bg-transparent"
        }`}
      ></div>
    </div>
  );
}
