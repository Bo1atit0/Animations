import React from "react";

const Linear1 = () => {
  return (
    <section className="py-10 bg-neutral-300 font-bold px-8 flex flex-col gap-4">
      {/* Normal linear gradient - 2 Colors*/}
      <div className="bg-gradient-to-r from-green-900  to-lime-400 px-8 py-4">
        Linear Gradient - 2 colors
      </div>

      {/* 3-colors */}
      <div
        className="py-4 px-8 bg-gradient-to-l from-green-500 via-yellow-400 to-red-300
      "
      >
        Linear Gradient -3 colors
      </div>

      {/* Custom gradient using arbitrary values */}
      <div className="py-4 px-8 bg-[linear-gradient(45deg,red,orange,yellow,green,indigo,violet)]">
        Custom gradient
      </div>

      {/* Repeating linear gradient */}
      <div className="px-8 py-4 bg-[repeating-linear-gradient(to_right,black_0_20px,white_20px_30px)] ">
        <h1 className="z-10 bg-red-950 w-1/5 text-white text-center">
          Repeating Linear Gradient
        </h1>
      </div>

      {/* Creating dotted lines with Repeating linear gradient */}
      <div
        className="w-fit relative
           after:absolute
           after:left-0
           after:-bottom-1
           after:bg-[linear-gradient(to_right,black_0_30%,transparent_30%),repeating-linear-gradient(to_right,black_0_20%,transparent_20%_25%)]
           after:w-full
           after:h-[2px]
           after:bg-[length:100%_2px,length:100%_2px]
           "
      >
        <h1 className="text-blue-600">Dotted Lines</h1>
      </div>
    </section>
  );
};

export default Linear1;
