import React from "react";
import ServiceData from "../Component/Helper/ServiceData";
import Linkbtn from "../assets/link.png";
import ModalImage from "react-modal-image";
import Data from "../Component/Helper/ProtfolioData";
import ThambnailValue from "../assets/bg.png";
import { useParams } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
} from "react-icons/fa";
const ServiceDetails = () => {
const {id} = useParams();
const numericId = parseInt(id, 10); // Convert id to a number
const ServiceDaTa = ServiceData.find((item) => item.id === numericId);

let ProtfolioData = Data.slice(0,4);
  const options = {
    animationData: Linkbtn,
    loop: true,
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 my-8">
      <div className="col-span-3 md:col-span-2">
        {
          ServiceDaTa?(
<div className="space-y-4 bg-white shadow-lg p-8">
          <img className="mx-auto" src={ServiceDaTa.image} alt="" />
          <div className="space-y-4">
            <p className="font-bold text-2xl">{ServiceDaTa.details}</p>
            <p className="text-gray-600">{ServiceDaTa.description}</p>
            <ul className="flex gap-2">
              <span className="font-bold">Tags:</span>
              <li className="py-2 px-2 bg-gray-200 border">Html</li>
              <li className="py-2 px-2 bg-gray-200 border">Node.js</li>
              <li className="py-2 px-2 bg-gray-200 border">Express.js</li>
            </ul>
            <ul className="flex gap-2">
              <span className="font-bold">Share:</span>
              <a className="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white">
                <FaFacebookF />
              </a>
              <a className="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white">
                <FaLinkedinIn />
              </a>
              <a className="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white">
                <FaMailBulk />
              </a>
              <a className="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white">
                <FaInstagram />
              </a>
            </ul>
          </div>
        </div>
     
          ):(
            <h1>No Data Is There.......</h1>
          )
        }
         </div>
      <div className="col-span-3 md:col-span-1 space-y-8">
        <div className="bg-white shadow-lg p-4">
          <p className="text-2xl">Our Services</p>
          <div className="space-y-2 py-2">
            {[
              "Web Design",
              "Web Development",
              "Photography",
              "UI/UX Design",
              "Interior Design",
            ].map((category) => (
              <div
                className="hover:text-white bg-white2 hover:bg-pink z-20  p-3 flex items-center"
                key={category}
              >
                <FaArrowRight className="mr-2" />
                <a href="">{category}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow-lg p-4">
          <p className="text-2xl">Our Portfolio</p>
          <div class="grid grid-cols-2 gap-2 p-2">
            {ProtfolioData.map((index, i) => (
              <div class=" relative overflow-hidden group">
                <img
                  class="h-32 w-auto object-cover"
                  src={index.image}
                  alt=""
                />
                <div class=" absolute h-full w-full bg-white/90 flex items-center justify-center -bottom-9 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div>
                    <div className="flex justify-center space-x-3">
                      <button class="my-8 flex relative h-10 w-10 items-center justify-center overflow-hidden bg-white2 text-black hover:text-white2 shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-pink before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
                        <span class="relative z-10">
                          <ModalImage
                            className="flex justify-center text-center"
                            key={i}
                            small={Linkbtn}
                            large={index.image}
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <p className="text-2xl mb-4">Tags</p>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "DESIGN",
              "NODE.JS",
              "EXPRESS.JS",
              "REACT",
              "TAILWIND",
            ].map((tag) => (
              <a
                key={tag}
                className="py-2 px-4 bg-gray-200 border rounded hover:bg-pink hover:text-white"
                href="#"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
