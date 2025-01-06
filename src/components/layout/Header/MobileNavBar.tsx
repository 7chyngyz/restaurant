import React, { useState } from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { navlinks } from "@/constants/navlinks-constants";
import { useLanguageStore } from "@/store/useLanguageStore";

interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNavBar = ({ closeNav, showNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
    const [activeLanguage, setActiveLanguage] = useState<"EN" | "RU" | "KG">("EN");
    const { language, setLanguage } = useLanguageStore();

    const handleLanguageChange = (newLanguage: "en" | "ru" | "kg") => {
        setLanguage(newLanguage);
        setActiveLanguage(newLanguage.toUpperCase() as "EN" | "RU" | "KG");
    };



    const translate = (key: string) => {
        const translations: Record<"en" | "ru" | "kg", Record<string, string>> = {
            en: {
                restaurant: "Restaurant",
                interior: "Interior",
                aboutUs: "About Us",
                menu: "Menu",
                contact: "Contacts",
            },
            ru: {
                restaurant: "Ресторан",
                interior: "Интерьер",
                aboutUs: "О нас",
                menu: "Меню",
                contact: "Контакты",
            },
            kg: {
                restaurant: "Ресторант",
                interior: "Интерьер",
                aboutUs: "Биз жөнүндө",
                menu: "Меню",
                contact: "Байланыш",
            },
        };

        const currentLanguage = language as "en" | "ru" | "kg";
        return translations[currentLanguage]?.[key] || key;
    };

    return (
        <div>
            <div
                className={`fixed ${navOpen} transform transition-all duration-500
                    inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
            ></div>
            <div
                className={`text-white ${navOpen} transform transition-all duration-500 delay-300
                    fixed flex flex-col justify-start min-h-screen w-[80%] sm:w-[60%] bg-[#1B2026] z-[10000]`}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-600">
                    <Link href="/">
                        <h1 className="text-2xl font-silkSerif text-white">{translate("restaurant")}</h1>
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
                                {translate(navlink.label)}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center justify-start space-x-4 px-6 mt-6">
                    <button
                        className={`text-lg ${activeLanguage === "EN" ? "border-b-2 border-white" : ""}`}
                        onClick={() => handleLanguageChange("en")}
                    >
                        EN
                    </button>
                    <button
                        className={`text-lg ${activeLanguage === "RU" ? "border-b-2 border-white" : ""}`}
                        onClick={() => handleLanguageChange("ru")}
                    >
                        RU
                    </button>
                    <button
                        className={`text-lg ${activeLanguage === "KG" ? "border-b-2 border-white" : ""}`}
                        onClick={() => handleLanguageChange("kg")}
                    >
                        KG
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileNavBar;
