import React from 'react'
import { ChartNoAxesGantt } from 'lucide-react';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Order", path: "/order" },
  { name: "Book a Table", path: "/reserve" }
];


const NavBar = () => {
  return (
        <nav className="absolute top-0 left-0 w-full z-50 flex bg-transparent py-6 sm:py-12 items-center justify-between px-6 sm:justify-evenly text-white">

    <img className= 'w-32 sm:w-40 ' src="./logo.png" alt="" />
        
      
         <ul className=' hidden sm:flex space-x-4 font-semibold'>
          {navLinks.map((item, index) => (
         <li key={index}>
          <a href={item.path}>{item.name}</a>
         </li>
          ))}
          </ul>
         
         <button className='flex sm:hidden'><ChartNoAxesGantt size={34} /></button>
     
        

    </nav>
  )
}

export default NavBar

