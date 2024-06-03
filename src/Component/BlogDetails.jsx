import React from "react";
import Products from "./Helper/BlogData";
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 my-8">
    <div className="col-span-3 md:col-span-2">
      {data ? (
        <div className="space-y-4 bg-white shadow-lg p-8">
          <img className="mx-auto" src={data.img} alt="" />
          <div className="space-y-4">
            <div className="flex items-center">
              <FaUser className="text-pink text-2xl" />
              <span className="ml-2">Admin </span>
              <FaTags className="text-pink text-3xl ml-4" />
              <span className="ml-2">Technology</span>
            </div>
            <p className="font-bold text-2xl">{data.title}</p>
            <p className="text-gray-600">{data.body}</p>
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
      ) : (
        <p>Data not found</p>
      )}
    </div>
    <div className="col-span-3 md:col-span-1 space-y-8">
      <div className="bg-white shadow-lg p-4">
        <p className="text-2xl">Search</p>
        <div className="relative my-2">
          <input
            type="search"
            className="w-full bg-purple-white shadow rounded p-3"
            placeholder="Search by name..."
          />
          <span className="absolute top-0 right-0 mt-3 mr-4">
            <FaSearch className="h-4 text-dark" />
          </span>
        </div>
      </div>
      <div className="bg-white shadow-lg p-4">
        <p className="text-2xl">Categories</p>
        <div className="space-y-2">
          {["Web Design", "Web Development", "Photography", "UI/UX Design", "Interior Design"].map(category => (
            <div className="hover:text-pink flex items-center" key={category}>
              <FaArrowRight className="mr-2" />
              <a href="">{category}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-lg p-4">
        <p className="text-2xl">Archives</p>
        <div className="space-y-2">
          {["September 2021", "October 2021", "August 2021", "July 2021", "June 2021"].map(archive => (
            <div className="hover:text-pink flex items-center" key={archive}>
              <FaArrowRight className="mr-2" />
              <a href="">{archive}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-lg p-4 rounded-lg">
        <p className="text-2xl mb-4">Tags</p>
        <div className="flex flex-wrap gap-2">
          {["HTML", "DESIGN", "NODE.JS", "EXPRESS.JS", "REACT", "TAILWIND"].map(tag => (
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

export default BlogDetails;
