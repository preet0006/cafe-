import React, { useEffect, useState } from "react";
import { variants } from "../utils/constants";
import { useNavigate } from "react-router-dom";



const CardSection = ({ variant, data, cardImage, img, darkimg }) => {
  const navigate = useNavigate()
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
        className=" absolute w-45 left-3  "
        src={darkimg}
        alt=""
      />

      <div className={styles.container}>
        <img className={styles.image} src={data.image} alt="Menu Background" />

        <div className={styles.contentBox}>
          <h3 className={styles.title}>{data.title}</h3>

          <p className={styles.subtitle}>{data.subtitle}</p>

          <button onClick={()=>(navigate("/menu"))} className={styles.button}>
            <span className={styles.buttonBg}></span>
            <span className={styles.buttonText}>{data.buttonText}</span>
          </button>

          <img className="w-full ml-40 max-w-37.5" src={img} alt="" />
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
