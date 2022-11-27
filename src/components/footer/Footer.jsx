import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

import footer from "../../assets/footer.svg";
import Heading from "../common/Heading";

const Footer = () => {
  return (
    <div class="w-full h-screen bg-secondary">
      <div class="container max-w-6xl mx-auto flex flex-col lg:flex-row justify-center h-full w-full items-start lg:items-center space-y-12 lg:space-y-0">
        <Heading title="Footer" />
        <div class="flex flex-col justify-center max-w-xl mx-auto">
          <div class="w-full flex flex-col justify-center items-center p-4 space-y-8">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              src={footer}
              alt=""
              className="w-72 lg:w-88 bounce-1"
            />
            <h1 class="font-Sacramento text-xl md:text-2xl lg:text-4xl text-gray-500 border-b border-gray-400 pb-4">
              Maintained and designed by Himanshu.
            </h1>
            <p class="text-sm md:text-lg text-gray-400 tracking-wider font-Alegreya">
              &copy;Copyright & All rights reserved @ 2022
            </p>
            <div className="flex flex-row items-center p-2 space-x-4">
              <a href="https://github.com/himanshu-himanshu" target="_blank">
                <FaGithub className="text-4xl hover:text-lightGreen duration-200 text-gray-700" />
              </a>
              <a href="#" target="_blank">
                <FaInstagramSquare className="text-4xl hover:text-lightGreen duration-200 text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/himanshu-154569160/"
                target="_blank"
              >
                <FaLinkedin className="text-4xl hover:text-lightGreen duration-200 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
