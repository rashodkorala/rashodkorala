import React from "react";

import { FaGithub, FaInstagram, FaRegCopyright, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
type Props = {};

const footer = (props: Props) => {
  return (
    <div
      id="Footer"
      className="flex flex-col w-full h-[120px]  text-[#AAAACCAA] justify-center items-center text-[12px] ">
      <div className="py-3">
        <ul className="flex ">
          <li className="hover:text-pink-500 hover:scale-110 transition-all duration-1000 ease-in-out">
            <Link href="https://www.instagram.com/rashodk_/">
              <FaInstagram size={30} />
            </Link>{" "}
          </li>
          <li className="hover:text-purple-500 hover:scale-110 transition-all duration-1000 ease-in-out">
            <Link href="https://github.com/rashodkorala">
              <FaGithub size={30} />
            </Link>{" "}
          </li>
          <li className="hover:text-blue-500 hover:scale-110 transition-all duration-1000 ease-in-out">
            <Link href="https://twitter.com/rashodkorala">
              <FaTwitter size={30} />
            </Link>{" "}
          </li>
          <li className="hover:text-red-500 hover:scale-110 transition-all duration-1000 ease-in-out">
            <Link href="mailto:rashodkorala2002@gmail.com">
              <HiOutlineMail size={30} />
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="flex items-center font-mono">
          <FaRegCopyright size={22} className="px-1" />
          Rashod Korala 2024
        </p>
        <p className="font-mono">Designed & built by Rashod Korala</p>
      </div>
    </div>
  );
};

export default footer;
