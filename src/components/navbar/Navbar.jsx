import React, { useState, useEffect } from "react";
import { CgMenuRightAlt } from "react-icons/cg";

import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setOpenMenu(false);
      }
      if (openMenu) {
        document.body.classList.add("fixed");
      }
      if (!openMenu) {
        document.body.classList.remove("fixed");
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);

  const handleOpenMenu = () => {
    setOpenMenu(true);
    document.body.classList.add("fixed");
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
    document.body.classList.remove("fixed");
  };

  return (
    <div
      className={`w-full flex flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-4 h-[10vh] fixed z-40 bg-primary text-gray-200 duration-200 shadow-md`}
    >
      <div className="hover:cursor-pointer p-2">
        <a href="#" className="font-Sacramento text-4xl text-sky-400">
          Himanshu.
        </a>
      </div>

      <div className="uppercase hidden lg:flex flex-row space-x-6 lg:space-x-14 text-md tracking-wider font-Alegreya">
        <a href="#" className="nav-link">
          about
        </a>
        <a href="#" className="nav-link">
          skills
        </a>
        <a href="#" className="nav-link">
          projects
        </a>
        <a href="#" className="nav-link">
          contact
        </a>
      </div>

      <CgMenuRightAlt
        onClick={() => handleOpenMenu()}
        className="lg:hidden text-3xl hover:cursor-pointer"
      />

      {openMenu && <MobileMenu handleCloseMenu={handleCloseMenu} />}
    </div>
  );
};

export default Navbar;
