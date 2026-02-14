import React from "react";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="relative w-full bg-[#0C0C0C] flex justify-center items-center px-6 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center items-center opacity-20">
        <img
          src="/G.png"
          alt="G_overlay"
          className="w-87.5 h-95 md:w-97.25 md:h-103.75"
        />
      </div>

      <div className="w-full max-w-7xl flex justify-center items-center z-2 max-[900px]:flex-col">
        <div className="flex-1 flex flex-col justify-end items-end text-right px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#DCCA87] font-serif tracking-wide">
            About Us
          </h1>

          <img src="/spoon.svg" alt="about_spoon" className="w-11.25 mt-3" />

          <p className="mt-6 mb-10 text-gray-300 leading-relaxed text-sm md:text-base max-w-md">
            At our restaurant, we believe food is more than just a meal — it’s
            an experience. Every dish we serve is crafted with fresh
            ingredients, rich flavors, and a passion for perfection. From
            traditional recipes to modern culinary creativity, we bring you a
            taste that feels like home and looks like art.
          </p>

          <button className="px-7 py-3 bg-[#DCCA87] hover:bg-[#cbb46c] transition-all duration-300 text-black font-semibold tracking-wide rounded-sm shadow-md">
            Know More
          </button>
        </div>

        <div className="flex justify-center items-center mx-10 my-10 max-[900px]:my-16 max-[900px]:mx-0">
          <img
            src="/knife.png"
            alt="about_knife"
            className="h-150 md:h-227.5 object-contain drop-shadow-2xl"
          />
        </div>

        <div className="flex-1 flex flex-col justify-start items-start text-left px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#DCCA87] font-serif tracking-wide">
            Our History
          </h1>

          <img src="/spoon.svg" alt="history_spoon" className="w-11.25 mt-3" />

          <p className="mt-6 mb-10 text-gray-300 leading-relaxed text-sm md:text-base max-w-md">
            Our journey began with a simple dream: to create a place where
            people can enjoy authentic flavors in a warm and welcoming
            atmosphere. Over the years, we’ve grown into a destination for food
            lovers, serving handcrafted dishes inspired by culture, tradition,
            and love. Every plate tells a story, and every visit becomes a
            memory.
          </p>

          <button className="px-7 py-3 bg-[#DCCA87] hover:bg-[#cbb46c] transition-all duration-300 text-black font-semibold tracking-wide rounded-sm shadow-md">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
