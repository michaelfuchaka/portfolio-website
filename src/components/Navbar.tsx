"use client"
import React, { useState } from "react";


const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center fixed top-0 w-full bg-gray-900 px-8 py-4 z-50">
      {/* Logo / Name */}
      <div className="text-2xl font-bold text-white">
        Michael <span className="text-blue-500">Fuchaka</span>
      </div>

      <button onClick={ ()=> setIsOpen(!isOpen)}
        className="md:hidden  flex flex-col gap-1">
       <div className="w-6 h-0.5 bg-white"></div>
       <div className="w-6 h-0.5 bg-white"></div>
       <div  className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Navigation Links */}
      <ul className="flex gap-8 list-none text-white hidden md:flex">
        <li><a href="#home" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Home</a></li>
        <li><a href="#about" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">About</a></li>
        <li><a href="#services" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Services</a></li>
        <li><a href="#projects" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Projects</a></li>
        <li><a href="#testimonials" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Testimonials</a></li>
        <li><a href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Contact</a></li>
      </ul>
      

      {/* mobile menu */}

    {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-gray-900 flex flex-col gap-4 p-8 list-none"> 
        <li><a onClick={() => setIsOpen(false)} href="#home" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Home</a></li>
        <li><a onClick={() => setIsOpen(false)} href="#about" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">About</a></li>
        <li><a onClick={() => setIsOpen(false)} href="#services" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Services</a></li>
        <li><a onClick={() => setIsOpen(false)} href="#projects" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Projects</a></li>
        <li><a onClick={() => setIsOpen(false)} href="#testimonials" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Testimonials</a></li>
        <li><a onClick={() => setIsOpen(false)} href="#contact" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">Contact</a></li>
        </ul>
    )
    }  
    </nav>
  );
};




export default Navbar;