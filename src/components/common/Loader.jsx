import React from "react";
import { motion } from "framer-motion";
import { GiSpinningRibbons } from "react-icons/gi";

const Loader = () => {
  return (
    <>
      <motion.div className="fixed w-full h-screen z-[99] flex justify-center items-center bg-secondary">
        <GiSpinningRibbons className="text-5xl animate-spin text-gray-200" />
      </motion.div>
    </>
  );
};

export default Loader;
