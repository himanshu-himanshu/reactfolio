import React from "react";

const MobileHeading = ({ title }) => {
  return (
    <div className=" flex justify-center w-full text-gray-400 lg:hidden">
      <h1 className="text-4xl md:text-6xl font-Alegreya font-semibold tracking-wide border-b-4 border-lightGreen pb-4 ">
        {title}
      </h1>
    </div>
  );
};

export default MobileHeading;
