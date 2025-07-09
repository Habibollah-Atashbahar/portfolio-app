import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";
import Link from "next/link";
import { PropsType } from "./Navbar";
import { motion } from "motion/react";

const Footer = ({ isDarkMode, setIsDarkMode }: PropsType) => {
  return (
    <div className="mt-20">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
        className="text-center"
      >
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-36 mx-auto mb-2 rounded-2xl"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail"
            className="w-6"
          />
          makkoranprogrammingteam@gmail.com
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-center sm:flex items-center justify-between border-t 
      border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>&copy; 2025 MPT. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link
              href="https://github.com/Habibollah-Atashbahar"
              target="_blank"
            >
              Github
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/habibollah-atashbahar-bb67382a8/"
              target="_blank"
            >
              Linkedin
            </Link>
          </li>

          <li>
            <Link href="https://x.com/Habibollah_AB" target="_blank">
              X
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Footer;
