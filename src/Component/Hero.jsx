import React from "react";
import image from "../assets/user.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  // FaPhone,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { RxHeight } from "react-icons/rx";
const Hero = () => {
  return (
      <div className=" container md:flex md:justify-center md:items-center h-screen mb-24 ">
        <div className="md:w-6/12 w-fit pl-4 pt-2 md:flex md:justify-center">
          <div className="h-5/6 w-96 bg-white3 hover:shadow-2xl">
            <div className="flex justify-center">
              <img className="h-5/6 pt-24 pr-16 w-96 " src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="md:w-6/12 w-fit my-2 pl-4">
          <div className="w-10/12 md:text-left text-justify space-y-6">
            <p className="text-4xl font-bold font-abc">Md Mehedi Hasan</p>
            <p className="text-3xl font-bold text-grey2 font-abc">
              A professional web designer & developer
            </p>

            <p className="text-grey">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences through My passion
              is to design digital user experiences through meaningful
              interactions. Check out my Portfolio
            </p>
            <p className="text-grey">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores.
            </p>
            <div className="flex justify-start space-x-2 pt-2 mb-4">
              <div className="h-12 w-12 rounded-full flex justify-center items-center bg-grey2 hover:bg-pink transition hover:-translate-y-1 hover:scale-110">
                <NavLink to={"./"}>
                  <FaFacebookF color="white" />
                </NavLink>
              </div>
              <div className="h-12 w-12 rounded-full flex justify-center items-center bg-grey2 hover:bg-pink transition hover:-translate-y-1 hover:scale-110">
                <a href="#">
                  <FaInstagram color="white" />
                </a>
              </div>
              <div className="h-12 w-12 rounded-full flex justify-center items-center bg-grey2 hover:bg-pink transition hover:-translate-y-1 hover:scale-110">
                <a href="#">
                  <FaLinkedinIn color="white" />
                </a>
              </div>
              <div className="h-12 w-12 rounded-full flex justify-center items-center bg-grey2 hover:bg-pink transition hover:-translate-y-1 hover:scale-110">
                <a href="#">
                  <FaMailBulk color="white" />
                </a>
              </div>
            </div>
            <div className="flex justify-start space-x-2">
              <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-grey text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-pink before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
                <span class="relative z-10">HIRE ME</span>
              </button>
              <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-grey text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-pink before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
                <span class="relative z-10">LEARN MORE</span>
              </button>
            </div>
          </div>
        </div>
      </div>


  );
};

export default Hero;
