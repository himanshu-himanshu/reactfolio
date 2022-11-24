import React from "react";

import { motion } from "framer-motion";

const Button = ({ title }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="border-2 px-6 py-3 text-sm md:text-lg hover:bg-sky-500 hover:shadow-2xl border-sky-500 text-sky-500 hover:text-white"
    >
      {title}
    </motion.button>
  );
};

export default Button;
