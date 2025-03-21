'use client';
import { ModeToggle } from "@/lib/theme_switcher";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* Menu Buttons */}
            <button
                className="text-6xl md:text-7xl font-medium focus:outline-none hidden text-orange-600 lg:block"
                onClick={() => setIsOpen(!isOpen)}
            >
                + Menu
            </button>
            <button
                className="text-6xl md:text-7xl font-medium focus:outline-none text-orange-600 block lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                +
            </button>

            {/* Sidebar */}
            {isOpen && (
                <div className="fixed top-0 right-0 w-full lg:w-1/3 h-full bg-background text-orange-600 shadow-lg p-6 z-10">
                    <button
                        className="text-6xl md:text-7xl font-medium mb-4 focus:outline-none absolute top-4 right-4"
                        onClick={closeMenu}
                    >
                        ✕
                    </button>

                    {/* Navigation Links */}
                    <nav className="flex flex-col space-y-11 w-full h-full justify-center font-thin px-[40px]">
                        <div className="flex flex-col space-y-4 text-5xl md:text-6xl">
                            <Link 
                                href="/projects" 
                                className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                                onClick={closeMenu}
                            >
                                Projects
                            </Link>
                            <Link 
                                href="/about" 
                                className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                                onClick={closeMenu}
                            >
                                About
                            </Link>
                            <Link 
                                href="/contact" 
                                className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col space-y-4 text-3xl md:text-4xl">
                            <Link 
                                href="https://instagram.com/rashodk_" 
                                className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                                onClick={closeMenu}
                            >
                                Instagram
                            </Link>
                            <Link 
                                href="https://linkedin.com/in/rashodk" 
                                className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                                onClick={closeMenu}
                            >
                                LinkedIn
                            </Link>
                            <Link 
                                href="https://github.com/rashodkorala" 
                                className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                                onClick={closeMenu}
                            >
                                GitHub
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}
