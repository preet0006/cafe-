import React from "react";

const MenuSection = ({ menuItems }) => {
  return (
    <div className="bg-white w-full  min-h-screen py-20 px-6 text-[#4D443D]">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className=" text-3xl sm:text-5xl md:text-7xl font-semibold uppercase">
          {menuItems.heading}
        </h2>

        <div className="w-full border-b border-[#4D443D] mt-4 sm:mt-10 mb-14"></div>

        <div className="flex flex-col space-y-14">
          {menuItems.items.map((item, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-[20px] sm:text-2xl font-bold uppercase">
                {item.title}
              </h4>

              <p className="text-[13px] md:text-[16px] font-extrabold uppercase leading-relaxed max-w-xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
