import React from "react";

import htmlImage from "../../assets/html.svg";
import cssImage from "../../assets/css.svg";
import jsImage from "../../assets/javascript.svg";
import reactImage from "../../assets/react.svg";
import reduxImage from "../../assets/redux.svg";
import tailwindImage from "../../assets/tailwind.svg";
import npmImage from "../../assets/npm.svg";
import githubImage from "../../assets/github.svg";

const Work = () => {
  return (
    <div className="w-full h-screen bg-primary">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row justify-center h-full w-full items-start lg:items-center space-y-12 lg:space-y-0">
        <div className="hidden lg:flex justify-start w-1/3 text-gray-700">
          <h1 className="text-8xl font-bold tracking-widest about-text">
            Work
          </h1>
        </div>
        <div className=" flex justify-center w-full text-gray-700 lg:hidden">
          <h1 className="text-6xl md:text-7xl font-bold tracking-wide border-b-4 border-sky-500 pb-4">
            Work
          </h1>
        </div>
        <div class="flex flex-col justify-center w-full">
          <div class="w-full flex justify-center">
            <h1 class="text-lg text-gray-600 p-2">
              Below are the some technologies I'm familiar with
            </h1>
          </div>
          <div class="w-full grid grid-cols-2 md:grid-cols-3 text-gray-400 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 text-center">
            <div class="shadow-lg duartion-150 p-8">
              <img src={htmlImage} alt="HTML" class="w-20 mx-auto" />
              <p class="my-4 text-lg font-bold tracking-wider">HTML</p>
            </div>
            <div class="shadow-lg duartion-150 p-8">
              <img src={cssImage} alt="" class="w-20 mx-auto" />
              <p class="my-4 text-lg font-bold tracking-wider">CSS</p>
            </div>
            <div class="shadow-lg duartion-150 p-8">
              <img src={jsImage} alt="" class="w-20 mx-auto" />
              <p class="my-4 text-lg font-bold tracking-wider">JAVASCRIPT</p>
            </div>
            <div class="shadow-lg duartion-150 p-8">
              <img src={reactImage} alt="" class="w-20 mx-auto" />
              <p class="my-4 text-lg font-bold tracking-wider">REACT</p>
            </div>
            <div class="shadow-lg duartion-150 p-8">
              <img src={reduxImage} alt="" class="w-20 mx-auto" />
              <p class="my-4 text-lg font-bold tracking-wider">REDUX</p>
            </div>
            <div class="shadow-lg duartion-150 p-8">
              <img src={npmImage} alt="" class="w-20 mx-auto" />
              <p class="my-4 text-lg font-bold tracking-wider">NPM</p>
            </div>
            <div class="shadow-lg duartion-150 p-8">
              <img src={githubImage} alt="" class="w-20 mx-auto" />
              <p class="my-4 text-lg font-bold tracking-wider">GITHUB</p>
            </div>
            <div class="shadow-lg duartion-150 p-8">
              <img src={tailwindImage} alt="" class="w-20 mx-auto" />
              <p class="my-4 text-lg font-bold tracking-wider">TAILWIND</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
