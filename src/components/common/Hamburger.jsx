import React from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

const Hamburger = ({ handleOpenMenu, handleCloseMenu, openMenu }) => {
  return (
    <>
      {!openMenu && (
        <CgMenuRightAlt
          onClick={() => handleOpenMenu()}
          className="text-4xl md:text-5xl hover:cursor-pointer bg-lightGreen fixed top-10 right-10 z-40 rounded-full p-2"
        />
      )}
      {openMenu && (
        <CgClose
          onClick={() => handleCloseMenu()}
          className="text-4xl md:text-5xl hover:cursor-pointer bg-lightGreen fixed top-10 right-10 z-40 rounded-full p-2"
        />
      )}
    </>
  );
};

export default Hamburger;
