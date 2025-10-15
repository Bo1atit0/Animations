const Conic1 = () => {
  return (
    <section className="bg-neutral-500 flex flex-col gap-4 items-center justify-center py-10">
      <h1 className="text-4xl text-white font-bold">Conic Gradient</h1>
      <p className="text-2xl font-semibold text-cyan-100">Simple Rainbow</p>
      <div
        className="h-64 w-64 border"
        style={{
          background:
            "conic-gradient(red,orange,yellow, green,blue,indigo,violet)",
        }}
      ></div>

      <div className="w-64 h-64 border-2 border-white bg-[conic-gradient(violet,indigo,blue,green,yellow,orange,red)]"></div>

      <p className="text-2xl font-semibold text-cyan-100">Pie Chart style</p>
      <div className="w-64 h-64 rounded-full border-2 bg-[conic-gradient(red_0deg_120deg,blue_120deg_240deg)]"></div>

      <p className="text-2xl font-semibold text-cyan-100">Custom Center</p>
      <div className="w-64 h-64 border-2 border-yellow-600 bg-[conic-gradient(at_top_left,black,white,yellow,yellow)]"></div>

      <p className="text-2xl font-semibold text-cyan-100">
        Animated Conic Gradient
      </p>
      <div
        className="w-64 h-64 border border-green-500 rounded-full spin
      bg-[conic-gradient(red_0deg_50deg,orange_50deg,100deg,indigo_100deg_150deg,pink_150deg_200deg,green_200deg_250deg)]"
      ></div>

      <div className=" w-64 h-64 rounded-full bg-[conic-gradient(transparent,transparent,transparent,pink)] p-2 spin">
        <div className="w-64 h-64 rounded-full bg-red-500"></div>
      </div>

      <div></div>
      <div
        className="h-64 w-64  rounded-full relative flex items-center justify-center z-10 overflow-hidden
      after:bg-[conic-gradient(transparent,transparent,transparent,yellow)] 
      after:content-[''] after:absolute after:inset-0 after:z-[-1] after:animate-[spinSlow_5s_linear_infinite] after:[animation-delay:-3s]
      before:bg-[conic-gradient(transparent,transparent,transparent,green)]
      before:content-[''] before:absolute before:inset-0 before:animate-[spinSlow_5s_linear_infinite] 
      
      "
      >
        <div className="h-60 w-60 bg-neutral-700 rounded-full absolute"></div>
      </div>
    </section>
  );
};

export default Conic1;
