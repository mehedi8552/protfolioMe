import React from "react";
import { FaEye, FaLink } from "react-icons/fa";
import image from "../assets/me.jpg";
const Work = () => {
  const imgData = [
    {
      title: "Crearive Design",
      img: image,
    },
    {
      title: "Crearive Design",
      img: image,
    },
    {
      title: "Crearive Design",
      img: image,
    },
    {
      title: "Crearive Design",
      img: image,
    },
    {
      title: "Crearive Design",
      img: image,
    },
    {
      title: "Crearive Design",
      img: image,
    },
    {
        title: "Crearive Design",
        img: image,
      },
      {
        title: "Crearive Design",
        img: image,
      },
  ];
  return (
    <div>
      <div className="grid justify-center  text-center">
       <div>
       <p className="font-abc font-bold text-4xl text-grey2 py-2 mt-20">My Latest Portfolio</p>
        <p className="text-2xl pt-5 text-grey2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          maximus est.
        </p>
        </div>
      </div>
      <section class="mx-auto w-fit p-12">
        <div class="grid grid-cols-4 gap-4 ">
          {imgData.map((index) => (
            <div class=" relative overflow-hidden group">
              <img class="h-96 w-full object-cover" src={index.img} alt="" />
              <div class=" absolute h-full w-full bg-white/90 flex items-center justify-center -bottom-9 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div>
                  <p className=" font-abc text-2xl font-bold">{index.title}</p>
                  <div className="flex justify-center space-x-3">
                    <button class="my-8 flex relative h-10 w-10 items-center justify-center overflow-hidden bg-white2 text-black  shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-pink before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
                      <span class="relative z-10">
                        <FaEye />
                      </span>
                    </button>
                    <button class="my-8 flex relative h-10 w-10 items-center justify-center overflow-hidden bg-white2 text-black hover:text-white2 shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-pink before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
                      <span class="relative z-10">
                        <FaLink />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
