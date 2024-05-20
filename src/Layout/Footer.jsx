import React from "react";
import {
  FaFacebookF,
  // FaInstagram,
  // FaLinkedinIn,
  // FaMailBulk,
  // FaPhone,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" sm:w-fit sm:space-y-4 md:flex md:justify-start md:space-x-2 md:w-fit p-10 py-10 md:pl-16  mt-64   lg:mt-0 xl:mt-2 bg-black font-abc">
      <div className="md:w-5/12">
        <div className="text-2xl font-bold">
          <span className="text-white">CW</span>
          <span className="text-pink">T</span>
        </div>
        <p className="text-justify text-white2 py-3  font-sans_serif pr-8 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni
          reprehenderit dolor excepturi corrupti est, sunt optio voluptatibus at
          molestiae.
        </p>
        <div className="flex justify-start space-x-2 pt-2 ">
          <div className="h-12 w-12 rounded-full flex justify-center items-center bg-grey2 hover:bg-pink transition hover:-translate-y-1 hover:scale-110">
            <NavLink to={"./"}>
              <FaFacebookF color="white" />
            </NavLink>
          </div>
          <div className="h-12 w-12 rounded-full flex justify-center items-center bg-grey2 hover:bg-pink transition hover:-translate-y-1 hover:scale-110">
            <a href="#">
              <FaFacebookF color="white" />
            </a>
          </div>
          <div className="h-12 w-12 rounded-full flex justify-center items-center bg-grey2 hover:bg-pink transition hover:-translate-y-1 hover:scale-110">
            <a href="#">
              <FaFacebookF color="white" />
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-4/12">
        <div className="space-y-3">
          <span className="text-white2 font-bold text-2xl">GET IN TOUCH</span>
          <p className="h-1 w-60 bg-white2">
            <p className="h-1 w-10 bg-pink"></p>
          </p>
          <div>
            <p className="font-abc font-bold text-xl text-white">Locations</p>
            <p className="text-white2">New York, USA</p>
          </div>
          <div>
            <p className="font-abc font-bold text-xl text-white">Email</p>
            <p className="text-white2">hello123@example.com</p>
          </div>
          <div>
            <p className="font-abc font-bold text-xl text-white">Phone</p>
            <p className="text-white2">+1-3454-5678-77</p>
          </div>
        </div>
      </div>
      <div className="md:w-4/12">
        <div className="space-y-3">
          <span className="text-white2 font-bold text-2xl">INFORMATION</span>
          <p className="h-1 w-60 bg-white2">
            <p className="h-1 w-10 bg-pink"></p>
          </p>
          <div className="space-y-3">
            <div>
              <NavLink className="text-white2 py-8">Terms & Condition</NavLink>
            </div>
            <div>
              <NavLink className="text-white2 py-8" href="">
                Privacy Policy
              </NavLink>
            </div>
            <div>
              <NavLink className="text-white2 py-8" href="">
                Contact Me
              </NavLink>
            </div>
            <div>
              <NavLink className="text-white2 py-8" to="/faq">
                FAQs
              </NavLink>
            </div>
            <div>
              <NavLink className="text-white2 py-8" href="">
                Report an issue
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-4/12">
        <div className="space-y-3">
          <span className="text-white2 font-bold text-2xl">MY SERVICES</span>
          <p className="h-1 w-60 bg-white2">
            <p className="h-1 w-10 bg-pink"></p>
          </p>
          <div className="space-y-3">
            <div>
              <a className="text-white2" href="">
                Web Design
              </a>
            </div>
            <div>
              <a className="text-white2" href="">
                Web Development
              </a>
            </div>
            <div>
              <a className="text-white2" href="">
                UI/UX Design
              </a>
            </div>
            <div>
              <a className="text-white2" href="">
                SEO Marketing
              </a>
            </div>
            <div>
              <a className="text-white2" href="">
                Graphic Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
