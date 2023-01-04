import React from "react";
import { motion } from "framer-motion";

import Button from "../common/Button";
import {
  bannerNameVariant,
  recOuterDiv,
  recMidDiv,
  recInnerDiv,
} from "../../utils/motion";
import { bannerText } from "../../constants";

const Banner = () => {
  return (
    <motion.div className="w-full h-screen bg-secondary -z-10">
      <motion.div className="container max-w-6xl mx-auto flex flex-col justify-center h-full px-8 space-y-2 lg:space-y-6">
        {/* <p className="text-lightGreen text-lg tracking-widest">
          Hey there, I'm
        </p> */}

        <motion.p
          variants={bannerNameVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-100 text-4xl md:text-6xl lg:text-7xl tracking-wider font-Alegreya"
        >
          <span className="bg-gray-800">Hi</span>
          <span>manshu.</span>
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
            {bannerText}
          </motion.p>
          <div className="hidden lg:flex justify-end w-1/3">
            <motion.div
              variants={recOuterDiv}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative border border-gray-600 p-10"
            >
              <motion.div
                variants={recMidDiv}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="border border-gray-600 w-full h-full absolute -top-2 -left-2"
              ></motion.div>
              <motion.div
                variants={recInnerDiv}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="border border-gray-600 w-full h-full absolute -top-4 -left-4"
              ></motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center z-10 relative">
          <a
            href="https://drive.google.com/file/d/1giB-sXEzc8QJ53I32C7oBQMzwEX8Ufva/view?usp=share_link"
            download
            target="_blank"
          >
            <Button title="Resume &rarr;" />
          </a>
          <a href="#about" class="icon-scroll hidden lg:block -z-0 left-0" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
