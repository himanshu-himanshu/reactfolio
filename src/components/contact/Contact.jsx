import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Heading from "../common/Heading";
import MobileHeading from "../common/MobileHeading";
import Wrapper from "../common/Wrapper";
import Button from "../common/Button";
import Spinner from "../common/Spinner";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      emailjs
        .sendForm(
          "service_exe9wox",
          "template_yuxy9tu",
          form.current,
          "-njB1t-Giwvj1HXJN"
        )
        .then(
          (result) => {
            console.log(result.text);
            setConfirm(true);
            setTimeout(() => {
              setLoading(false);
            }, 500);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }, 1000);
  };
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
            <form
              action="#"
              class="flex flex-col space-y-6 w-[90%] sm:w-1/2"
              ref={form}
              onSubmit={sendEmail}
            >
              <input type="text" placeholder="Name" name="from_name" required />
              <input
                type="email"
                placeholder="Email"
                name="from_email"
                required
              />
              <textarea
                name="message"
                cols="10"
                rows="5"
                placeholder="Message"
                maxLength="10"
                required
              ></textarea>
              {loading && <Spinner title="Spinner" confirm={confirm} />}
              {!loading && <Button title="Send Message" type="submit" />}
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
