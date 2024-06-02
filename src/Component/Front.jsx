import React from "react";
import resume from "../assets/MD.Mehedi Hasan.pdf"
import image from "../assets/hero.png";

import Model from "../Component/Helper/VideoBtn.jsx";
const Front = () => {
  return (
    <section>
      <div className="md:flex justify-between bg-white">
        <div className="md:w-7/12 w-full my-12 mx-4 p-6 md:my-28 md:mx-8 md:p-12 space-y-4">
          <p className="font-abc font-bold text-xl md:text-2xl text-grey2">
            Hello, My Name Is Md Mehedi Hasan
          </p>
          <p className="text-grey2 font-bold text-2xl md:text-4xl">
            I'm Professional Web Developer &
          </p>
          <p className="text-pink font-abc font-bold text-2xl md:text-4xl">
            UI/UX Designer
          </p>
          <p className="text-grey2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="flex flex-col md:flex-row justify-start">
            <button className="relative mt-4 md:mt-8 flex h-[50px] w-40 items-center justify-center overflow-hidden bg-pink rounded-md text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-md before:bg-green before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
              <a className="relative z-10" href={resume} download={resume}>DOWNLOAD CV</a>
            </button>
            <button>
              <Model/>
            </button>
          </div>
        </div>
        <div className="md:w-6/12 w-full flex items-start md:items-start">
          <div className="flex justify-center md:justify-end w-full">
            <img
              className="w-full md:w-auto md:mt-0"
              src={image}
              alt="Profile Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Front;
