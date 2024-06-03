import React from "react";
import image from "../assets/user.png";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Hero2 = () => {
  return (
<section className=" md:flex md:justify-center md:items-center h-screen mb-24">
  <div className="md:w-6/12 w-full pl-4 pt-2 md:flex md:justify-center">
    <div className="h-fit w-fit xl:h-96 xl:w-96 mx-2 rounded-xl bg-white3 hover:shadow-2xl">
      <div className="flex justify-center">
        <img className="h-full xl:h-96 xl:w-96  w-full px-6" src={image} alt="" />
      </div>
    </div>
  </div>
  <div className="md:w-6/12 w-full my-2 pl-4">
    <div className="w-full md:w-10/12 md:text-left text-justify space-y-6">
      <p className="text-2xl md:text-4xl font-bold font-abc h-auto w-auto px-4 pt-4 text-card">Md Mehedi Hasan</p>
      <p className="text-xl md:text-3xl font-bold text-grey2 font-abc h-auto w-auto px-4">
        A professional web developer & designer  
      </p>
      <p className="text-grey h-auto w-auto px-4">
        I design and develop services for customers specializing creating
        stylish, modern websites, web services and online stores. My passion
        is to design digital user experiences through meaningful interactions.
        Check out my Portfolio.
      </p>
      {/* <p className="text-grey h-auto w-auto px-4">
        I design and develop services for customers specializing creating
        stylish, modern websites, web services and online stores.
      </p> */}
      <div className="flex justify-start space-x-2 px-4 pt-2 mb-4">
        <div className="h-12 w-12 rounded-full flex justify-center items-center bg-grey2 hover:bg-pink transition hover:-translate-y-1 hover:scale-110">
          <a href="https://www.facebook.com/sahariar.hasan.24/">
            <FaFacebookF color="white" />
          </a>
        </div>
        <div className="h-12 w-12 rounded-full flex justify-center items-center bg-grey2 hover:bg-pink transition hover:-translate-y-1 hover:scale-110">
        <a href="https://www.instagram.com/sahariar_12/">
            <FaInstagram color="white" />
          </a>
        </div>
        <div className="h-12 w-12 rounded-full flex justify-center items-center bg-grey2 hover:bg-pink transition hover:-translate-y-1 hover:scale-110">
          <a href="https://www.instagram.com/sahariar_12/">
            <FaLinkedinIn color="white" />
          </a>
        </div>
        <div className="h-12 w-12 rounded-full flex justify-center items-center bg-grey2 hover:bg-pink transition hover:-translate-y-1 hover:scale-110">
          <a href="https://x.com/mahadi_24">
            <FaXTwitter color="white" />
          </a>
        </div>
      </div>
      <div className="flex justify-start pl-4 space-x-2">
        <NavLink to={'/contact-us'}  className="relative  flex h-[50px] w-40 items-center justify-center overflow-hidden bg-card text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-grey before:duration-500 before:ease-out hover:shadow-grey hover:before:h-56 hover:before:w-56">
          <span className="relative z-10">HIRE ME</span>
        </NavLink>
        <NavLink to={'/contact-us'}  className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-grey text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-card before:duration-500 before:ease-out hover:shadow-card hover:before:h-56 hover:before:w-56">
          <span className="relative z-10">LEARN MORE</span>
        </NavLink>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero2;
