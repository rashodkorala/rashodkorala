import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div id="Contact" className="w-full h-screen bg-transparent flex justify-center items-center">
      <div className="max-w-[1000px] px-4 flex flex-col justify-center items-center h-full xsm:px-5">
        <h1 className="text-4xl md:text-6xl">Let&apos;s Connect</h1>
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg md:text-2xl my-4 text-systemGray">Feel free to reach out via email</p>
          <a href="mailto:your.email@example.com" className="flex text-lg w-[60%] justify-center bg-transparent px-2 py-2 rounded-3xl ring-2 ring-blue-500 my-4 hover:scale-110 transition-all duration-1000 ease-in-out animate-bounce ">
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
