import React from "react";
import { Link as Links } from "react-scroll";
import Logo from "/public/assets/logo.png";

import Image from "next/image";

import { FaBars, FaTimes } from "react-icons/fa";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

import { useState } from "react";

type Props = {};

function Navbar({}: Props) {
    const [nav, setNav] = useState(false);
    const HandleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80] flex justify-between items-center bg-transparent text-gray-50 p-10 z-10">
      <div className="z-10">
        <Image src={Logo} alt="logo" style={{ width: "70px" }} />
      </div>
      {/*menu */}
      <div className="hidden md:flex text-[18px]">
        <ul className="flex">
          <li>
            <Links to="Home" smooth={true} duration={1000} offset={10} spy={true}>
              HOME
            </Links>
          </li>
          <li>
            <Links to="About" smooth={true} duration={1000} spy={true}>
              ABOUT
            </Links>
          </li>
          <li>
            <Links to="Work" smooth={true} duration={1000} offset={-150} isDynamic={true} spy={true}>
              WORK
            </Links>
          </li>
          <li>
            <Links to="Contact" smooth={true} duration={1000} offset={120} spy={true}>
              CONTACT
            </Links>
          </li>
        </ul>
      </div>
      {/*hamburgur menu */}
      <div onClick={HandleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/*mobile menu */}
      <ul
        className={
          !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
        }>
        <li className="py-6 text-4fxl">
          <Links onClick={HandleClick} to="Home" smooth={true} duration={500}>
            HOME
          </Links>
        </li>

        <li className="py-6 text-4fxl">
          <Links onClick={HandleClick} to="About" smooth={true} duration={500}>
            ABOUT
          </Links>
        </li>
        <li className="py-6 text-4fxl">
          <Links onClick={HandleClick} to="Work" smooth={true} duration={500} offset={-100}>
            WORK
          </Links>
        </li>

        <li className="py-6 text-4fxl">
          <Links onClick={HandleClick} to="Contact" smooth={true} duration={500}>
            CONTACT
          </Links>
        </li>

        {/*social icons */}
        <div>
          <ul className="flex">
            <li>
              <a href="https://www.instagram.com/rashodk_/">
                <FaInstagram size={30} />
              </a>{" "}
            </li>
            <li>
              <a href="https://github.com/rashodkorala">
                <FaGithub size={30} />
              </a>{" "}
            </li>
            <li>
              <a href="https://twitter.com/rashodkorala">
                <FaTwitter size={30} />
              </a>{" "}
            </li>
            <li>
              <a href="mailto:rashodkorala2002@gmail.com">
                <HiOutlineMail size={30} />
              </a>{" "}
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
