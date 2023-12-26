import React from "react";
import Link from "next/link";


type Props = {};

const about = (props: Props) => {
  return (
    <div id="About" className="w-full h-screen bg-transparent ">
    
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-white xsm:px-5">
        <h1 className="font-bold text-4xl xsm:text-5xl sm:text-6xl">Me, Myself & I</h1>
        <div className="flex flex-col md:grid md:grid-cols-1 ">
          <p className="py-4 text-md xsm:text-xl xl:text-2xl ">
            I am a third year student at the Memorial University of Newfoundland studying Computer Science. I am a
            self-taught developer and designer with a passion for creating beautiful and functional websites. I am also
            passionate about photography and love to create and edit photos.
          </p>
          <Link href="https://photosbyrashod.myportfolio.com" target="_blank" rel="noreferrer">
            <button className="bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500 hover:scale-110 transition-all duration-1000 ease-in-out">
              Veiw Photos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default about;
