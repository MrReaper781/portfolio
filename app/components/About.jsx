"use client";

import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen px-[12%] py-10 flex flex-col items-center justify-center text-center"
    >
      <h4 className="mb-2 text-lg">Introduction</h4>
      <h2 className="text-5xl">About me</h2>

      <div className="flex w-full flex-col items-center justify-center gap-20 my-15">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl">
          <p className="mb-10 max-w-4xl">
            I am a highly dedicated and detail-oriented Full-Stack Developer
            with a strong foundation in programming, algorithmic
            problem-solving, and end-to-end software development. I am deeply
            passionate about designing and building impactful, scalable, and
            high-performance projects that not only challenge my creativity but
            also push the boundaries of my technical expertise, allowing me to
            continuously learn and grow in the ever-evolving tech landscape.
          </p>

          {/* Centering the list */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl w-full justify-center">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer flex flex-col items-center text-center"
                key={index}
              >
                <Image
                  src={icon}
                  alt={title}
                  width={28}
                  height={28}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
