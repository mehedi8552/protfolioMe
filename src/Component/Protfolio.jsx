import React, { useState } from "react";
import lodash from "lodash";
import { FaLink } from "react-icons/fa";
import Eyebtn from "../assets/eye1.png";
import ModalImage from "react-modal-image";
const Protfolio = () => {
  const products = [
    {
      id: 1,
      title: "Design Project 1",
      category: "Design",
      image: "https://cdn.dummyjson.com/product-images/1/1.jpg",
    },
    {
      id: 2,
      title: "Development Project 1",
      category: "Development",
      image: "https://cdn.dummyjson.com/product-images/1/1.jpg",
    },
    {
      id: 3,
      title: "App Project 1",
      category: "App",
      image: "https://cdn.dummyjson.com/product-images/1/1.jpg",
    },
    {
      id: 4,
      title: "Design Project 2",
      category: "Design",
      image: "https://cdn.dummyjson.com/product-images/1/1.jpg",
    },
    {
      id: 5,
      title: "Development Project 2",
      category: "Development",
      image: "https://cdn.dummyjson.com/product-images/1/1.jpg",
    },
    {
      id: 6,
      title: "App Project 2",
      category: "App",
      image: "https://cdn.dummyjson.com/product-images/1/1.jpg",
    },
    // Add more product objects as needed...
  ];

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
        maximus est.
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
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === "App"
              ? "bg-orange text-white"
              : "bg-white text-black border border-grey"
          } transition-colors`}
          onClick={() => handleCategoryChange("App")}
        >
          App
        </button>
      </div>
      <section className="mx-auto w-full p-4 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((index, i) => (
            <div key={index.id} className="relative overflow-hidden group">
              <img
                className="h-64 md:h-96 w-full object-cover"
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
                      <span className="relative z-10">
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

export default Protfolio;
