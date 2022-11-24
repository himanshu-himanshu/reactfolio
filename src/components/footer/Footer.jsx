import React from "react";

import rocket from "../../assets/rocket.svg";
import coding from "../../assets/coding.svg";
import Heading from "../common/Heading";

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const Footer = () => {
  return (
    <div class="w-full h-screen bg-secondary">
      <div class="container max-w-6xl mx-auto flex flex-col lg:flex-row justify-center h-full w-full items-start lg:items-center space-y-12 lg:space-y-0">
        <Heading title="Footer" />
        <div class="flex flex-col justify-center max-w-xl mx-auto">
          <div class="w-full flex flex-col justify-center items-center p-4 space-y-8">
            <img src={coding} alt="" class="w-72 lg:w-96" />
            <h1 class="font-Sacramento text-xl md:text-2xl lg:text-4xl text-gray-500 border-b border-gray-400 pb-4">
              Maintained and designed by Himanshu.
            </h1>
            <p class="text-sm md:text-lg text-gray-400 tracking-wider font-Alegreya">
              &copy;Copyright & All rights reserved @ 2022
            </p>
            <a onClick={() => topFunction()} className="hover:cursor-pointer">
              <img src={rocket} alt="rocket image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
