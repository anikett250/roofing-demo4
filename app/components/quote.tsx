export default function Quote() {
    return (
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
            <section className="rounded-2xl md:rounded-[30px] bg-gradient-to-b from-[#7BBFEE] to-[#FFFFFF] px-6 md:px-8 lg:px-30 py-10 md:py-16 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-0">

                {/* Left */}
                <div className="max-w-2xl w-full md:w-auto">
                    <h2 className="text-2xl md:text-[50px] text-[#000000] leading-tight mb-4 md:mb-5">
                        Protect Your Property With Roofix Today!
                    </h2>
                    <p className="text-[#454545] text-base md:text-[23px] font-light leading-relaxed mb-6 md:mb-10">
                        Whether You Need A Repair, Replacement, Or A Brand-New Roof, Roofix Has Got You Covered.
                    </p>
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-14 md:w-17 h-14 md:h-17 rounded-full bg-[#000000] flex items-center justify-center flex-shrink-0">
                            <img src="/call.svg" alt="" 
                            className="p-2 md:p-3"
                            />
                        </div>
                        <div>
                            <p className="text-[#454545] text-base md:text-[20px]">Call Us 24/7</p>
                            <p className="text-[#000000] text-lg md:text-[30px] font-semibold">+00 (47) 939 4883</p>
                        </div>
                    </div>
                </div>

                {/* Right — Form card */}
                <div className="bg-white rounded-2xl md:rounded-[30px] shadow-lg p-6 md:p-8 w-full md:max-w-sm flex-shrink-0">
                    <h3 className="text-2xl md:text-[35px] text-[#000000] text-center mb-6">Get A Free Quote</h3>

                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm md:text-[17px] font-medium text-[#000000] mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="enter email address"
                                className="w-full bg-[#f5f5f5] rounded-full px-4 py-2 md:py-3 text-sm text-[#454545] placeholder-[#aaa] outline-none focus:ring-2 focus:ring-[#7BBFEE]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm md:text-[17px] font-medium text-[#000000] mb-1">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="enter phone number"
                                className="w-full bg-[#f5f5f5] rounded-full px-4 py-2 md:py-3 text-sm text-[#454545] placeholder-[#aaa] outline-none focus:ring-2 focus:ring-[#7BBFEE]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm md:text-[17px] font-medium text-[#000000] mb-1">Message</label>
                            <textarea
                                placeholder="write your message"
                                rows={4}
                                className="w-full bg-[#f5f5f5] rounded-3xl px-4 py-2 md:py-3 text-sm text-[#454545] placeholder-[#aaa] outline-none focus:ring-2 focus:ring-[#7BBFEE] resize-none"
                            />
                        </div>

                        <button className="w-full bg-[#FFCF36] hover:brightness-95 text-[#000000] font-semibold text-sm md:text-base py-3 md:py-3.5 rounded-full transition-all duration-200">
                            Submit
                        </button>
                    </div>
                </div>

            </section>
        </div>
    )
}