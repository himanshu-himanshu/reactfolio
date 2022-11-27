import React from "react";

import Heading from "../common/Heading";
import MobileHeading from "../common/MobileHeading";
import Wrapper from "../common/Wrapper";

const Work = () => {
  return (
    <section id="work">
      <Wrapper>
        <Heading title="Work" />
        <MobileHeading title="Work" />
        <div class="flex flex-col justify-center w-full">
          <div class="w-full flex justify-center">
            <h1 class="text-sm md:text-xl text-gray-400 p-2">Coming Soon!</h1>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Work;
