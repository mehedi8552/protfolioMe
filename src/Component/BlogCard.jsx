import React from "react";
import blogData from "../assets/data/blog";
import { FaTags, FaUser, FaSearch, FaArrowRight } from "react-icons/fa";
const BlogCard = () => {
  return (
    <div>
      <div className="">
       <div className="flex justify-center text-center">
         <div className="">
          <p>Latest Blog</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet maximus est.
          </p>
          </div>
          </div>
          <div className="flex justify-center px-32 my-16">
      <div className="grid grid-cols-3">
        {blogData.map((index) => (
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
                        <p className=" text-grey2  ">{index.body.slice(0, 70)}...</p>
                        <button class=" flex relative h-10 w-28 items-center justify-center overflow-hidden bg-grey text-white shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
                          <span class="relative z-10">READ MORE</span>
                        </button>
                      </div>
                    </div>
        ))}
      </div>
        
      </div>
    </div>
    </div>
  );
};

export default BlogCard;
