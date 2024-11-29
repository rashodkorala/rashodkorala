'use client';
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

function Navbar({ }: Props) {
  const [nav, setNav] = useState(false);
  const HandleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80] flex justify-between items-center bg-transparent p-5 md:p-10 z-10">
      <div className="z-10">
        {/* <Image src={Logo} alt="logo" style={{ width: "70px" }} /> */}
      </div>
      {/*menu */}
      <div className="hidden md:flex text-[20px]">
        <ul className="flex">
          <li>
            <Link href="/" legacyBehavior scroll={false}>
              <Links to="Home" smooth={true} duration={1000} offset={10} spy={true}>
                Home
              </Links>
            </Link>
          </li>
          <li>
            <Link href="/#Projects" legacyBehavior scroll={false}>
              <Links to="Projects" smooth={true} duration={1000} offset={0} isDynamic={true} spy={true}>
                Projects
              </Links>
            </Link>
          </li>
          <li>
            <Link href="/#Contact" legacyBehavior passHref scroll={false}>
              <Links to="Contact" smooth={true} duration={1000} offset={120} spy={true}>
                Contact
              </Links>
            </Link>
          </li>

        </ul>
      </div>
      {/*hamburgur menu */}
      <div onClick={HandleClick} className="md:hidden z-10 ">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/*mobile menu */}
      <ul className={
        !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center not-sr-only"
      }
      >
        <li className="py-3 text-3xl">
          <Link href="/" legacyBehavior scroll={false}>
            <Links onClick={HandleClick} to="Home" smooth={true} duration={500}>
              Home
            </Links>
          </Link>
        </li>

        <li className="py-3 text-3xl">
          <Link href="/#Projects" legacyBehavior scroll={false}>
            <Links onClick={HandleClick} to="Projects" smooth={true} duration={500} offset={-20}>
              Projects
            </Links>
          </Link>
        </li>

        <li className="py-3 text-3xl">
          <Link href="/#Contact" legacyBehavior scroll={false}>
            <Links onClick={HandleClick} to="Contact" smooth={true} duration={500}>
              Contact
            </Links>
          </Link>
        </li>

        {/*social icons */}
        <div className="m-5">
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
