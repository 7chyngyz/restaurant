"use client";
import { navlinks } from "@/constants/navlinks-constants";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiSearch } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  openNav: () => void;
}

const Header = ({ openNav }: Props) => {
  const [value, setValue] = useState<string>("");
  const router = useRouter();
  return (
    <header
      className={
        "fixed bg-[#1B2026] h-[12vh] w-full transition-all duration-500 z-30 top-0"
      }
    >
      <div className="container mx-auto h-full px-4 sm:px-8">
        <div className="flex items-center justify-between h-full">
          <Link href="/">
            <h1 className="text-3xl font-silkSerif text-white">Restaurant</h1>
          </Link>
          <nav className="hidden ml-28 lg:flex items-center space-x-20">
            {navlinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="text-white text-base font-spartan hover:text-[#EF272C] transition">
                  {navlink.label}
                </p>
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative hidden lg:block">
              <input
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    router.push(`/menu?search=${value}`);
                  }
                }}
                type="text"
                placeholder="Search"
                className="w-[150px] sm:w-[187px] h-[37px] bg-[#EF272C] outline-none rounded-lg pl-10 text-sm text-white placeholder-white"
              />
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
            </div>
            <button className="hidden lg:block text-sm text-white hover:text-[#EF272C] transition">
              En
            </button>
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
