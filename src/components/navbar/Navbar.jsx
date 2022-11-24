// import React, { useState, useEffect } from "react";
// import { CgMenuRightAlt } from "react-icons/cg";
// import { motion, AnimatePresence } from "framer-motion";

// import MobileMenu from "./MobileMenu";
// import logo from "../../assets/logo.png";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);

//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth > 1024) {
//         setOpenMenu(false);
//       }
//       if (openMenu) {
//         document.body.classList.add("fixed");
//       }
//       if (!openMenu) {
//         document.body.classList.remove("fixed");
//       }
//     }

//     window.addEventListener("resize", handleResize);
//   }, []);

//   const handleOpenMenu = () => {
//     setOpenMenu(true);
//     //document.body.classList.add("fixed");
//   };
//   const handleCloseMenu = () => {
//     setOpenMenu(false);
//     //document.body.classList.remove("fixed");
//   };

//   return (
//     <motion.div
//       initial={{ y: "-100%" }}
//       animate={{ y: 0 }}
//       transition={{
//         duration: 0.4,
//       }}
//       className={`w-full flex flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-4 h-[10vh] fixed z-40 bg-transparent text-gray-200 duration-200 opacity-100 top-0`}
//     >
//       <div className="hover:cursor-pointer p-2">
//         <a href="#" className="font-Sacramento text-4xl text-lightGreen">
//           Himanshu.
//         </a>
//         {/* <img src={logo} className="bg-transparent" /> */}
//       </div>
//       {/*
//       <div className="uppercase hidden lg:flex flex-row space-x-6 lg:space-x-14 text-md tracking-wider font-Alegreya">
//         <motion.a
//           initial={{ y: "-100%" }}
//           animate={{ y: 0 }}
//           transition={{
//             duration: 0.4,
//             delay: 0.2,
//           }}
//           href="#about"
//           className="nav-link"
//         >
//           about
//         </motion.a>
//         <motion.a
//           initial={{ y: "-100%" }}
//           animate={{ y: 0 }}
//           transition={{
//             duration: 0.4,
//             delay: 0.3,
//           }}
//           href="#skills"
//           className="nav-link"
//         >
//           skills
//         </motion.a>
//         <motion.a
//           initial={{ y: "-100%" }}
//           animate={{ y: 0 }}
//           transition={{
//             duration: 0.4,
//             delay: 0.4,
//           }}
//           href="#work"
//           className="nav-link"
//         >
//           projects
//         </motion.a>
//         <motion.a
//           initial={{ y: "-100%" }}
//           animate={{ y: 0 }}
//           transition={{
//             duration: 0.4,
//             delay: 0.5,
//           }}
//           href="#contact"
//           className="nav-link"
//         >
//           contact
//         </motion.a>
//       </div> */}

//       <CgMenuRightAlt
//         onClick={() => handleOpenMenu()}
//         className="text-3xl hover:cursor-pointer"
//       />

//       {openMenu && (
//         <MobileMenu handleCloseMenu={handleCloseMenu} openMenu={openMenu} />
//       )}
//     </motion.div>
//   );
// };

// export default Navbar;
