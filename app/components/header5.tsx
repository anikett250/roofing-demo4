const steps = [
    {
        label: "Step 01",
        title: "Consultation",
        desc: "We specialize in high-quality roofing solutions for homes and businesses. From installation to repair, our experts assess your needs and recommend the best approach.",
    },
    {
        label: "Step 02",
        title: "Detailed Proposal",
        desc: "We specialize in high-quality roofing solutions for homes and businesses. From installation to repair, we provide a transparent, itemized quote with no surprises.",
    },
    {
        label: "Step 04",
        title: "Project Installation",
        desc: "We specialize in high-quality roofing solutions for homes and businesses. From installation to repair, our crew works efficiently and leaves your property spotless.",
    },
    {
        label: "Step 05",
        title: "Final Inspection",
        desc: "We specialize in high-quality roofing solutions for homes and businesses. From installation to repair, we walk you through the completed work with full confidence.",
    },
];

export default function Header5() {
    return (
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-24 px-4 md:px-8 max-w-7xl mx-auto ">
            <div className="flex flex-col gap-5 w-full md:w-auto">
                <div className="flex flex-col gap-5">
                    <div className="border border-[#454545] rounded-full text-[#454545] text-base md:text-[20px] px-4 py-2 mt-0 md:mt-10 w-fit">
                        Work Process
                    </div>
                    <div className="text-2xl md:text-[50px] text-black leading-tight">
                        Our Proven Roofing Work<br /> Process
                    </div>
                    <div className="text-sm md:text-[20px] text-[#454545]">
                        We Provide Top-Quality Roofing Solutions Designed To<br className="hidden md:block" /> Protect Your Home
                    </div>
                    <div className="">
                        <img src="/header5.png"
                            alt=""
                            className="w-full md:w-150 h-auto md:h-150 rounded-[30px] object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="relative md:pl-[120px] mt-0 md:mt-50 w-full md:w-auto">

                {/* Vertical dashed line - hidden on mobile */}
                <div
                    className="hidden md:block absolute top-2 bottom-2 w-px"
                    style={{
                        left: "86px",
                        backgroundImage:
                            "repeating-linear-gradient(to bottom, #c4b89a 0px, #c4b89a 5px, transparent 5px, transparent 10px)",
                    }}
                />

                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="relative ml-[10px] mb-8 md:mb-12 last:mb-0 group"
                    >
                        {/* Step label */}
                        <span className="block md:absolute -left-[170px] top-0.5 text-sm md:text-[20px] font-medium tracking-[0.12em] uppercase text-[#000000] whitespace-nowrap mb-2 md:mb-0">
                            {step.label}
                        </span>

                        {/* Dot - visible on mobile as line indicator */}
                        <div className="absolute -left-3 md:-left-[38px] top-2 md:top-[7px] w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#000000] border-2 border-[#000000] transition-all duration-300 group-hover:bg-[#FFCF36] group-hover:border-[#FFCF36] group-hover:scale-125" />

                        {/* Content */}
                        <div className="ml-6 md:ml-0">
                            <h2 className="text-2xl md:text-[35px] text-[#1a1612] mb-2 md:mb-2.5 leading-snug transition-colors duration-300 group-hover:text-[#FFCF36]">
                                {step.title}
                            </h2>
                            <p className="text-sm md:text-[15px] font-light text-[#454545] leading-relaxed max-w-md">
                                {step.desc}
                            </p>
                        </div>

                        {/* Underline accent */}
                        <div className="mt-3 md:mt-4 h-px bg-[#c4b89a] w-8 md:w-10 transition-all duration-400 group-hover:w-16 md:group-hover:w-20" />
                    </div>
                ))}
            </div>
        </div>
    )
}