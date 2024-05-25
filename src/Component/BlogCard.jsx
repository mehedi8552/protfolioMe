import React from "react";
import blogData from "../assets/data/blog";
import { FaTags, FaUser, FaSearch, FaArrowRight } from "react-icons/fa";
const BlogCard = () => {
  return (
<div>
  <div className="">
    <div className="flex flex-col items-center text-center">
      <div className="">
        <p className="text-3xl font-bold mb-2">Latest Blog</p>
        <p className="text-grey mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet maximus est.
        </p>
      </div>
    </div>
    <div className="flex justify-center px-4 md:px-16 lg:px-32 my-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((index) => (
          <div key={index.id} className="space-y-4 w-full bg-white shadow-lg my-8">
            <img className="w-full h-64 object-cover" src={index.img} alt="" />
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <FaUser className="text-pink text-2xl" />
                <span>Admin</span>
                <FaTags className="text-pink text-2xl ml-4" />
                <span>Technology</span>
              </div>
              <p className="font-abc text-grey2 font-bold text-2xl">
                {index.title}
              </p>
              <p className="text-grey2">{index.body.slice(0, 70)}...</p>
              <button className="flex relative h-10 w-28 items-center justify-center overflow-hidden bg-grey text-white shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">READ MORE</span>
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
