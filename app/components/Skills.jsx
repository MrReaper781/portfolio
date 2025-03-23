"use client";

import { technologies } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full px-6 md:px-[12%] py-10 scroll-mt-20 mb-20"
    >
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center p-4 bg-white shadow-lg rounded-xl transition-transform hover:scale-105"
          >
            {/* ✅ Fixed Image props */}
            <Image
              src={technology.icon}
              alt={technology.name}
              width={80} // Set width explicitly
              height={80} // Set height explicitly
              className="rounded-md"
            />
            <p className="mt-3 text-lg font-medium text-gray-700">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
