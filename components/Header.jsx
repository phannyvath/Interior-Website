"use client";
import ThemeToggler from "./ThemeToggler";
import React, { useEffect, useState } from "react";
//component
import Logo from "./Logo";
import Nav from "./Nav";
import Mobilenavigation from "./Mobilenavigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header
          ? " py-4 bg-tertiary shadow-lg dark:bg-accent"
          : " py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fff]"}`}
    >
      <div className=" container mx-auto">
        <div className=" flex items-center justify-between">
          {/* Logo Section */}
          <Logo />
          <div className=" flex items-center gap-x-6">
            {/* Nav Section */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center relative" // Added 'relative'
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 bottom-0 h-[2px] w-full bg-primary transition-all duration-300" // Changed top-full to bottom-0 and added w-full
            />

            {/* Theme Toggle */}
            <ThemeToggler />

            {/* Mobile Navigation */}
            <div className=" xl:hidden">
              <Mobilenavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
