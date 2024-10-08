import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import image from "../assets/Image/Mehedi.jpg";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const toggleMenu2 = () => {
    setIsOn(!isOn);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow z-10">
      {/* Logo */}
      <Link to={"/"} className="text-2xl font-bold pl-10">
        <span className="text-black">MD</span>
        <span className="text-pink"> MEHEDI</span>
      </Link>

      <div className="hidden md:flex space-x-4 font-sans font-semibold text-grey">
        <Link to={"/"} className="block px-4 py-2 text-black hover:text-pink-500">
          Home
        </Link>
        <Link to={"/about-page"} className="block px-4 py-2 text-black hover:text-pink-500">
          About Us
        </Link>
        <Link to={"/service-page"} className="block px-4 py-2 text-black hover:text-pink-500">
          Services
        </Link>
        <Link to={"/protfolio-page"} className="block px-4 py-2 text-black hover:text-pink-500">
          Portfolio
        </Link>
        <Link to={"/blog-page"} className="block px-4 py-2 text-black hover:text-pink-500">
          Blog
        </Link>
        <Link
          to={"/contact-us"}
          className="block px-4 py-2 text-black hover:text-pink-500 pr-8"
        >
          Contact Us
        </Link>
        <div className="max-md:hidden pr-16  ">
          <button onClick={toggleMenu2} className="focus:outline-none">
            <AiOutlineMenu size={30}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </AiOutlineMenu>
          </button>
        </div>
      </div>

      {/* Hamburger Icon for Laptop */}

      {/* Mobile Menu */}
      <div
        className={`${
          isOn ? "block" : "hidden"
        } absolute  top-16 right-2 w-96 z-40  bg-white shadow-lg`}
      >
        <div>
          <nav className="bg-black">
            <h2 className="text-white p-4 font-bold">ABOUT US</h2>
          </nav>
          <div className="px-4 font-abc">
            <div className="flex justify-center pt-4">
              <img className=" h-28 w-28 rounded-full" src={image} alt="" />
            </div>

            <p className="font-bold text-xl">Name :</p>
            <p className="text-xl text-gray-900">Md Mehedi Hasan</p>
            <p className="font-bold text-xl">Email :</p>
            <p className="text-xl text-gray-600">mehedi193002106@gmail.com</p>
            <p className="font-bold text-xl">Phone :</p>
            <p className="text-xl text-gray-600">+8801770228395</p>
            <p className="font-bold text-xl">Address :</p>
            <p className="text-xl text-gray-600">Mirpur 11,Dhaka,Bangladesh</p>
            <p className="font-bold text-xl">About Me :</p>
            <p className="text-justify pb-8 text-xl text-gray-600 ">
              Welcome to my creative corner! one Enthusiastic Full stack web
              developer & UI/UX designer with two years of digital Experience
              creating experiences that are visible Stunning and user-friendly.
            </p>
          </div>
        </div>
      </div>
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <AiOutlineMenu size={30}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </AiOutlineMenu>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg`}
      >
       
        <Link to={"/"} className="block px-4 py-2 text-black hover:text-pink-500">
          Home
        </Link>
        <Link to={"/about-page"} className="block px-4 py-2 text-black hover:text-pink-500">
          About Us
        </Link>
        <Link to={"/service-page"} className="block px-4 py-2 text-black hover:text-pink-500">
          Services
        </Link>
        <Link to={"/protfolio-page"} className="block px-4 py-2 text-black hover:text-pink-500">
          Portfolio
        </Link>
        <Link to={"/blog-page"} className="block px-4 py-2 text-black hover:text-pink-500">
          Blog
        </Link>
        <Link
          to={"/contact-us"}
          className="block px-4 py-2 text-black hover:text-pink-500 pr-8"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;



