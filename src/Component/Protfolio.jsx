import React, { useState } from "react";
import lodash from "lodash";
import products from "./Helper/ProtfolioData";
import { FaLink } from "react-icons/fa";
import Eyebtn from "../assets/Image/eye1.png";
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
const Protfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === "All" ? products : lodash.filter(products, { category })
    );
  };

  return (
    <div className="text-center p-5">
      <h1 className="text-3xl font-bold mb-2">My Latest Portfolio</h1>
      <p className="text-grey mb-4">
        Here Is Some Of Our Recent Completed Project List That Will Help You
        Realise Our Production Quality.
      </p>
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === "All"
              ? "bg-orange text-white"
              : "bg-white text-black border border-grey"
          } transition-colors`}
          onClick={() => handleCategoryChange("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === "Design"
              ? "bg-orange text-white"
              : "bg-white text-black border border-grey"
          } transition-colors`}
          onClick={() => handleCategoryChange("Design")}
        >
          Design
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === "Development"
              ? "bg-orange text-white"
              : "bg-white text-black border border-grey"
          } transition-colors`}
          onClick={() => handleCategoryChange("Development")}
        >
          Development
        </button>
      </div>
      <section className="mx-20 md:mx-28">
        <div className="grid gap-6 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10">
          {filteredProducts.map((index, i) => (
            <div key={index.id} className="relative overflow-hidden group">
              <img
                className="h-48 w-72 object-cover"
                src={index.image}
                alt=""
              />
              <div className="absolute h-full w-full bg-white/90 flex items-center justify-center -bottom-9 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div>
                  <p className="font-abc text-2xl font-bold">{index.title}</p>
                  <div className="flex justify-center space-x-3">
                    <button className="my-8 flex relative h-10 w-10 items-center justify-center overflow-hidden bg-white2 text-black hover:text-white2 shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-pink before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
                      <span className="relative z-10">
                        <ModalImage
                          className=""
                          key={i}
                          small={Eyebtn}
                          large={index.image}
                        />
                      </span>
                    </button>
                    <button className="my-8 flex relative h-10 w-10 items-center justify-center overflow-hidden bg-white2 text-black shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-pink before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
                      <Link to={index.link} className="relative z-10">
                        <FaLink />
                      </Link>
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

export default Protfolio;
