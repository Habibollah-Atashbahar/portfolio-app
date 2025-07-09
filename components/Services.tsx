import React from "react";
import { assets, serviceData } from "../assets/assets";
import Image from "next/image";
import Link from "next/link";
import { PropsType } from "./Navbar";
import { motion, scale } from "motion/react";

const Services = ({ isDarkMode, setIsDarkMode }: PropsType) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      id="services"
      className="w-full px-[12%] py-10
      scroll-mt-20"
    >
      <motion.h4
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I am habibollah i am from chabahar, IRAN with 2 years of experience in
        develop frontend websites and mobile apps.
      </motion.p>

      <div className="gap-6 grid-auto">
        {serviceData.map(({ title, icon, description, link }, index) => (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              type: "spring",
              stiffness: 100,
            }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12
            hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover-dark"
          >
            <Image src={icon} alt="title" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark-text">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark-textg">
              {description}
            </p>

            <Link href={link} className="flex items-center gap-2 text-sm mt-5">
              Read More
              <Image src={assets.right_arrow} className="w-4" alt="arrow" />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
