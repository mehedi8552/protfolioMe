import React from "react";
import errorPic from "../assets/Image/error.png";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="flex justify-center text-center h-screen">
      <div className="space-y-4 mt-24">
        <div className="flex justify-center">
          <img  src={errorPic} alt="" />
        </div>

        <p className="text-red text-4xl font-bold"> Sorry!</p>
        <p className="text-grey font-abc text-4xl font-bold">
          The page can’t be found.
        </p>
        <div className=" flex justify-center text-center">
          <p className="text-grey2 mx-10">
            The page you're looking for isn't available. Try with another page
            or use the go home button below
          </p>
        </div>
        <Link to={"/"} className="flex justify-center">
          <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-card text-white shadow-2xl transition-all rounded-full before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green before:duration-500 before:ease-out hover:shadow-green hover:before:h-56 hover:before:w-56">
            <span class="relative z-10">GO HOME</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
