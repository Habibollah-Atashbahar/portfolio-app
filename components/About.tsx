import Image from "next/image";
import React from "react";
import { assets, infoList, toolsData } from "../assets/assets";
import { motion } from "motion/react";

export type PropsType = {
  isDarkMode: boolean;
  // setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const About = ({ isDarkMode }: PropsType) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
      id="about"
      className="w-full px-[12%] py-10
    scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl font-Ovo"
      >
        About Me
      </motion.h2>

      <div
        className="flex w-full flex-col lg:flex-row items-center
      gap-20 my-20"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <div>
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mb-10 max-w-2xl font-Ovo"
          >
            I am an experienced Frontend Developer. I have a strong background
            in modern JavaScript frameworks and a keen eye for design like React
            and ReactNative and Next JS. This website serves as both my
            portfolio and my resume, this Website and its my Resume
          </motion.p>

          <motion.ul
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6
          max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400
              rounded-xl p-6 cursor-pointer hover:bg-lightHover
               hover:-translate-y-1 duration-500
                hover:shadow-black dark-border  hover-dark"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt="title"
                  className="w-6 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700s dark-text">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark-textg">
                  {description}
                </p>
              </li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="my-6 text-gray-700 font-Ovo dark-text"
          >
            Tools I Use
          </motion.h4>

          <motion.ul
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer
                hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
