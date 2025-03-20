'use client';
import { ModeToggle } from "@/lib/theme_switcher";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="text-8xl font-medium focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                + Menu
            </button>
            {isOpen && (
                <div className="fixed top-0 right-0 w-1/3 h-full bg-background shadow-lg p-6 z-10">
                    <button
                        className="text-8xl font-medium mb-4 focus:outline-none absolute top-4 right-4"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>
                    <nav className="flex flex-col space-y-11  w-full h-full justify-center font-thin px-[100px]">
                        <div className="flex flex-col space-y-4  text-[90px]">
                            <Link href="/projects" className="">
                                Projects
                            </Link>
                            <Link href="/about" className="">
                                About
                            </Link>
                            <Link href="/contact" className="">
                                Contact
                            </Link>
                        </div>
                        <div className="flex flex-col space-y-4  text-6xl">
                            <Link href="/projects" className="">
                                Instagram
                            </Link>
                            <Link href="/about" className="">
                                LinkedIn
                            </Link>
                            <Link href="/contact" className="">
                                Github
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}