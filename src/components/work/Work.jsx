import React from "react";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

import Heading from "../common/Heading";
import MobileHeading from "../common/MobileHeading";
import Wrapper from "../common/Wrapper";
import weather from "../../assets/Chillyfy.png";
import ecomm from "../../assets/next-ecomm.png";

const Work = () => {
  return (
    <section id="work">
      <div className="w-full h-full bg-secondary py-24">
        <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row justify-center h-full w-full items-start lg:items-center space-y-12 lg:space-y-0 pb-12 md:pb-0">
          <Heading title="Work" />
          <MobileHeading title="Work" />
          <div class="flex flex-col justify-center w-full px-2 py-4 space-y-12">
            <div class="w-full flex flex-col xl:flex-row-reverse items-center justify-between">
              <img
                src={weather}
                className="h-60 md:h-80 w-90 shadow-xl lg:hover:scale-125 duration-300 border-2"
              />
              <div className="px-2 mr-4 py-4 max-w-xl text-center">
                <h1 class="text-2xl md:text-3xl lg:text-4xl text-gray-300 p-2 font-Alegreya mb-4">
                  Chillyfy
                </h1>
                <p className="text-gray-400 text-justify">
                  A weather app made using React, Tailwind for the UI and
                  Accuweather API in the backend. It shows current weather
                  conditions for the city and future forecasts upto 5 days.
                </p>
                <div className="flex flex-row items-center justify-center p-2 space-x-4 mt-4">
                  <a
                    href="https://github.com/himanshu-himanshu/react-weather-app"
                    target="_blank"
                  >
                    <FaGithub className="text-4xl hover:text-lightGreen duration-200 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full flex flex-col xl:flex-row items-center justify-between">
              <img
                src={ecomm}
                className="h-60 md:h-80 w-90 shadow-xl lg:hover:scale-125 duration-300 border-2"
              />
              <div className="px-2 ml-4 py-4 max-w-xl text-center">
                <h1 class="text-2xl md:text-3xl lg:text-4xl text-gray-300 p-2 font-Alegreya mb-4">
                  Coming soon!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
