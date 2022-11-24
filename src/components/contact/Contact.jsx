import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-primary">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row justify-center h-full w-full items-start lg:items-center space-y-12 lg:space-y-0">
        <div className="hidden lg:flex justify-start w-1/3 text-gray-700">
          <h1 className="text-8xl font-bold tracking-widest about-text">
            Get in touch
          </h1>
        </div>
        <div className=" flex justify-center w-full text-gray-700 lg:hidden">
          <h1 className="text-6xl md:text-7xl font-bold tracking-wide border-b-4 border-sky-500 pb-4">
            Contact
          </h1>
        </div>
        <div className="flex flex-col justify-center w-full">
          <div className="w-full flex justify-center">
            <h1 class="text-lg text-gray-600 p-2 max-w-lg lg:max-w-2xl text-center">
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
              <button
                class="relative border-2 px-6 py-3 text-lg hover:bg-sky-600 hover:border-sky-600 hover:-translate-y-1 duration-150 hover:shadow-2xl
  border-sky-500 text-sky-500 hover:text-white tracking-widest uppercase"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
