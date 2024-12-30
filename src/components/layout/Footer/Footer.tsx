"use client"
import { navlinks } from "@/constants/navlinks-constants";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#1B2026] text-white py-12">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex items-center md:items-start justify-between space-y-12 md:space-y-0 border-b">
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
                        <button className="text-sm text-white hover:text-[#EF272C] transition duration-300">En</button>
                        <button className="text-sm text-white hover:text-[#EF272C] transition duration-300">Ru</button>
                        <button className="text-sm text-white hover:text-[#EF272C] transition duration-300">Kg</button>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <p className="text-sm">© 2023 Motion Study LLC</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
