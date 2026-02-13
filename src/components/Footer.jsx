import React from "react";

const footerData = {
  logo: "/logo.png",
  bgImage: "/footer.jpg",
  poweredLogo: "/powered.png",

  socialLinks: [
    { name: "Facebook", icon: "f", link: "#" },
    { name: "X", icon: "X", link: "#" },
    { name: "Instagram", icon: "i", link: "#" },
  ],

  contact: {
    phone: "613-232-3642",
    email: "CONTACT@NEXUS.CA",
    buttonText: "ORDER CATERING ONLINE",
  },

  columns: [
    {
      links: ["HOME", "GREEN REBEL MENU", "CATERING", "REBEL BOWL"],
    },
    {
      links: [
        "ABOUT",
        "LET’S CONNECT",
        "NUTRITIONAL INFORMATION",
        "PRIVACY & TERMS",
        "CAREERS",
      ],
    },
  ],

  copyright: "COPYRIGHT © NEXA SOLUTIONS 2016 | BRANDING & WEB BY:ME",
};

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${footerData.bgImage}')` }}
    >
    
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-white uppercase items-center ">
          
        
          <div className="flex flex-col space-y-6">
          

            
            <ul className="flex gap-3">
              {footerData.socialLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    aria-label={item.name}
                    className="border border-white w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>

            <div className="text-sm space-y-2 font-semibold">
              <p>CALL US: {footerData.contact.phone}</p>
              <p>{footerData.contact.email}</p>
            </div>

            
            <button className="border border-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-black transition w-fit">
              {footerData.contact.buttonText}
            </button>
          </div>

        
          {footerData.columns.map((col, colIndex) => (
            <ul
              key={colIndex}
              className="sm:flex hidden  flex-col space-y-4 text-sm font-semibold"
            >
              {col.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href="#"
                    className="hover:text-green-200 cursor-pointer transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-center items-center text-xs text-white/80 uppercase gap-6">
          <p className="text-center md:text-left">{footerData.copyright}</p>

         
        </div>
      </div>

      <div className="bg-[#4D443D] text-[#4D443D]  hidden sm:flex py-2">
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum itaque soluta repudiandae commodi excepturi nemo omnis, non aspernatur blanditiis doloremque cumque repellat quidem dolor nostrum natus, voluptatibus inventore autem?

      </div>
    </footer>
  );
}
