import { FaLaptopCode,FaPalette, FaMobileAlt, FaPaintBrush, FaChartLine } from "react-icons/fa";
import { MdOutlineWebStories } from "react-icons/md";
import React from "react";
const Services = () => {

  const data = 
    [
      {
        
        "id": 1,
        "Logo":< FaLaptopCode  className="text-7xl text-gray-500  "/>,
        "title": "Web Design",
        "body": "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque."
      },
      {
        
        "id": 2,
        "Logo":< MdOutlineWebStories  className="text-7xl text-gray-500  "/>,
        "title": "Web Development",
        "body": "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque."
      },
      {
        
        "id": 3,
        "Logo":< FaPalette  className="text-7xl text-gray-500  "/>,
        "title": "UI/UX Design",
        "body": "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque."
      },
      {
        
        "id": 4,
        "Logo":< FaMobileAlt  className="text-7xl text-grey  "/>,
        "title": "App Design & Develop",
        "body": "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque."
      },
      {
        
        "id": 5,
        "Logo":< FaPaintBrush  className="text-7xl text-gray-500  "/>,
        "title": "Graphic Design",
        "body": "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque."
      },
      {
        
        "id": 6,
        "Logo":< FaChartLine  className="text-7xl text-gray-500  "/>,
        "title": "SEO Marketing",
        "body": "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque."
      }
    ];
  
  return (
    <div className="h-auto w-full bg-white2">
      <div className="flex items-center justify-center">
        <div>
          <h1 className=" flex justify-center text-3xl font-bold text-grey2 font-abc mt-16">
            My Services
          </h1>
          <h1 className="flex justify-center text-xl px-8 text-center text-grey2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet maximus est.
          </h1>
        </div>
      </div>
      <div className="mx-28 ">
        <div className=" grid gap-6 place-items-center md:grid-cols-3 lg:grid-cols-3 grid-cols-1 py-14">
          {data.map((index) => (
            <button
              key={index.id}
              class="relative flex h-96 w-96 items-center justify-center overflow-hidden bg-white hover:text-white shadow-md transition-all before:absolute before:h-0 before:w-0 before:bg-card before:duration-500 before:ease-out hover:shadow-pink hover:before:h-96 hover:before:w-96"
            >
              <span class="relative z-10">
                <div className="flex  justify-center">
                  <div className="space-y-2 pt-16 ">
                    <p className="flex justify-center">
                      {index.Logo}
                    </p>
                    <p className="flex  justify-center text-xl font-bold font-abc">
                      {index.title}
                    </p>
                    <p className="flex justify-center px-4 text-justify ">
                      {index.body}
                    </p>
                  </div>
                </div>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
