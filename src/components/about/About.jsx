import React from "react";
import { motion } from "framer-motion";

import dots from "../../assets/dots.png";
import profile from "../../assets/pic.jpg";
import Heading from "../common/Heading";
import MobileHeading from "../common/MobileHeading";
import Wrapper from "../common/Wrapper";

const About = () => {
  return (
    <section id="about">
      <Wrapper>
        <Heading title="About" />
        <MobileHeading title="About" />
        <div class="flex justify-between w-full items-center text-center flex-col space-y-12 px-6 text-gray-400">
          <div class="relative">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={profile}
              viewport={{ once: true }}
              alt=""
              class="h-40 md:h-44 rounded-full"
            />
            <div class="absolute h-full w-full -top-1 -left-1">
              <img src={dots} alt="" class="h-20 opacity-20" />
            </div>
            <div class="absolute h-full w-full bg-black top-0 rounded-full opacity-20"></div>
          </div>
          <h1 class="text-left text-sm sm:text-lg md:text-xl max-w-xl lg:max-w-2xl font-light font-Raleway">
            Hi there, myself Himanshu. I am a
            <span class="text-sky-500 font-bold"> Web developer</span> ,
            front-end developer to precise. I have a Bachelor's in Computer
            Science and currently enrolled in Mobile App development program in
            Canada. Making interactive, beautiful and simple websites is my
            farmost concern right now, however, I also want to explore the world
            of mobile apps.
          </h1>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
