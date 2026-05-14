import React from "react";

const footerLinks = [
    {
        title: "About Ridge",
        links: ["About Us", "Meet The Team", "Testimonials"],
    },
    {
        title: "Explore Services",
        links: ["Roof Fitting", "Roof Replacement", "Roof Installation"],
    },
    {
        title: "Contact",
        links: ["Contact Us", "Appointment"],
    },
    {
        title: "Resources",
        links: ["Blog", "Blog Details", "License"],
    },
];

const SocialIcon = ({ children }) => (
    <a
        href="#"
        className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#FFCF36] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
    >
        {children}
    </a>
);

export default function Footer() {
    return (
        <footer className="bg-stone-100 px-4 md:px-8 pt-8 md:pt-14 pb-8">
            <hr className="border-stone-300 mb-8 md:mb-12" />

            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-14">
                {footerLinks.map(({ title, links }) => (
                    <div key={title} className="min-w-0">
                        {/* Main text → black */}
                        <p className="font-semibold text-black mb-4 text-sm md:text-base">
                            {title}
                        </p>

                        <ul className="flex flex-col gap-2 md:gap-3">
                            {links.map((link) => (
                                <li
                                    key={link}
                                    /* Sub text → #454545 */
                                    className="text-xs md:text-sm text-[#454545] font-light hover:text-black underline-offset-2 hover:underline transition-colors break-words"
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-3 mb-8 md:mb-10 flex-wrap">
                <SocialIcon>
                    {/* Facebook */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </SocialIcon>
                <SocialIcon>
                    {/* Instagram */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" className="fill-stone-100 dark:fill-stone-800" /><circle cx="17.5" cy="6.5" r="1" className="fill-stone-100 dark:fill-stone-800" /></svg>
                </SocialIcon>
                <SocialIcon>
                    {/* X */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </SocialIcon>
                <SocialIcon>
                    {/* LinkedIn */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v2a6 6 0 0 1 2-2zm-9 1H3v12h4V9zM5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
                </SocialIcon>
            </div>

            <hr className="border-stone-300 mb-4 md:mb-6" />

            <p className="text-center text-stone-400 text-xs font-light tracking-wide">
                Copyright &copy; 2026 Ridge. All Rights Reserved.
            </p>
        </footer>
    );
}