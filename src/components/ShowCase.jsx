import React from "react";

const ShowCase = () => {
  const stats = [
    { value: "150+", label: "Daily", sub: "Orders" },
    { value: "82+", label: "Special", sub: "Dishes" },
    { value: "35+", label: "Expert", sub: "Chefs" },
    { value: "10+", label: "Awards", sub: "Won" },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-300 px-6 sm:px-12 flex flex-col items-center text-center text-white space-y-10">
        <p className="uppercase tracking-[0.3em] text-[12px] sm:text-[14px] text-amber-300 font-semibold">
          Amazing Experience
        </p>

        {/* Divider Icon */}
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-10 bg-amber-300"></span>
          <span className="text-amber-300 text-xl">✦</span>
          <span className="h-[1px] w-10 bg-amber-300"></span>
        </div>

       
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wide uppercase">
          Levering
        </h2>

        <p className="text-[14px] sm:text-[18px] md:text-[22px] font-medium max-w-220 leading-relaxed text-white/90">
          Nyt gratis levering på alle dine bestillinger og få favorittvarene
          dine levert rett på dørstokken!
        </p>

        <img src="/pattern-10.svg" alt="" />

        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full pt-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-1"
            >
              <h3 className="text-4xl sm:text-5xl font-extrabold text-white">
                {item.value}
              </h3>

              <p className="uppercase tracking-widest text-[12px] sm:text-[14px] text-white/80 font-semibold">
                {item.label}
              </p>

              <p className="uppercase tracking-widest text-[11px] sm:text-[13px] text-amber-300 font-semibold">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
