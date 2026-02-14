import React, { useState } from "react";
import { ChartNoAxesGantt, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Book a Table", path: "/reserve" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <section
        className={`w-full z-50 flex py-6 sm:py-12 items-center justify-between px-6 sm:justify-evenly text-white ${
          open ? "bg-[#4D443D]" : "bg-transparent"
        }`}
      >
        <img className="w-32 sm:w-40" src="./logo.png" alt="logo" />

        <ul className="hidden sm:flex space-x-6 font-semibold">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a className="hover:text-amber-300 duration-200" href={item.path}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="flex sm:hidden" onClick={() => setOpen(!open)}>
          {open ?
            <X size={34} />
          : <ChartNoAxesGantt size={34} />}
        </button>
      </section>

      {open && (
        <div
          className={`sm:hidden bg-[#4D443D] text-white w-full px-6 shadow-lg transition-all duration-500 ease-in-out transform ${
            open ?
              "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
          }`}
        >
          <div className="py-6 space-y-4">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="block text-sm text-center font-semibold hover:text-amber-300 duration-200"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
