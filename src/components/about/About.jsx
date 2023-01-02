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
        <div class="flex justify-between w-full items-center text-center flex-col space-y-12 px-6 py-6 text-gray-400">
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
            <div class="absolute h-full w-full bg-black top-0 rounded-full opacity-20 hover:opacity-0 duration-200"></div>
          </div>
          <div class="text-left text-sm sm:text-lg md:text-xl max-w-xl lg:max-w-2xl font-normal font-Raleway motion.p-2 relative">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="text-xl lg:text-2xl text-lightGreen font-bold">
                Hola
              </span>
              , my name is Himanshu. I am a
              <span className="font-Alegreya"> Web developer</span> , front-end
              developer to be precise. I have a Bachelor's in Computer Science
              and currently exploring the world of mobile apps.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              I started programming back in 2020's and with lots of twists and
              turns I felt in love with{" "}
              <span className="font-Alegreya text-gray-200">ReactJs</span>,
              currently I'm trying my hands on backend stuff which includes{" "}
              <span className="font-Alegreya text-gray-200">Node </span>
              and <span className="font-Alegreya text-gray-200">Mongo</span>.
              Making interactive, beautiful and simple websites is my farmost
              concern right now.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              When it comes to designing the website,{" "}
              <span className="font-Alegreya text-gray-200">Tailwind</span> hits
              my mind and is my current obession. This is my favourite part in
              web development and I think it makes me a better thinker doing so
              and I'm looking forward to broad my horizon by gaining some real
              world experience.
            </motion.p>
            <span className="text-lightGreen">Closest to my heart : </span>
            React, Tailwind
            <div class="hidden lg:inline-block absolute h-10 w-10 border -bottom-10 -right-10 border-gray-500"></div>
            <div class="hidden lg:inline-block absolute h-10 w-10 border -bottom-12 -right-10 border-gray-500"></div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
