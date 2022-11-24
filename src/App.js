import React, { useState } from "react";

// import { motion, AnimatePresence } from "framer-motion";

import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Author from "./components/common/Author";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import Hamburger from "./components/common/Hamburger";
import Work from "./components/work/Work";
import MobileMenu from "./components/navbar/MobileMenu";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
    //document.body.classList.add("fixed");
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
    //document.body.classList.remove("fixed");
  };

  return (
    <>
      {/* <Navbar /> */}
      <Hamburger
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
        openMenu={openMenu}
      />
      {openMenu && <MobileMenu handleCloseMenu={handleCloseMenu} />}
      {!openMenu && <Author />}
      <Banner />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
