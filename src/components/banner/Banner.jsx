import React from "react";
import { motion } from "framer-motion";

import Button from "../common/Button";

const Banner = () => {
  return (
    <motion.div className="w-full h-screen bg-secondary -z-10">
      <motion.div className="container max-w-6xl mx-auto flex flex-col justify-center h-full px-8 space-y-2 lg:space-y-6">
        <p className="text-lightGreen text-lg tracking-widest">
          Hey there, I'm
        </p>

        <motion.p
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100,
            duration: 0.4,
            delay: 0.5,
          }}
          className="text-gray-100 text-4xl md:text-6xl lg:text-7xl tracking-wider font-Alegreya"
        >
          Himanshu.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 text-3xl md:text-5xl lg:text-7xl tracking-wide font-bold"
        >
          Front-end Developer{" "}
        </motion.p>
        <div className="flex flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-500 text-sm sm:text-lg md:text-xl max-w-3xl md:max-w-4xl py-4 mb-4 lg:w-2/3"
          >
            I have been passionate about Web Development for a long time now,
            from learning how web works to coding some simple yet beautiful
            websites that makes me smile.
          </motion.p>
          <div className="hidden lg:flex justify-end w-1/3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{
                duration: 1,
                delay: 0.5,
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
              }}
              className="relative border border-gray-600 p-10"
            >
              <motion.div
                initial={{ y: "-10%", opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  type: "spring",
                  damping: 10,
                  mass: 0.75,
                  stiffness: 100,
                }}
                className="border border-gray-600 w-full h-full absolute -top-2 -left-2"
              ></motion.div>
              <motion.div
                initial={{ y: "-20%", opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{
                  duration: 0.5,
                  delay: 1,
                  type: "spring",
                  damping: 10,
                  mass: 0.75,
                  stiffness: 100,
                }}
                className="border border-gray-600 w-full h-full absolute -top-4 -left-4"
              ></motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center z-10 relative">
          <a href="#projects">
            <Button title="Resume &darr;" />
          </a>
          <a href="#about" class="icon-scroll hidden lg:block -z-0 left-0" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
