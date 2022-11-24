import React from "react";

import htmlImage from "../../assets/html.svg";
import cssImage from "../../assets/css.svg";
import jsImage from "../../assets/javascript.svg";
import reactImage from "../../assets/react.svg";
import reduxImage from "../../assets/redux.svg";
import tailwindImage from "../../assets/tailwind.svg";
import npmImage from "../../assets/npm.svg";
import githubImage from "../../assets/github.svg";
import Heading from "../common/Heading";
import MobileHeading from "../common/MobileHeading";
import Wrapper from "../common/Wrapper";
import SkillCard from "../common/SkillCard";

const Work = () => {
  return (
    <section id="work">
      <Wrapper>
        <Heading title="Work" />
        <MobileHeading title="Work" />
        <div class="flex flex-col justify-center w-full">
          <div class="w-full flex justify-center">
            <h1 class="text-sm md:text-lg text-gray-400 p-2">
              Below are the some technologies I'm familiar with
            </h1>
          </div>
          <div class="w-full grid grid-cols-2 md:grid-cols-3 text-gray-400 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 text-center">
            <SkillCard src={htmlImage} title="HTML" />
            <SkillCard src={cssImage} title="CSS" />
            <SkillCard src={jsImage} title="JAVASCRIPT" />
            <SkillCard src={reactImage} title="REACT" />
            <SkillCard src={reduxImage} title="REDUX" />
            <SkillCard src={npmImage} title="NPM" />
            <SkillCard src={githubImage} title="GITHUB" />
            <SkillCard src={tailwindImage} title="TAILWIND" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Work;
