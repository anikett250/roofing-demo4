"use client"
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#7BBFEE] px-4 md:px-20 py-4">
            <div className="mx-auto px-4 md:px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl md:text-[40px] text-black font-semibold">
                    Ridge
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-4 lg:gap-10 text-lg md:text-[27px] text-black">
                    <button className="hover:text-[#ffecae] transition-colors"
                        onClick={() => {
                            document.getElementById("home")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        Home
                    </button>
                    <button className="hover:text-[#ffecae] transition-colors"
                        onClick={() => {
                            document.getElementById("about")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        About Us
                    </button>
                    <button className="hover:text-[#ffecae] transition-colors"
                        onClick={() => {
                            document.getElementById("services")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        Services
                    </button>
                    <button className="hover:text-[#ffecae] transition-colors"
                        onClick={() => {
                            document.getElementById("projects")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        Projects
                    </button>
                    <button className="hover:text-[#ffecae] transition-colors"
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        Pricing
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1"
                >
                    <div className={`w-6 h-1 bg-black transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
                    <div className={`w-6 h-1 bg-black transition-all ${isOpen ? "opacity-0" : ""}`}></div>
                    <div className={`w-6 h-1 bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
                </button>

                {/* CTA */}
                <div className="hidden sm:block">
                    <button className="px-3 py-2 md:px-6 md:py-4 bg-[#FFCF36] text-black rounded-full text-sm md:text-[27px] font-medium">
                        Get Free Estimate
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#6BA8D6] px-4 py-4 flex flex-col gap-3 rounded-b-lg">
                    <a href="#" className="text-black text-base hover:text-[#FFCF36] transition-colors py-2">
                        Home
                    </a>
                    <a href="#" className="text-black text-base hover:text-[#FFCF36] transition-colors py-2">
                        About Us
                    </a>
                    <a href="#" className="text-black text-base hover:text-[#FFCF36] transition-colors py-2">
                        Services
                    </a>
                    <a href="#" className="text-black text-base hover:text-[#FFCF36] transition-colors py-2">
                        Projects
                    </a>
                    <a href="#" className="text-black text-base hover:text-[#FFCF36] transition-colors py-2">
                        Pricing
                    </a>
                    <button className="w-full px-4 py-3 bg-[#FFCF36] text-black rounded-full text-base font-medium mt-2">
                        Get Free Estimate
                    </button>
                </div>
            )}
        </nav>
    );
}