"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>

      <h2 className="text-center text-5xl font-Ovo">My Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories . It reflects my ability to solve complex problems,
        work with different technologies, and manage projects effectively.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center gap-5 mx-auto my-8">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg 
      relative cursor-pointer group w-full max-w-[500px]"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <a href={project.workLink}>
              <div
                className="bg-white w-10/12 rounded-md absolute bottom-5 
      left-1/2 -translate-x-1/2 py-3 px-5 flex items-center 
      justify-between duration-500 group-hover:bottom-7"
              >
                <div className="max-w-[200px]">
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>

                <div
                  className="border rounded-full border-black w-9 
aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] 
group-hover:bg-lime-300 transition"
                >
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5"
                  />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
