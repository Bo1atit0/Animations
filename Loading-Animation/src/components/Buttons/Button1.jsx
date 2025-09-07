import React from "react";

const Button1 = () => {
  return (
    <div className="bg-lime-700 py-10 flex flex-col gap-8 justify-center items-center">
      <button
        className="bg-gradient-to-r from-red-500 to-purple-600 py-4 px-12 cursor-pointer text-white font-bold
       hover:from-rose-400 opacity-95 hover:to-red-500 transition-all duration-1500 ease-in-out hover:opacity-80"
      >
        Hover Me!!
      </button>

      {/* Animate a Solid Color Overlay */}

      <button className="py-4 px-12 relative text-white font-bold cursor-pointer group">
        <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-sky-400 opacity-100 group-hover:opacity-0 transition-all duration-1000 ease-in-out"></span>
        <span className="absolute  inset-0 bg-gradient-to-r from-fuchsia-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"></span>
        <span className="relative">Hover Meee</span>
      </button>
    </div>
  );
};

export default Button1;
