import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div id="Contact" className="w-full h-screen bg-bg">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center items-center h-full text-white xsm:px-5">
        <h1 className="text-4xl font-bold">Let&apos;s Connect</h1>
        <div>
          <p className="text-md my-4">Feel free to reach out via email:</p>
          <a href="mailto:your.email@example.com" className="bg-cyan-600 border-2 border-black rounded-[40px] px-8 py-2 text-white">
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
