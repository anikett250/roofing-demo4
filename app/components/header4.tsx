"use client"
import { useState } from "react";

const slides = [
    {
        before: "/before1.png",
        after: "/after1.png",
        title: "Before & After:",
        desc: "Experience The Difference With Our Expert Roofing Services. We Replace Old, Worn-Out Roofs With Durable, High-Quality Materials, Delivering A Strong, Long-Lasting.",
    },
    {
        before: "/before2.png",
        after: "/after2.png",
        title: "Before & After:",
        desc: "See The Transformation With Our Expert Roofing Solutions. From Damaged And Aging Roofs To Strong, Durable, And Visually Stunning Results, Our Work Speaks For Itself.",
    },
    // add more slides...
];

function SplitImage({ before, after }: { before: string; after: string }) {
    return (
        <div className="rounded-2xl overflow-hidden w-full h-48 sm:h-80 md:h-[420px] flex">
            <img src={before} alt="Before" className="w-1/2 h-full object-cover" />
            <img src={after} alt="After" className="w-1/2 h-full object-cover" />
        </div>
    );
}

export default function BeforeAfterSection() {
    const [current, setCurrent] = useState(0);

    // Pair slides into groups of 2
    const pairs = slides.reduce<(typeof slides)[]>((acc, _, i) =>
        i % 2 === 0 ? [...acc, slides.slice(i, i + 2)] : acc, []);

    return (
        <div className="px-4 md:px-8 max-w-7xl mx-auto py-10">
            {/* Header */}
            <div className="mb-8">
                <span className="border border-[#454545] rounded-full text-[#454545] text-base md:text-[20px] px-4 py-2 mt-0 md:mt-10 w-fit">
                    Our Work
                </span>
                <h2 className="text-2xl md:text-[50px] font-bold text-black mt-4 leading-tight">
                    Roof Repair Before And After
                </h2>
                <p className="text-lg md:text-[25px] text-[#454545] mt-2">
                    We Provide Top-Quality Roofing Solutions Designed To Protect Your Home.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {pairs[current] && pairs[current].map((slide, i) => (
                    <div key={i}>
                        <SplitImage before={slide.before} after={slide.after} />
                        <h3 className="text-lg md:text-[25px] font-bold text-black mt-4">{slide.title}</h3>
                        <p className="text-xs md:text-[15px] text-[#454545] mt-1 leading-relaxed">{slide.desc}</p>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
                {pairs.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-3 bg-black" : "w-3 h-3 bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}