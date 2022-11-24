import React from "react";

import Heading from "../common/Heading";
import MobileHeading from "../common/MobileHeading";
import Wrapper from "../common/Wrapper";
import Button from "../common/Button";

const Contact = () => {
  return (
    <section id="contact">
      <Wrapper>
        <Heading title="Contact" />
        <MobileHeading title="Contact" />
        <div className="flex flex-col justify-center w-full">
          <div className="w-full flex justify-center">
            <h1 class="text-sm md:text-lg text-gray-400 p-2 max-w-lg lg:max-w-2xl text-center">
              Currently I'm open for new opportunity to get my hands on. Please
              use the form below or my{" "}
              <a
                className="text-sky-500"
                href="mailto: himanshu16315@gmail.com"
              >
                email
              </a>{" "}
              to alert me regarding the same.
            </h1>
          </div>
          <div className=" w-full flex justify-center p-8">
            <form action="#" class="flex flex-col space-y-6 w-[90%] sm:w-1/2">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea
                name="message"
                cols="10"
                rows="5"
                placeholder="Message"
                maxlength="10"
              ></textarea>
              <Button title="Send Message" />
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
