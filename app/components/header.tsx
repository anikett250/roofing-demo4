"use client"
import { motion } from "framer-motion";

export default function Header() {
    return (
        <div className="">
            <div className="bg-gradient-to-b from-[#7BBFEE] from-[10%] to-[#FFFFFF] to-[40%] w-full flex flex-col justify-center px-4 md:px-8 py-10 md:py-0">
                <div className="text-2xl sm:text-4xl md:text-6xl lg:text-[95px] text-center text-black mt-10 md:mt-30 leading-tight">
                    Protect Your Home With Expert<br /> Roofing Solutions
                </div>
                <div className="text-lg sm:text-2xl md:text-3xl lg:text-[33px] text-center mt-4 md:mt-5 text-[#454545] leading-snug">
                    Reliable, Affordable, And High-Quality<br className="hidden md:block" /> Roofing Services For Residential And<br className="hidden md:block" /> Commercial Properties.
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mt-6 md:mt-9">
                    <button className="px-6 py-3 md:px-7 md:py-4 bg-[#FFCF36] text-base md:text-[25px] rounded-full text-black font-medium">
                        Get Free Quote
                    </button>
                    <button className="border-2 border-black text-black px-6 py-3 md:px-7 md:py-4 rounded-full text-base md:text-[25px] font-medium">
                        View Our Work
                    </button>
                </div>
                <div className="flex sm:flex-row gap-6 sm:gap-12 md:gap-45 justify-center mt-12 md:mt-25 px-4">
                    <div className="text-sm md:text-[30px] text-[#454545] flex flex-col text-center">
                        <span className="text-xl md:text-[60px] font-semibold text-black">
                            25+
                        </span>
                        Years In Marketing
                    </div>
                    <div className="text-sm md:text-[30px] text-[#454545] flex flex-col text-center">
                        <span className="text-xl md:text-[60px] font-semibold text-black">
                            48+B
                        </span>
                        Jobs Completed
                    </div>
                    <div className="text-sm md:text-[30px] text-[#454545] flex flex-col text-center">
                        <span className="text-xl md:text-[60px] font-semibold text-black">
                            68K
                        </span>
                        Global Clients
                    </div>
                </div>
            </div>
            <div className="overflow-hidden w-full bg-[#FFCF36] mt-12 md:mt-21 py-2 md:py-1">
                <motion.div
                    className="flex w-max gap-4 md:gap-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 15,
                        repeat: Infinity,
                    }}
                >
                    {/* First set */}
                    <div className="flex text-center items-center gap-4 md:gap-8">
                        <span className="text-black text-lg md:text-[40px] font-semibold whitespace-nowrap">VEGETATIVE ROOFING</span>
                        <img src="/dot.svg" alt=""
                            className="w-4 md:w-25 items-center flex-shrink-0"
                        />
                        <span className="text-black text-lg md:text-[40px] font-semibold whitespace-nowrap">METAL ROOFING</span>
                        <img src="/dot.svg" alt=""
                            className="w-4 md:w-25 items-center flex-shrink-0"
                        />
                        <span className="text-black text-lg md:text-[40px] font-semibold whitespace-nowrap">SOLAR PANEL ROOFING</span>
                        <img src="/dot.svg" alt=""
                            className="w-4 md:w-25 items-center flex-shrink-0"
                        />
                        <span className="text-black text-lg md:text-[40px] font-semibold whitespace-nowrap">MODIFY ROOFING</span>
                        <img src="/dot.svg" alt=""
                            className="w-4 md:w-25 items-center flex-shrink-0"
                        />
                    </div>

                    {/* Duplicate for seamless loop */}
                    <div className="flex text-center items-center gap-4 md:gap-8">
                        <span className="text-black text-lg md:text-[40px] font-semibold whitespace-nowrap">VEGETATIVE ROOFING</span>
                        <img src="/dot.svg" alt=""
                            className="w-4 md:w-25 items-center flex-shrink-0"
                        />
                        <span className="text-black text-lg md:text-[40px] font-semibold whitespace-nowrap">METAL ROOFING</span>
                        <img src="/dot.svg" alt=""
                            className="w-4 md:w-25 items-center flex-shrink-0"
                        />
                        <span className="text-black text-lg md:text-[40px] font-semibold whitespace-nowrap">SOLAR PANEL ROOFING</span>
                        <img src="/dot.svg" alt=""
                            className="w-4 md:w-25 items-center flex-shrink-0"
                        />
                        <span className="text-black text-lg md:text-[40px] font-semibold whitespace-nowrap">MODIFY ROOFING</span>
                        <img src="/dot.svg" alt=""
                            className="w-4 md:w-25 items-center flex-shrink-0"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}