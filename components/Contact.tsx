"use client";
import React, { useState } from "react";
import { assets } from "../assets/assets";
import Image from "next/image";
import { PropsType } from "./Navbar";
import { motion } from "motion/react";

const Contact = ({ isDarkMode, setIsDarkMode }: PropsType) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "269c07ea-0937-4ce5-9142-02dff3f240f9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10
      scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]
      dark-bgnone'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Contact With Me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I'd love to hearI'd love to hear from you! Whether you have a question,
        a project idea, or just want to connect, feel free to reach out.
      </motion.p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
          className="grid grid-auto gap-6 mt-10 mb-8"
        >
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex p-3 outline-none border-[0.5px] border-gray-400
          rounded-md bg-white dark-hover dark-border"
            name="name"
          />

          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex p-3 outline-none border-[0.5px] border-gray-400
          rounded-md bg-white dark-hover dark-border"
            name="email"
          />
        </motion.div>

        <motion.textarea
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400
          rounded-md bg-white mb-6 dark-hover dark-border"
          name="message"
        ></motion.textarea>

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
        text-white rounded-full mx-auto dark-transparent dark-border hover-dark hover:max-w-max hover:duration-200"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="right" className="w-4" />
        </motion.button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
