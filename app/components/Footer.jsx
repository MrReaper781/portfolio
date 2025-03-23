"use client";

import { assets } from "@/assets/assets";
import Image from "next/image"; // ✅ Import Image
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a href="/" className="font-bold text-3xl">
          Vaibhav Vishesh
        </a>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          vaibhavahk123@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Vaibhav Vishesh. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/MrReaper781">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vaibhav-v-560800248/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://x.com/_Vaibhav_781?t=Z77UwlTuNzXBXn3Z_rjBoA&s=08"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
