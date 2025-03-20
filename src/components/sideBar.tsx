'use client';
import { ModeToggle } from "@/lib/theme_switcher";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Menu Buttons */}
            <button
                className="text-6xl md:text-7xl font-medium focus:outline-none hidden lg:block"
                onClick={() => setIsOpen(!isOpen)}
            >
                + Menu
            </button>
            <button
                className="text-6xl md:text-7xl font-medium focus:outline-none block lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                +
            </button>

            {/* Sidebar */}
            {isOpen && (
                <div className="fixed top-0 right-0 w-full lg:w-1/3 h-full bg-background shadow-lg p-6 z-10">
                    <button
                        className="text-6xl md:text-7xl font-medium mb-4 focus:outline-none absolute top-4 right-4"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>

                    {/* Navigation Links */}
                    <nav className="flex flex-col space-y-11 w-full h-full justify-center font-thin px-[100px]">
                        <div className="flex flex-col space-y-4 text-5xl md:text-6xl">
                            <Link href="/projects">Projects</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col space-y-4 text-3xl md:text-4xl">
                            <Link href="https://instagram.com">Instagram</Link>
                            <Link href="https://linkedin.com">LinkedIn</Link>
                            <Link href="https://github.com">GitHub</Link>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}
