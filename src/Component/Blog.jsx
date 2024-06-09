import React from "react";
import BlogData from "./Helper/BlogData";
import { FaTags, FaUser, FaSearch, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Blog = () => {
  return (
    <div className="max-w-screen-2xl mx-10 px-4 lg:px-18 my-16 xl:mx-28">
      <div className="text-center">
        <p className="text-3xl font-bold mb-2">Latest Blog</p>
        <p className="text-grey mb-4">Here Is Some Of Our Recent Blog List.</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {BlogData.map((index) => (
            <div
              key={index.id}
              className="space-y-4 bg-white shadow-lg my-8 p-4 rounded-lg"
            >
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={index.img}
                alt=""
              />
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  <FaUser className="text-pink" />
                  <span>Admin</span>
                  <FaTags className="text-pink ml-4" />
                  <span>Technology</span>
                </div>
                <p className="font-abc text-grey2 font-bold text-xl">
                  {index.title}
                </p>
                <p className="text-grey2">{index.body.slice(0, 80)}...</p>
                <NavLink to={`/blog-details/${index.id}`}>
                  <button className="mt-4 flex h-10 w-28 items-center justify-center bg-grey text-white shadow-2xl rounded-full transition-all hover:shadow-pink">
                    <span className="relative z-10">READ MORE</span>
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full xl:w-96 lg:w-80 mt-8 lg:mt-0 lg:ml-8 space-y-8">
          <div className="bg-white shadow-lg p-4 mt-8 rounded-lg">
            <p className="text-2xl mb-4 ">Search</p>
            <div className="relative">
              <input
                type="search"
                className="bg-purple-white shadow rounded w-full p-3"
                placeholder="Search by name..."
              />
              <span className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-purple-lighter">
                <FaSearch className="h-4 text-dark" />
              </span>
            </div>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <p className="text-2xl mb-4">Categories</p>
            <div className="space-y-2">
              {[
                "Web Design",
                "Web Development",
                "Apps Development",
                "Photography",
                "UI/UX Design",
                "Interior Design",
              ].map((category) => (
                <div
                  className="hover:text-pink flex items-center space-x-2"
                  key={category}
                >
                  <FaArrowRight />
                  <a className="hover:text-pink" href="#">
                    {category}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <p className="text-2xl mb-4">Archives</p>
            <div className="space-y-2">
              {[
                "September 2021",
                "October 2024",
                "August 2024",
                "July 2024",
                "June 2024",
                "May 2024",
              ].map((month) => (
                <div
                  className="hover:text-pink flex items-center space-x-2"
                  key={month}
                >
                  <FaArrowRight />
                  <a className="hover:text-pink" href="#">
                    {month}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <section className="bg-white shadow-lg p-4 rounded-lg">
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
                  className="py-2 px-4 bg-white3 border rounded hover:bg-pink hover:text-white"
                  href="#"
                >
                  {tag}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;
