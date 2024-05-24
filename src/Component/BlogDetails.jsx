import React from "react";
import Products from "../assets/data/blog";
import {
  FaTags,
  FaUser,
  FaSearch,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const BlogDetails = () => {

  const { id } = useParams();
  const numericId = parseInt(id, 10); // Convert id to a number
  const data = Products.find((item) => item.id === numericId);

  return (
    <div className="grid grid-flow-col grid-cols-2 px-32 my-16">
      <div className=" col-span-2">
        {data ? (
          <div className="">
            <div className="space-y-4 w-fit mx-10  bg-white shadow-lg my-8">
              <img className="" src={data.img} alt="" />
              <div className="pl-8 pb-6 space-y-4">
                <div className="flex justify-start">
                  <FaUser className="mt-3 pr-2 text-pink text-2xl" />
                  <span className="mt-3">Admin </span>
                  <FaTags className="mt-2 pr-2 text-pink text-3xl ml-4" />
                  <span className="mt-3">Technology</span>
                </div>
                <p className="font-abc text-grey2 font-bold text-2xl ">
                  {data.title}
                </p>
                <p className=" text-grey2  ">{data.body}</p>
                <ul className="flex gap-2">
                  <span className="font-bold pt-1">Tags:</span>
                  <li className="py-2 px-2 bg-white3 border">Html</li>
                  <li className="py-2 px-2 bg-white3 border">Node.js</li>
                  <li className="py-2 px-2 bg-white3 border">Express.js</li>
                </ul>
                <ul className="flex gap-2">
                  <span className="font-bold pt-1">Share:</span>
                  <a className="py-2 px-2  bg-white3 border  hover:bg-pink hover:text-white">
                    <FaFacebookF />
                  </a>
                  <a className="py-2 px-2  bg-white3 border  hover:bg-pink hover:text-white">
                    <FaLinkedinIn />
                  </a>
                  <a className="py-2 px-2  bg-white3 border  hover:bg-pink hover:text-white">
                    <FaMailBulk />
                  </a>
                  <a className="py-2 px-2  bg-white3 border  hover:bg-pink hover:text-white">
                    <FaInstagram />
                  </a>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <p>Data not found</p>
        )}
      </div>
      <div className="w-96 h-fit my-8">
        <div className="bg-white shadow-lg p-4">
          <div>
            <p className=" text-2xl">Search </p>
          </div>
          <div>
            <div class="relative mr-6 my-2">
              <input
                type="search"
                class="bg-purple-white shadow rounded  w-5/6 p-3"
                placeholder="Search by name..."
              />
              <span class="absolute pin-r cursor-pointer pt-1 -ml-8 mt-3 mr-4 text-purple-lighter">
                <FaSearch class="h-4 text-dark" />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg p-4 my-4">
          <p className=" text-2xl">Search</p>
          <div className="space-y-2 my-4 ">
            <div className="hover:text-pink">
              <FaArrowRight />
              <a className="absolute -mt-5 pl-5" href="">
                Web Design
              </a>
            </div>
            <div className="hover:text-pink cursor-pointer">
              <FaArrowRight />
              <a className="absolute -mt-5 pl-5">Web Development</a>
            </div>
            <div className="hover:text-pink cursor-pointer">
              <FaArrowRight />
              <a className="absolute -mt-5 pl-5"> Apps Development</a>
            </div>
            <div className="hover:text-pink cursor-pointer">
              <FaArrowRight />
              <a className="absolute -mt-5 pl-5"> Photography</a>
            </div>
            <div className="hover:text-pink cursor-pointer">
              <FaArrowRight />
              <a className="absolute -mt-5 pl-5"> UI/UX Design</a>
            </div>
            <div className="hover:text-pink cursor-pointer">
              <FaArrowRight />
              <a className="absolute -mt-5 pl-5"> Interior Design</a>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg p-4 my-4">
          <p className=" text-2xl">Archives</p>
          <div className="space-y-2 my-4 ">
            <div className="hover:text-pink">
              <FaArrowRight />
              <a className="absolute -mt-5 pl-5" href="">
                September 2021
              </a>
            </div>
            <div className="hover:text-pink cursor-pointer">
              <FaArrowRight />
              <a className="absolute -mt-5 pl-5">October 2024</a>
            </div>
            <div className="hover:text-pink cursor-pointer">
              <FaArrowRight />
              <a className="absolute -mt-5 pl-5"> August 2024</a>
            </div>
            <div className="hover:text-pink cursor-pointer">
              <FaArrowRight />
              <a className="absolute -mt-5 pl-5"> July 2024</a>
            </div>
            <div className="hover:text-pink cursor-pointer">
              <FaArrowRight />
              <a className="absolute -mt-5 pl-5">June 2024</a>
            </div>
            <div className="hover:text-pink cursor-pointer">
              <FaArrowRight />
              <a className="absolute -mt-5 pl-5"> May 2024</a>
            </div>
          </div>
        </div>
        <section className="bg-white shadow-lg p-4 my-4">
          <p className=" text-2xl pl-2">Archives</p>
          <div className="grid grid-flow-col grid-rows-3 pt-3">
            <a
              className="py-2 px-2 m-1 bg-white3 border flex justify-center hover:bg-pink hover:text-white"
              href=""
            >
              HTML
            </a>
            <a
              className="py-2 px-2 m-1 bg-white3 border  flex justify-center  hover:bg-pink hover:text-white"
              href=""
            >
              DESIGN
            </a>
            <a
              className="py-2 px-2 m-1 bg-white3 border flex justify-center  hover:bg-pink hover:text-white"
              href=""
            >
              NODE.JS
            </a>
            <a
              className="py-2 px-2 m-1 bg-white3 border flex justify-center  hover:bg-pink hover:text-white"
              href=""
            >
              EXPRESS.JS
            </a>
            <a
              className="py-2 px-2 m-1 bg-white3 border flex justify-center  hover:bg-pink hover:text-white"
              href=""
            >
              REACT
            </a>
            <a
              className="py-2 px-2 m-1 bg-white3 border flex justify-center  hover:bg-pink hover:text-white"
              href=""
            >
              TAILWIND
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetails;
