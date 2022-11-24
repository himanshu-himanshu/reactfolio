import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-primary">
      <div className="container max-w-5xl mx-auto flex flex-col justify-center h-full px-8 space-y-6">
        <p className="text-pink-500 text-lg tracking-widest">Hey there, I'm</p>
        <p className="text-gray-100 text-6xl lg:text-7xl tracking-wider font-Alegreya">
          Himanshu .
        </p>
        <p className="text-gray-300 text-6xl lg:text-7xl tracking-wide font-bold">
          Front-end Developer
        </p>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl py-4 mb-8">
          I have been passionate about Web Development for a long time now, from
          learning how web works to coding some simple yet beautiful websites
          that makes me smile.
        </p>
        <div className="flex items-center z-10 relative">
          <a href="#projects">
            <button className="border-2 px-6 py-3 text-lg hover:bg-sky-600 hover:border-sky-600 hover:-translate-y-1 duration-150 hover:shadow-2xl border-sky-500 text-sky-500 hover:text-white">
              Resume &darr;
            </button>
          </a>
          <a href="#about" class="icon-scroll hidden lg:block -z-0 left-0" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
