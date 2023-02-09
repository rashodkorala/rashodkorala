import React from "react";

import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

type Props = {};

const skills = (props: Props) => {
  return (
    <div id="Skills" className=" w-full h-screen bg-bg">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-white xsm:px-5">
        <h1 className="text-4xl font-bold">Skills</h1>
        <p className="text-md py-4">here are a few technologies and Skills I have developed over the years,</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">FRONTEND</h1>
            <ul className="py-4">
              <li className=" flex items-center py-2">
                <FaHtml5 size={30} className="px-1" />
                HTML
              </li>
              <li className="flex items-center py-2">
                <FaCss3 size={30} className="px-1" />
                CSS
              </li>
              <li className="flex items-center py-2">
                <IoLogoJavascript size={30} className="px-1" />
                JavaScript
              </li>
              <li className="flex items-center py-2">
                <FaReact size={30} className="px-1" />
                React
              </li>
              <li className="flex items-center py-2">
                <TbBrandNextjs size={30} className="px-1" />
                Next.js
              </li>
              <li className="flex items-center py-2">
                <TbBrandTailwind size={30} className="px-1" />
                Tailwind CSS
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">BACKEND</h1>
            <ul className="py-4">
              <li className="flex items-center py-2">
                <FaNodeJs size={30} className="px-1" />
                Node.js
              </li>
              <li className="flex items-center py-2">
                <SiMongodb size={30} className="px-1" />
                MongoDB
              </li>
              <li className="flex items-center py-2">
                <SiMysql size={30} className="px-1" />
                MySQL
              </li>
              <li className="flex items-center py-2">
                <FaJava size={30} className="px-1" />
                Java
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
