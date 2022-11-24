import { motion } from "framer-motion";

const MobileMenu = ({ handleCloseMenu }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.2 }}
        className="w-full h-screen fixed top-0 left-0 bg-black hover:cursor-crosshair z-20 overflow-y-hidden"
        onClick={() => handleCloseMenu()}
      ></motion.div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: "100%" }}
        className="fixed h-screen w-full sm:w-1/3 bg-gray-900  top-0 right-0 sm:min-w-[500px] hover:cursor-default overflow-hidden z-20"
      >
        <div className="h-full w-full flex flex-col">
          <div className="uppercase text-gray-200 flex flex-col text-xl mt-[15vh]">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full h-full flex justify-end"
            >
              <a
                href="#"
                className="hover:bg-red-900 border-red-900 w-2/3 mobile-nav-link"
              >
                Home
              </a>
            </motion.div>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full flex justify-end"
            >
              <a
                href="#"
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
            >
              <a
                href="#"
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
            >
              <a
                href="#"
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
            >
              <a
                href="#"
                className="hover:bg-sky-700 border-sky-700 w-3/5 mobile-nav-link"
              >
                contact
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
