import React from "react";
import blogData from "../assets/data/blog.json";
import { FaTags, FaUser, FaSearch, FaArrowRight } from "react-icons/fa";
const Blog = () => {
  return (
    <div className="grid grid-flow-col grid-cols-2 px-32 my-16">
      <div className=" col-span-2">
        {blogData.map((index) => (
          <div className="">
            <div className="space-y-4 w-fit mx-10  bg-white shadow-lg my-8">
              <img className="" src={index.img} alt="" />
              <div className="pl-8 pb-6 space-y-4">
                <div className="flex justify-start">
                  <FaUser className="mt-3 pr-2 text-pink text-2xl" />
                  <span className="mt-3">Admin </span>
                  <FaTags className="mt-2 pr-2 text-pink text-3xl ml-4" />
                  <span className="mt-3">Technology</span>
                </div>
                <p className="font-abc text-grey2 font-bold text-2xl ">
                  {index.title}
                </p>
                <p className=" text-grey2  ">{index.body}</p>
                <button class=" flex relative h-10 w-28 items-center justify-center overflow-hidden bg-grey text-white shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
                  <span class="relative z-10">HIRE ME</span>
                </button>
              </div>
            </div>
          </div>
        ))}
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
            <a className="py-2 px-2 m-1 bg-white3 border flex justify-center hover:bg-pink hover:text-white" href="">HTML</a>
            <a className="py-2 px-2 m-1 bg-white3 border  flex justify-center  hover:bg-pink hover:text-white" href="">DESIGN</a>
            <a className="py-2 px-2 m-1 bg-white3 border flex justify-center  hover:bg-pink hover:text-white" href="">NODE.JS</a>
            <a className="py-2 px-2 m-1 bg-white3 border flex justify-center  hover:bg-pink hover:text-white" href="">EXPRESS.JS</a>
            <a className="py-2 px-2 m-1 bg-white3 border flex justify-center  hover:bg-pink hover:text-white" href="">REACT</a>
            <a className="py-2 px-2 m-1 bg-white3 border flex justify-center  hover:bg-pink hover:text-white" href="">TAILWIND</a>
            </div>
        </section>
        </div>
      </div>
  );
};

export default Blog;
