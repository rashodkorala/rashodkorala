import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div id="Contact" className="w-full h-screen bg-transparent">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center items-center h-full xsm:px-5">
        <h1 className="text-4xl">Let&apos;s Connect</h1>
        <div>
          <p className="text-md my-4 text-systemGray">Feel free to reach out via email</p>
          <a href="mailto:your.email@example.com" className="flex justify-center bg-transparent px-2 py-2 rounded-3xl ring-2 ring-blue-500 my-4 hover:scale-110 transition-all duration-1000 ease-in-out ">
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
