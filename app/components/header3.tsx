

const services = [
    { id: "01", title: "Roof Installation", desc: "Get Expert Roof Installations With High Quality Materials That Guarantee Longest Lasting Protection." },
    { id: "02", title: "Roof Replacement", desc: "Get High-Quality Roofing Installations With Durable Materials That Provide Long-Term Protection And Superior Performance." },
    { id: "03", title: "Gutter Installation", desc: "Get Expert Roof Installations With High Quality Materials That Guarantee Longest Lasting Protection." },
    { id: "04", title: "Chimney Flashing Repair", desc: "Receive Professional Roof Installations Using Premium Materials That Ensure The Longest-Lasting Protection For Your Home." },
    { id: "05", title: "Emergency Services", desc: "Expert Roofing Services With Top-Quality Materials Designed For Durability And Maximum Protection That Lasts For Years." },
    { id: "06", title: "Roof Fitting", desc: "Trust Skilled Roofers For Expert Installation With Premium Materials Ensuring The Longest-Lasting Protection Property." },
];

function ServiceCard({ id, title, desc }: { id: string; title: string; desc: string }) {
    return (
        <div className="bg-gray-100 rounded-2xl p-6 flex flex-col gap-4">
            <span className="inline-flex items-center justify-center bg-yellow-400 text-black text-xs font-bold rounded-full px-3 py-1 w-fit">
                {id}
            </span>
            <h3 className="text-lg md:text-[30px] font-bold text-black">{title}</h3>
            <p className="text-sm md:text-[20px] text-[#454545] leading-relaxed flex-1">{desc}</p>
            <button className="bg-black text-white text-xs md:text-sm font-medium px-4 md:px-5 py-2 md:py-3 rounded-lg w-fit hover:bg-gray-800 transition-colors">
                View More
            </button>
        </div>
    );
}

export default function Header3() {
    return (
        <div className="px-4 md:px-8 max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-190 mt-12 md:mt-30">
                <div className="flex flex-col gap-3 max-w-2xl w-full md:w-auto">
                    <div className="border border-[#454545] rounded-full text-[#454545] text-base md:text-[20px] px-4 py-2 mt-0 md:mt-10 w-fit">
                        What To Expect
                    </div>
                    <div className="text-2xl md:text-[50px] font-bold text-black leading-tight">
                        Our Specialized Services
                    </div>
                    <div className="text-sm md:text-[20px] text-[#454545]">
                        We Provide Top-Quality Roofing Solutions Designed To<br className="hidden md:block" />
                        Protect Your Home And Enhance Its Value.
                    </div>
                </div>

                <button className="border border-[#454545] rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 text-sm md:text-[18px] text-black shrink-0 w-fit md:w-auto">
                    View All
                    <img src="/arrow.svg" alt="" className="w-4 md:w-5" />
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-0 md:p-8 mt-8">
                {services.map((s) => (
                    <ServiceCard key={s.id} {...s} />
                ))}
            </div>
        </div>
    )
}