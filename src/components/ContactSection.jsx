import React from "react";

const ContactSection = ({
  title,
  sections = [],
  image,
  imageAlt = "",
  reverse = false,
}) => {
  return (
    <section className="w-full bg-[#f5f2ee] py-6 sm:py-24 px-6">

      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } justify-between gap-20`}
      >
        
        <div className="flex-1 text-[#4b3f35]">

          <h2 className=" text-3xl md:text-5xl font-extrabold tracking-wide">
            {title}
          </h2>

          <div className="w-48 h-0.5 bg-[#4b3f35] mt-2 sm:mt-6 mb-12"></div>

         
          {sections.map((block, index) => (
            <div key={index} className=" mb-6 sm:mb-16">

              {block.heading && (
                <>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-wide">
                    {block.heading}
                  </h3>
                  <div className="w-40 h-0.5 bg-[#4b3f35] mt-4 mb-8"></div>
                </>
              )}

              {block.items?.map((item, i) => (
                <p
                  key={i}
                  className={`uppercase text-[13px] sm:text-base font-extrabold leading-8 ${
                    item.highlight ? "text-[#b07b47]" : ""
                  }`}
                >
                  {item.text}
                </p>
              ))}
            </div>
          ))}
        </div>

        
        <div className="flex-1 hidden sm:flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="max-w-md object-contain"
            />
          ) : (
            <div className="w-72 h-72 rounded-full border-2 border-[#4b3f35] flex items-center justify-center">
              <img src="/shakes.png" alt="" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
