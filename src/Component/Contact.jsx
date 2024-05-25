import React from "react";
import { FaAddressCard, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <section className="my-20">
      <div className="space-y-4  md:flex md:justify-center  space-x-14 w-full">
        <div className="flex pl-14 mt-4">
          <FaMapLocationDot className="h-16 w-16 p-2  text-white bg-pink" />
          <div>
            <p className="font-bold pl-4  font-abc text-2xl ">ADDRESS</p>
            <p className="text-grey2 pt-2 pl-4">Mirpur 11,Dhaka,Bangladesh</p>
          </div>
        </div>
        <div className="flex">
          <FaMailBulk className=" h-16 w-16 p-2  text-white bg-pink" />
          <div>
            <p className="font-bold pl-4 font-abc text-2xl ">EMAIL</p>
            <p className="text-grey2 pt-2 pl-4">
              <span className="font-semibold">Email :</span>mehedi193002106@.com
            </p>
          </div>
        </div>
        <div className="flex">
          <FaPhone className="h-16 w-16 p-2 text-white bg-pink" />
          <div>
            <p className="font-bold pl-4 font-abc text-2xl ">MY PHONE</p>
            <p className="text-grey2 pt-2 pl-4">
              <span className="font-semibold">Mobile :</span> 01770228395
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-full">
        <div>
          <h1 className=" flex justify-center text-3xl font-bold text-grey2 font-abc mt-16">
            Get In Touch
          </h1>
          <h1 className="flex justify-center text-xl px-8 text-center text-grey2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet maximus est.
          </h1>
        </div>
        {/* ref={form} onSubmit={sendEmail} */}
        <div class="flex justify-center mx-10 mt-14 md:mb-10">
          <form class="w-full md:w-full md:mx-80 space-y-3">
            <div>
              <p class="font-semibold text-grey2 pb-2">Your Name</p>
              <input
                class="w-full h-10 border border-grey2 focus:outline-pink px-3"
                type="text"
                name="u_name"
              />
            </div>
            <div>
              <p class="font-semibold text-grey2 pb-2">Your Email</p>
              <input
                class="w-full h-10 border border-grey2 focus:outline-pink px-3"
                type="email"
                name="u_email"
              />
            </div>
            <div>
              <p class="font-semibold text-grey2 pb-2">Your Message</p>
              <textarea
                class="w-full h-20 border border-grey2 focus:outline-pink px-3"
                name="message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="relative mt-4 md:mt-8 flex h-12 w-full items-center justify-center overflow-hidden bg-pink  text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-green before:duration-500 before:ease-in-out hover:shadow-pink hover:before:h-12 hover:before:w-full"
            >
              <span className="relative z-10">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
