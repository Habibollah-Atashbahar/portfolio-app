"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import Link from "next/link";

export type PropsType = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isDarkMode, setIsDarkMode }: PropsType) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const sideMenuRef = useRef<HTMLUListElement>(null);
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] 
      dark-hidden"
      >
        <Image src={assets.header_bg_color} alt="header" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
      flex items-center justify-between z-50 ${
        isScroll
          ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme shadow-white/20"
          : ""
      }`}
      >
        <Link href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14 rounded-2xl"
          />
        </Link>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8
         rounded-full px-12 py-3 ${
           isScroll ? "" : "bg-white/50 shadow-sm dark-border dark-transparent "
         }  `}
        >
          <li>
            <Link href="#top" className="font-Ovo">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="font-Ovo">
              About me
            </Link>
          </li>
          <li>
            <Link href="#services" className="font-Ovo">
              Services
            </Link>
          </li>
          <li>
            <Link href="#work" className="font-Ovo">
              My Work
            </Link>
          </li>
          <li>
            <Link href="#contact" className="font-Ovo">
              Contact me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon"
              className="w-6 cursor-pointer"
            />
          </button>

          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border
             border-gray-500 rounded-full ml-4 font-Ovo dark-border"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow"
              className="w-3"
            />
          </Link>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6"
            />
          </button>
        </div>
        {/* Mobile Menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark-hover text-center"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <Link href="#top" className="font-Ovo" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="font-Ovo" onClick={closeMenu}>
              About me
            </Link>
          </li>
          <li>
            <Link href="#services" className="font-Ovo" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#work" className="font-Ovo" onClick={closeMenu}>
              My Work
            </Link>
          </li>
          <li>
            <Link href="#contact" className="font-Ovo" onClick={closeMenu}>
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
