import React from "react";
import { motion } from "framer-motion";

import Button from "../common/Button";

const Banner = () => {
  return (
    <motion.div className="w-full h-screen bg-secondary -z-10">
      <motion.div className="container max-w-5xl mx-auto flex flex-col justify-center h-full px-8 space-y-2 lg:space-y-6">
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
          className="text-gray-100 text-4xl md:text-5xl lg:text-7xl tracking-wider font-Alegreya"
        >
          Himanshu.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 text-3xl md:text-4xl lg:text-7xl tracking-wide font-bold"
        >
          Front-end Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-500 text-sm sm:text-lg md:text-xl max-w-2xl py-4 mb-8"
        >
          I have been passionate about Web Development for a long time now, from
          learning how web works to coding some simple yet beautiful websites
          that makes me smile.
        </motion.p>
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
