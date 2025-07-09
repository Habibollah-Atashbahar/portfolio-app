import React from "react";
import { assets, workData } from "../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

export type PropsType = {
  isDarkMode: boolean;
  // setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Work = ({ isDarkMode }: PropsType) => {
  return (
    <div
      id="work"
      className="w-full px-[12%] py-10
      scroll-mt-20"
    >
      <motion.h4
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl font-Ovo"
      >
        My Last Work
      </motion.h2>

      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development portfolio! Explore some of my recent
        projects below to see my skills and experience in action.
      </motion.p>

      <div className="grid grid-auto my-10 gap-5 dark-black">
        {workData.map((project, index) => (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg
             relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white w-10/12  rounded-md absolute bottom-5 left-1/2
             -translate-x-1/2 py-3 px-5 flex items-center justify-between
             duration-500 group-hover:bottom-7"
            >
              <div>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="font-semibold"
                >
                  {project.title}
                </motion.h2>

                <motion.p className="text-sm text-gray-700">
                  {project.description}
                </motion.p>
              </div>

              <div
                className="border rounded-full border-black w-9
              aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
            group-hover:bg-lime-300 transition"
              >
                <Image src={assets.send_icon} alt="send" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        href={"/"}
        className="w-max flex items-center justify-center gap-2 
      text-gray-700 border-[0.5px] border-gray-700 rounded-full
      py-3 px-10 mx-auto
      my-20 hover:duration-200 dark-text dark-border hover-dark hover:max-w-max"
      >
        Show More
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right-arrow "
          className="w-4"
        />
      </motion.a>
    </div>
  );
};

export default Work;
