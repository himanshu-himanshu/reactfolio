import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="hidden lg:flex justify-start w-1/3 text-lightGreen">
      <h1 className="text-8xl font-bold tracking-widest about-text font-Alegreya">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
