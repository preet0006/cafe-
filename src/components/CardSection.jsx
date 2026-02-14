import React, { useEffect, useState } from "react";

const variants = {

  brown: {
    wrapper:
      " relative flex w-full uppercase items-center justify-center md:justify-start text-[#4D443D]",

    container: "relative w-full  max-w-280 h-[70dvh] md:h-137.5",
    image: "w-full h-full object-cover",

    contentBox:
      "absolute top-[25%]  py-4 md:top-20 left-1/2 -translate-x-1/2 flex flex-col space-y-2 px-4 items-center text-center md:items-start md:text-left",

    title:
      "text-3xl min-w-xs md:min-w-xl md:text-6xl font-bold text-[#4D443D] shrink-0",

    subtitle:
      "mt-2 uppercase text-[14px] text-center md:text-start md:text-[21px] font-bold max-w-xl",

    button:
      "relative overflow-hidden border border-black mt-12 font-semibold text-sm sm:text-base px-3 py-3 w-34 md:w-52 inline-block text-center group",

    buttonBg:
      "absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out",

     imgContent: "absolute -right-[60%] w-full  -top-1/3 md:-right-1/5 sm:w-130",

    buttonText: "relative z-10",
  },

  brown2: {
    wrapper:
      " relative flex w-full uppercase items-center justify-center md:justify-start text-[#4D443D]",

    container: "relative w-full  max-w-280 h-[70dvh] md:h-137.5",
    image: "w-full h-full object-cover",

    contentBox:
      "absolute top-[25%]  py-4 md:top-20 left-1/2 -translate-x-1/2 flex flex-col space-y-2 px-4 items-center text-center md:items-start md:text-left",

    title:
      "text-3xl min-w-xs md:min-w-xl md:text-6xl font-bold text-[#4D443D] shrink-0",

    subtitle:
      "mt-2 uppercase text-[14px] text-center md:text-start md:text-[21px] font-bold max-w-xl",

    button:
      "relative overflow-hidden border border-black mt-12 font-semibold text-sm sm:text-base px-3 py-3 w-34 md:w-52 inline-block text-center group",

    buttonBg:
      "absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out",

     imgContent: "absolute -right-[60%] top-60 md:-right-1/6 w-full sm:w-84",

    buttonText: "relative z-10",
  },

  black: {
    wrapper: "flex w-full  text-white justify-end",
    container: "relative w-full bg-green-300 max-w-280 h-[60dvh] md:h-137.5",
    image: "w-full h-full object-cover",
    contentBox:
      "absolute  top-[25%] left-[15%] md:top-20 md:-left-12 flex flex-col space-y-2 ",

    title: " text-3xl   md:text-6xl  font-bold  shrink-0",

    subtitle:
      "mt-2 uppercase text-[16px]  md:text-[21px] font-bold   max-w-xl ",

    button:
      "relative overflow-hidden text-white bg-white text-black  mt-12 font-semibold px-3 py-3 w-52 inline-block text-center group",
    buttonBg:
      "  absolute inset-0 bg-[#252525] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out ",
    buttonText: "relative  z-10",
  },

  menu: {
    wrapper: " flex w-full text-center md:text-start uppercase justify-start text-[#4D443D] ",

    container: "relative w-full max-w-screen h-137.5",
    image: "w-full h-full object-cover",
     contentBox:
      "absolute top-[25%]  py-4 md:top-50 left-1/2 -translate-x-1/2 flex flex-col space-y-2 px-4 items-center text-center md:items-start md:text-left",
    title:
      "text-3xl min-w-xs md:min-w-xl md:text-6xl font-bold text-[#4D443D] shrink-0",

    subtitle:
      "mt-2 uppercase text-[14px] text-center md:text-start md:text-[21px] font-bold max-w-xl",

    button:
      "relative overflow-hidden border border-black mt-12 font-semibold text-sm sm:text-base px-3 py-3 w-34 md:w-52 inline-block text-center group",

    buttonBg:
      "absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out",

     imgContent: "absolute -right-[40%] top-40 md:right-1/7 w-full max-w-96 sm:w-xl",

    buttonText: "relative z-10",
  },
};

const CardSection = ({ variant, data, cardImage, img,darkimg }) => {


    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = variants[variant];

  return (
    <div className={styles.wrapper}>

    
      <img 
       style={{ transform: `translateY(${scrollY * 0.14}px)` }}
      className=" absolute w-45 left-3  " src={darkimg} alt="" />

    

      <div className={styles.container}>
        <img className={styles.image} src={data.image} alt="Menu Background" />

        <div className={styles.contentBox}>
          <h3 className={styles.title}>{data.title}</h3>

          <p className={styles.subtitle}>{data.subtitle}</p>

          <button className={styles.button}>
            <span className={styles.buttonBg}></span>
            <span className={styles.buttonText}>{data.buttonText}</span>
          </button>

          <img
           className="w-full ml-40 max-w-37.5" src={img} alt="" 
          />
        </div>

          <div className={styles.imgContent}>
          {cardImage && (
            <img
              src={cardImage}
              alt="decorative"
              className="w-full"
             style={{ transform: `translateY(${-scrollY * 0.23}px)` }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
