import React from "react";
import BlogData from "./Helper/BlogData";
import { NavLink } from "react-router-dom";
import { FaTags, FaUser } from "react-icons/fa";
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
    <div className="mx-20 xl:mx-32 md:mx-28">
    {/* grid gap-6 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BlogData.map((index) => (
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
              <NavLink to={`/blog-details/${index.id}`}>
                  <button className="mt-4 flex h-10 w-28 items-center justify-center bg-grey text-white shadow-2xl rounded-full transition-all hover:shadow-pink">
                    <span className="relative z-10">READ MORE</span>
                  </button>
                </NavLink>
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
