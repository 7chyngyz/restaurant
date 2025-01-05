"use client";
import { navlinks } from "@/constants/navlinks-constants";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiSearch } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/store/useLanguageStore";

interface Props {
    openNav: () => void;
}

const Header = ({ openNav }: Props) => {
    const router = useRouter();
    const { language, setLanguage } = useLanguageStore();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as "en" | "ru" | "kg";
        setLanguage(newLocale);
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

        return translations[language]?.[key] || key;
    };



    return (
        <header className="fixed bg-[#1B2026] h-[12vh] w-full transition-all duration-500 z-30 top-0">
            <div className="container mx-auto h-full px-4 sm:px-8">
                <div className="flex items-center justify-between h-full">
                    <Link href="/">
                        <h1 className="text-3xl font-silkSerif text-white">{translate("restaurant")}</h1>
                    </Link>
                    <nav className="hidden ml-28 lg:flex items-center space-x-20">
                        {navlinks.map((navlink) => (
                            <Link key={navlink.id} href={navlink.url}>
                                <p className="text-white text-base font-spartan hover:text-[#EF272C] transition">
                                    {translate(navlink.label)}
                                </p>
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                        <div className="relative hidden lg:block">
                            <input
                                onClick={() => router.push("/menu")}
                                type="text"
                                placeholder={translate("menu")}
                                className="w-[150px] sm:w-[187px] h-[37px] bg-[#EF272C] outline-none rounded-lg pl-10 text-sm text-white placeholder-white"
                            />
                            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                        </div>
                        <select
                            value={language}
                            onChange={(e) => handleLanguageChange(e)}
                            className="hidden lg:block bg-transparent text-sm text-white border-none focus:outline-none"
                        >
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                            <option value="kg">KG</option>
                        </select>

                        <HiBars3BottomRight
                            onClick={openNav}
                            className="w-8 h-8 cursor-pointer text-white lg:hidden"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
