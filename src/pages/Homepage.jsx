import React, { useState, useEffect } from "react";

import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Author from "../components/common/Author";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Skills from "../components/skills/Skills";
import Hamburger from "../components/common/Hamburger";
import Work from "../components/work/Work";
import MobileMenu from "../components/navbar/MobileMenu";

const Homepage = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const handleOpenMenu = () => {
    setOpenMenu(true);
    //document.body.classList.add("overflow:hidden");
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
    //document.body.classList.remove("fixed");
  };

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
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
};

export default Homepage;
