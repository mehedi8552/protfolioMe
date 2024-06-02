import data from "./Helper/ServiceData"
import React from "react";
import { Link } from "react-router-dom";
const Services = () => {
  

  return (
    <div className="h-auto w-full bg-white2">
      <div className="flex items-center justify-center">
        <div>
          <h1 className="flex justify-center text-3xl font-bold text-grey2 font-abc mt-16">
            My Services
          </h1>
          <h1 className="flex justify-center text-xl px-4 md:px-8 text-center text-grey2 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet maximus est.
          </h1>
        </div>
      </div>
      <div className="mx-4 md:mx-28">
        <div className="grid gap-6 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
          {data.map((index) => (
            <div
              key={index.id}
              className="relative flex h-auto w-full max-w-xs items-center justify-center overflow-hidden bg-white shadow-md transition-all before:absolute before:h-0 before:w-0 before:bg-card before:duration-500 before:ease-out hover:shadow-pink hover:before:h-full hover:before:w-full hover:text-white"
            >
              <span className="relative z-10">
                <div className="flex justify-center">
                  <div className="space-y-2 py-16 px-4 text-center">
                    <p className="flex justify-center">{index.Logo}</p>
                    <p className="flex justify-center text-xl font-bold font-abc">
                      {index.title}
                    </p>
                    <p className="flex justify-center px-4 text-justify">
                      {index.details}.
                    </p>
                    <p className="flex justify-center text-justify">
                      <Link to={`/service-details/${index.id}`} className="flex justify-center rounded-full p-2 bg-grey text-white transition-colors duration-300 hover:bg-white hover:text-grey">
                        READ MORE 
                      </Link>
                    </p>
                  </div>
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
