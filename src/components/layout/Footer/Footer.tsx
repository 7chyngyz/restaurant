"use client"
import { navlinks } from "@/constants/navlinks-constants";
import Link from "next/link";
import { FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#000] text-white py-12">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex items-center md:items-start justify-between space-y-12 md:space-y-0">
                    <Link href="/">
                        <h1 className="text-4xl font-bold font-silkSerif text-center md:text-left mb-4 md:mb-0">
                            Restaurant
                        </h1>
                    </Link>
                    <nav className="md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 hidden md:flex">
                        {navlinks.map((navlink) => (
                            <Link key={navlink.id} href={navlink.url}>
                                <p className="text-lg font-spartan hover:text-[#EF272C] transition duration-300">
                                    {navlink.label}
                                </p>
                            </Link>
                        ))}
                    </nav>
                    <div className="flex space-x-6 justify-center md:justify-start">
                        <button className="text-[36px] text-white hover:text-[#EF272C] transition duration-300">
                            <FaTelegram />
                        </button>
                        <button className="text-[36px] text-white hover:text-[#EF272C] transition duration-300">
                            <FaInstagram />
                        </button>
                    </div>
                </div>
                <hr className="mt-5" />
                <div className="flex justify-center mt-12">
                    <p className="text-sm">© 2023 Motion Study LLC</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
