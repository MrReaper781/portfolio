"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Profile Image */}
      <div>
        <Image
          src={assets.profile2}
          alt="Profile"
          className="rounded-full w-32"
        />
      </div>

      {/* Heading Section */}
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Vaibhav Vishesh{" "}
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Fullstack web developer based in India.
      </h1>
      <p className="max-w-2xl mx-auto">
        Third-year Computer Science student and a dedicated Full-Stack Developer
        with a strong foundation in programming, problem solving, and software
        development.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Me Button */}
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </a>

        {/* Resume Download Button */}
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
