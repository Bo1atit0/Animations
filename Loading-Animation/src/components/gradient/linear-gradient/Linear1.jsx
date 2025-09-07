import React from "react";

const Linear1 = () => {
  return (
    <section className="py-10 bg-neutral-300 font-bold px-8">
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
    </section>
  );
};

export default Linear1;
