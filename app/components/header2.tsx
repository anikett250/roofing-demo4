export default function Header2() {
    return (
        <div className="flex flex-col justify-center px-4 md:px-8 max-w-7xl mx-auto"
        >
            <div className="mt-10 md:mt-50 flex flex-col md:flex-row gap-10 md:gap-25 justify-center items-center md:items-start">
                <div className="flex flex-col gap-5 w-full md:w-auto">
                    <div className="border border-[#454545] rounded-full text-[#454545] text-base md:text-[20px] px-4 py-2 mt-0 md:mt-10 w-fit">
                        Our Company
                    </div>

                    <div className="text-3xl md:text-[50px] text-black leading-tight">
                        Over 20 Years Of<br /> Experience In The Field
                    </div>

                    <div className="text-base md:text-[25px] text-[#454545] leading-relaxed">
                        At Ridge, We Are Committed To Delivering Top-Quality
                        Roofing Solutions. With Over A Decade Of Experience, Our
                        Skilled Team Ensures Every Project Is Completed With
                        Precision And Care.
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-10 items-start md:items-center">
                        <button className="px-6 py-3 md:px-7 md:py-4 bg-[#FFCF36] text-black rounded-full text-base md:text-[27px] font-medium w-fit mt-0 md:mt-10">
                            Get Started Now
                        </button>
                        <div className="flex items-center gap-3 md:gap-5">
                            <img src="/call.svg"
                                alt=""
                                className="w-12 md:w-20 bg-black rounded-full p-2 md:p-3 mt-0 md:mt-10"
                            />
                            <div className="mt-0 md:mt-10">
                                <div className="text-sm md:text-[20px] text-[#454545]">
                                    Call Us 24/7
                                </div>
                                <div className="text-black font-semibold text-lg md:text-[30px]">
                                    +00 (47) 939 4883
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-auto">
                    <img
                        src="/second-header.jpg"
                        alt=""
                        className="w-full md:w-170 h-auto md:h-150 rounded-[25px] object-cover max-w-full"
                    />
                </div>
            </div>
            <div className="flex sm:flex-row gap-6 justify-between mt-12 md:mt-25">
                <div className="">
                    <img src="/logo.svg" alt=""
                        className="w-32 md:w-50 opacity-50"
                    />
                </div>
                <div className="">
                    <img src="/logo2.svg" alt=""
                        className="w-32 md:w-50 opacity-50"
                    />
                </div>
                <div className="">
                    <img src="/logo3.svg" alt=""
                        className="w-32 md:w-50 opacity-50"
                    />
                </div>
                <div className="">
                    <img src="/logo4.svg" alt=""
                        className="w-32 md:w-50 opacity-50"
                    />
                </div>
            </div>
        </div>
    )
}