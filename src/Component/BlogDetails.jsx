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
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 lg:px-16 my-8">
  <div class="col-span-2 md:col-span-1">
    {data ? (
      <div class="space-y-4 bg-white shadow-lg p-8">
        <img class="mx-auto" src={data.img} alt="" />
        <div class="space-y-4">
          <div class="flex items-center">
            <FaUser class="text-pink text-2xl" />
            <span class="ml-2">Admin </span>
            <FaTags class="text-pink text-3xl ml-4" />
            <span class="ml-2">Technology</span>
          </div>
          <p class="font-bold text-2xl">{data.title}</p>
          <p class="text-gray-600">{data.body}</p>
          <ul class="flex gap-2">
            <span class="font-bold">Tags:</span>
            <li class="py-2 px-2 bg-gray-200 border">Html</li>
            <li class="py-2 px-2 bg-gray-200 border">Node.js</li>
            <li class="py-2 px-2 bg-gray-200 border">Express.js</li>
          </ul>
          <ul class="flex gap-2">
            <span class="font-bold">Share:</span>
            <a class="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white">
              <FaFacebookF />
            </a>
            <a class="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white">
              <FaLinkedinIn />
            </a>
            <a class="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white">
              <FaMailBulk />
            </a>
            <a class="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white">
              <FaInstagram />
            </a>
          </ul>
        </div>
      </div>
    ) : (
      <p>Data not found</p>
    )}
  </div>
  <div class="space-y-8">
    <div class="bg-white shadow-lg p-4">
      <p class="text-2xl">Search</p>
      <div class="relative my-2">
        <input type="search" class="w-full bg-purple-white shadow rounded p-3" placeholder="Search by name..." />
        <span class="absolute top-0 right-0 mt-3 mr-4">
          <FaSearch class="h-4 text-dark" />
        </span>
      </div>
    </div>
    <div class="bg-white shadow-lg p-4">
      <p class="text-2xl">Categories</p>
      <div class="space-y-2">
        <div class="hover:text-pink flex items-center">
          <FaArrowRight class="mr-2" />
          <a href="">Web Design</a>
        </div>
        <div class="hover:text-pink flex items-center">
          <FaArrowRight class="mr-2" />
          <a href="">Web Development</a>
        </div>
        <div class="hover:text-pink flex items-center">
          <FaArrowRight class="mr-2" />
          <a href="">Photography</a>
        </div>
        <div class="hover:text-pink flex items-center">
          <FaArrowRight class="mr-2" />
          <a href="">UI/UX Design</a>
        </div>
        <div class="hover:text-pink flex items-center">
          <FaArrowRight class="mr-2" />
          <a href="">Interior Design</a>
        </div>
      </div>
    </div>
    <div class="bg-white shadow-lg p-4">
      <p class="text-2xl">Archives</p>
      <div class="space-y-2">
        <div class="hover:text-pink flex items-center">
          <FaArrowRight class="mr-2" />
          <a href="">September 2021</a>
        </div>
        <div class="hover:text-pink flex items-center">
          <FaArrowRight class="mr-2" />
          <a href="">October 2021</a>
        </div>
        <div class="hover:text-pink flex items-center">
          <FaArrowRight class="mr-2" />
          <a href="">August 2021</a>
        </div>
        <div class="hover:text-pink flex items-center">
          <FaArrowRight class="mr-2" />
          <a href="">July 2021</a>
        </div>
        <div class="hover:text-pink flex items-center">
          <FaArrowRight class="mr-2" />
          <a href="">June 2021</a>
        </div>
       
      </div>
    </div>
    <div class="bg-white shadow-lg p-4">
      <p class="text-2xl pb-2">Tags</p>
      <div class="grid grid-cols-2 gap-2">
        <a class="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white text-center">HTML</a>
        <a class="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white text-center">Node.js</a>
        <a class="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white text-center">Express.js</a>
        <a class="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white text-center">MongoDB</a>
        <a class="py-2 px-2 bg-gray-200 border hover:bg-pink hover:text-white text-center">React.js</a>
        {/* <!-- Other tags --> */}
      </div>
    </div>
  </div>
</div>

  );
};

export default BlogDetails;
