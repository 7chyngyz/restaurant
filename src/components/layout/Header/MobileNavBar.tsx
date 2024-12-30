import React, { useState } from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { navlinks } from "@/constants/navlinks-constants";

interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNavBar = ({ closeNav, showNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
    const [activeLanguages, setActiveLanguages] = useState("")

    const handleClick = (language: string) => {
        setActiveLanguages(language)
    }

    return (
        <div>
            <div
                className={`fixed ${navOpen} transform transition-all duration-500
         inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
            ></div>
            <div
                className={`text-white ${navOpen} transform transition-all duration-500 delay-300
         fixed flex flex-col justify-start h-full
        w-[80%] sm:w-[60%] bg-[#1B2026] z-[10000]`}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-600">
                    <Link href="/">
                        <h1 className="text-2xl font-silkSerif">Restaurant</h1>
                    </Link>
                    <CgClose
                        onClick={closeNav}
                        className="sm:w-8 w-6 h-6 text-white cursor-pointer"
                    />
                </div>
                <div className="flex flex-col space-y-6 mt-16 px-6">
                    {navlinks.map((navlink) => (
                        <Link key={navlink.id} href={navlink.url}>
                            <p className="text-xl hover:text-[#EF272C] transition">
                                {navlink.label}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center justify-start space-x-4 px-6 mt-6">
                    <button
                        className={`text-lg text-white ${activeLanguages === "EN" ? "border-b-2 border-white" : ""}`}
                        onClick={() => handleClick("EN")}
                    >
                        EN
                    </button>
                    <button
                        className={`text-lg text-white transition ${activeLanguages === "RU" ? "border-b-2 border-white text-white" : ""}`}
                        onClick={() => handleClick("RU")}
                    >
                        RU
                    </button>
                    <button
                        className={`text-lg text-white transition ${activeLanguages === "KG" ? "border-b-2 border-white" : ""}`}
                        onClick={() => handleClick("KG")}
                    >
                        KG
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileNavBar;
