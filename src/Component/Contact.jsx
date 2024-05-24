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
        <div className="flex justify-center mt-14  md:mb-10">
          {/* ref={form} onSubmit={sendEmail} */}
          <form className="space-y-3 ">
            <div>
              <p className="font-semibold text-grey2 pb-2">Your Name</p>
              <input
                className="w-80 h-10 md:w-full border border-grey2  focus:outline-pink"
                type="text"
                name="u_name"
              />
            </div>
            <div>
            <p className="font-semibold text-grey2 pb-2">Your Email</p>
            <input
              placeholder=" Email"
              className="w-80 h-10 md:w-96 border border-grey2  focus:outline-pink"
              type="email"
              name="u_email"
            />
            </div>
            <div>
            <p className="font-semibold text-grey2 pb-2"></p>
            <textarea
              placeholder=" Message"
              className="w-80 h-20 md:w-96 border border-grey2  focus:outline-pink"
              name="message"
            />
            </div>
            <input
              className="w-80 h-10 md:w-96 hover:shadow-pink cursor-pointer bg-green text-white"
              type="submit"
              value="Send Message" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
