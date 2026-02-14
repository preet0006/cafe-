// TextCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";

const TextCarousel = () => {
  
    
 const slides = [
  {
    title: <>we are not machines<br />we are real people.</>,
  },
  {
    title: <>The Choice is easy<br />when it's real food.</>,
  },
  {
    title: <>You are<br />what you eat.</>,
  },
];


  return (
    <div className="max-w-4xl  flex flex-col items-start  relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true} 
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-64"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            className="flex flex-col justify-center items-center text-center sm:justify-start  sm:items-start p-6 sm:text-left h-full"
          >
            <h2 className="font-bold mb-4  text-2xl uppercase md:text-7xl text-white">
              {slide.title}
            </h2>
            
            <button className="px-6 py-2 ml-3 border border-white rounded hover:bg-white hover:text-black transition">
              Order Catering Online
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TextCarousel;

