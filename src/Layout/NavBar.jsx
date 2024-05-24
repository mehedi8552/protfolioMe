import React, { useState } from "react";

import { AiOutlineMenu } from 'react-icons/ai';
import image from "../assets/user.png";
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
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      {/* Logo */}
      <div className="text-2xl font-bold pl-10">
        <span className="text-black">CW</span>
        <span className="text-pink">T</span>
      </div>

        
      <div className="hidden md:flex space-x-4 font-sans font-semibold text-grey">
        <a href="/" className="text-black hover:text-pink-500">
          Home
        </a>
        <a href="/about-page" className="text-black hover:text-pink-500">
          About Us
        </a>
        <a href="#" className="text-black hover:text-pink-500">
          Page
        </a>
        <a href="#" className="text-black hover:text-pink-500">
          Services
        </a>
        <a href="#" className="text-black hover:text-pink-500">
          Portfolio
        </a>
        <a href="/blog-page" className="text-black hover:text-pink-500">
          Blog
        </a>
        <a href="/contact-us" className="text-black hover:text-pink-500 pr-8">
          Contact Us
        </a>
        <div className="max-md:hidden pr-16">
        <button onClick={toggleMenu2} className="focus:outline-none">
        <AiOutlineMenu size={30}><path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            /></AiOutlineMenu>
        </button>
      </div>
      </div>

      {/* Hamburger Icon for Laptop */}


      {/* Mobile Menu */}
      <div
        className={`${
          isOn ? "block" : "hidden"
        } absolute  top-16 right-2 w-96  bg-white shadow-lg`}
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
            <p className="text-xl text-gray-900">Mirta Akins</p>
            <p className="font-bold text-xl">Email :</p>
            <p className="text-xl text-gray-600">example123@gmail.com</p>
            <p className="font-bold text-xl">Phone :</p>
            <p className="text-xl text-gray-600">(54) 1234 456 526</p>
            <p className="font-bold text-xl">Address :</p>
            <p className="text-xl text-gray-600">4155 Mann Island, Liverpool L3, United Kingdom.</p>
            <p className="font-bold text-xl">About Me :</p>
            <p className="text-justify pb-8 text-xl text-gray-600 " >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
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
        <a href="#" className="block px-4 py-2 text-black hover:text-pink-500">
          Home
        </a>
        <a href="#" className="block px-4 py-2 text-black hover:text-pink-500">
          About Us
        </a>
        <a href="#" className="block px-4 py-2 text-black hover:text-pink-500">
          Page
        </a>
        <a href="#" className="block px-4 py-2 text-black hover:text-pink-500">
          Services
        </a>
        <a href="#" className="block px-4 py-2 text-black hover:text-pink-500">
          Portfolio
        </a>
        <a href="#" className="block px-4 py-2 text-black hover:text-pink-500">
          Blog
        </a>
        <a href="#" className="block px-4 py-2 text-black hover:text-pink-500">
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
