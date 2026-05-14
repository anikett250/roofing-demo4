"use client"
import { useState } from "react";

const faqs = [
    {
        q: "What Types Of Roofs Do You Install?",
        a: "We install a wide range of roofing types including asphalt shingles, metal roofing, flat roofs, tile, and slate. Our team recommends the best option based on your climate, budget, and home style.",
    },
    {
        q: "How Long Does A Roof Installation Take?",
        a: "Most residential roof installations are completed within 1–3 days depending on the size of your home and the materials selected. We'll give you a precise timeline during your consultation.",
    },
    {
        q: "Do You Offer Warranties On Your Work?",
        a: "Yes. We offer a workmanship warranty on all installations, in addition to manufacturer warranties on the materials used. Our team stands behind every job we complete.",
    },
    {
        q: "How Much Time Is Needed For Roof Installations?",
        a: "Timelines vary by project scope. A standard replacement can take 1–3 days, while larger or more complex roofing systems may take up to a week. We always work to minimize disruption.",
    },
    {
        q: "Can You Help With Insurance Claims?",
        a: "Absolutely. We have experience working with insurance companies and can help document damage, provide detailed estimates, and guide you through the claims process from start to finish.",
    },
];

export default function Askques() {
    const [open, setOpen] = useState(null);

    const toggle = (i) => setOpen(open === i ? null : i);

    return (
        <section className="min-h-screen bg-white flex items-center justify-center font-sans px-4 md:px-8 py-12 md:py-20">
            <div className="max-w-4xl w-full">

                {/* Header */}
                <div className="text-center mb-8 md:mb-7">
                    <h1 className="text-2xl md:text-[50px] text-black mb-3 leading-tight">
                        Your Questions Answered
                    </h1>
                    <p className="text-lg md:text-[25px] text-[#454545]">
                        We have answers to your questions about services and approach.
                    </p>
                </div>

                {/* Contact card */}
                <div className="bg-[#f9f6f1] rounded-2xl px-6 md:px-8 py-6 md:py-7 text-center mb-8 md:mb-12">
                    <p className="text-xl md:text-[27px] text-black mb-1">Got More Questions?</p>
                    <p className="text-lg md:text-[25px] text-[#454545]">Contact us for more information.</p>
                    <button className="px-6 md:px-7 py-3 md:py-4 bg-[#FFCF36] text-black rounded-full text-base md:text-[27px] font-medium w-fit mt-4 md:mt-5 hover:bg-yellow-500 transition-colors">
                        Contact Us
                    </button>
                </div>

                {/* Accordion */}
                <div className="border-t border-[#e8e0d4]">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-[#e8e0d4]">
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between py-4 md:py-5 text-left gap-4 group hover:bg-gray-50 transition-colors px-2 md:px-0"
                            >
                                <span className={`text-sm md:text-[17px] font-normal transition-colors duration-200 ${open === i ? "text-[#454545]" : "text-[#000000]"}`}>
                                    {faq.q}
                                </span>
                                <span className={`text-[#000000] font-black text-lg md:text-[20px] flex-shrink-0 transition-all duration-300 ${open === i ? "rotate-180 text-[#FFCF36]" : ""}`}>
                                    ⌄
                                </span>
                            </button>

                            <div className={`overflow-hidden transition-all duration-400 ease-in-out ${open === i ? "max-h-96 pb-4 md:pb-5" : "max-h-0"}`}>
                                <p className="text-xs md:text-sm font-light text-[#454545] leading-relaxed max-w-xl px-2 md:px-0">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}