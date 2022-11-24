import React from "react";

import dots from "../../assets/dots.png";
import profile from "../../assets/pic.jpg";

const About = () => {
  return (
    <div className="w-full h-screen bg-primary">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row justify-center h-full w-full items-start lg:items-center space-y-12 lg:space-y-0">
        <div className="hidden lg:flex justify-start w-1/3 text-gray-700">
          <h1 className="text-8xl font-bold tracking-widest about-text">
            About
          </h1>
        </div>
        <div className=" flex justify-center w-full text-gray-700 lg:hidden">
          <h1 className="text-6xl md:text-7xl font-bold tracking-wide border-b-4 border-sky-500 pb-4">
            About
          </h1>
        </div>

        <div class="flex justify-between w-full items-center text-center flex-col space-y-12 px-6 text-gray-400">
          <div class="relative">
            <img src={profile} alt="" class="h-40 md:h-44 rounded-full" />
            <div class="absolute h-full w-full -top-1 -left-1">
              <img src={dots} alt="" class="h-20 opacity-20" />
            </div>
            <div class="absolute h-full w-full bg-black top-0 rounded-full opacity-20"></div>
          </div>
          <h1 class="text-center text-lg md:text-xl max-w-xl lg:max-w-2xl">
            Hi there, myself Himanshu. I am a
            <span class="text-sky-500 font-bold"> Web developer</span> ,
            front-end developer to precise. I have a Bachelor's in Computer
            Science and currently enrolled in Mobile App development program in
            Canada. Making interactive, beautiful and simple websites is my
            farmost concern right now, however, I also want to explore the world
            of mobile apps.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
