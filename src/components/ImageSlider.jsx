import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const ImageSlider = () => {
  const images = [
    "https://i.pinimg.com/736x/c3/f3/d3/c3f3d32f3ecb48806799d4ad359c873d.jpg",
    "https://i.pinimg.com/736x/dd/6b/ff/dd6bff5435f2db3c2ef95122d04bb760.jpg",
    "https://i.pinimg.com/1200x/9d/70/cb/9d70cb377a3d3e8f5e9a8c3c40a07486.jpg",
    "https://i.pinimg.com/736x/47/06/6c/47066ccfb40ce0b87e27828aa0760b42.jpg",
    "https://i.pinimg.com/736x/57/51/3a/57513a7ec6245b27f7bbfce544240e32.jpg"
    
   
  ];

  return (
    <section className="w-full h-full mb-6 md:mb-0 md:h-[80vh] mt-12 flex justify-center items-center overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        speed={1000}
        loopedSlides={images.length}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="w-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="w-[90%]! sm:w-125! md:w-175!">
            <div className="h-[30vh] max-w-87.5 sm:max-w-full sm:h-87.5 md:h-120 w-full overflow-hidden rounded-xs">
              <img
                className="h-full w-full object-cover"
                src={img}
                alt={`slide-${idx}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSlider;
