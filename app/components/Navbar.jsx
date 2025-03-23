"use client";

import { assets } from "@/assets/assets";
import Image from "next/image"; // ✅ Import Image
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] z-50 flex justify-between items-center p-4 bg-white">
      {/* Logo */}
      <a href="/" className="font-bold text-3xl">
        Vaibhav Vishesh
      </a>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 white shadow-sm bg-opacity-50">
        <li>
          <a href="#top" className="font-Ovo hover:text-gray-500">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-500">
            About Me
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-gray-500">
            My Skills
          </a>
        </li>
        <li>
          <a href="#work" className="hover:text-gray-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </li>
      </ul>

      {/* Contact Button & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="hidden lg:flex items-center space-x-2 gap-3 py-2 px-6 border border-gray-500 rounded-full ml-4"
        >
          <span>Contact</span>
          <Image src={assets.arrow_icon} alt="arrow" width={12} height={12} />
        </a>
        <button
          className="block md:hidden ml-3"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image src={assets.menu_black} alt="menu" className="w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-5 w-48 bg-white shadow-md rounded-lg p-4 flex flex-col items-start md:hidden">
          <a href="#top" className="block py-2 w-full hover:bg-gray-100">
            Home
          </a>
          <a href="#about" className="block py-2 w-full hover:bg-gray-100">
            About Me
          </a>
          <a href="#work" className="block py-2 w-full hover:bg-gray-100">
            My Work
          </a>
          <a href="#contact" className="block py-2 w-full hover:bg-gray-100">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
