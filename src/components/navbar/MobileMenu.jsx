import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const MobileMenu = ({ handleCloseMenu }) => {
  return (
    <>
      {/* <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
        exit={{ x: "100%" }}
        className="w-full h-screen fixed top-0 left-0 bg-green-500 hover:cursor-crosshair z-20 overflow-y-hidden"
        onClick={() => handleCloseMenu()}
      ></motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        exit={{ x: "100%" }}
        className="w-full h-screen fixed top-0 left-0 bg-yellow-500 hover:cursor-crosshair z-20 overflow-y-hidden"
        onClick={() => handleCloseMenu()}
      ></motion.div> */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: "100%" }}
        className="w-full h-screen fixed top-0 left-0 bg-hero bg-cover bg-center hover:cursor-crosshair z-20 overflow-y-hidden"
        onClick={() => handleCloseMenu()}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className="hidden text-5xl text-gray-400 font-Sacramento lg:flex items-center justify-start h-full p-10"
        >
          "Everything has beauty, but not everyone sees it."
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        exit={{ x: "100%" }}
        className="fixed h-screen w-full sm:w-1/3 bg-transparent  top-0 right-0 sm:min-w-[500px] hover:cursor-default overflow-hidden z-20"
      >
        <div className="h-full w-full flex flex-col">
          <div className="uppercase text-gray-200 flex flex-col text-xl mt-[15vh]">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex justify-end"
            >
              <a
                href="#about"
                onClick={() => handleCloseMenu()}
                className="hover:bg-blue-900 border-blue-900 w-2/5 mobile-nav-link"
              >
                about
              </a>
            </motion.div>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full h-full flex justify-end"
              onClick={() => handleCloseMenu()}
            >
              <a
                href="#skills"
                className="hover:bg-green-900 border-green-900 w-3/4 mobile-nav-link"
              >
                skills
              </a>
            </motion.div>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full h-full flex justify-end"
              onClick={() => handleCloseMenu()}
            >
              <a
                href="#work"
                className="hover:bg-yellow-900 border-yellow-900 w-2/4 mobile-nav-link"
              >
                projects
              </a>
            </motion.div>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full h-full flex justify-end"
              onClick={() => handleCloseMenu()}
            >
              <a
                href="#contact"
                className="hover:bg-sky-700 border-sky-700 w-3/5 mobile-nav-link"
              >
                contact
              </a>
            </motion.div>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full h-full flex flex-row items-center p-10 space-x-4 justify-end"
            >
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
