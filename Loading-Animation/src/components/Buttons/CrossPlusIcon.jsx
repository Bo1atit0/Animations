import React, { useState } from "react";

const CrossPlusIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-center py-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-white border w-8 h-8 flex items-center justify-center"
      >
        <span
          className={`h-1 w-6 bg-red-500 absolute transition-transform duration-500 ease-in-out
          ${isOpen ? "rotate-45" : "rotate-0"}
          `}
        />
        <span
          className={`absolute h-1 w-6 bg-blue-500 transition-transform duration-500 ease-in-out
          ${isOpen ? "-rotate-45" : "rotate-90"}
          `}
        />
      </button>
    </div>
  );
};

export default CrossPlusIcon;
