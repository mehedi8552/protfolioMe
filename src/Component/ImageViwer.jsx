import React from "react";
import { useLottie } from "lottie-react";
import Linkbtn from "../assets/Image/link.png";
import ModalImage from "react-modal-image";
import Data from "../Component/Helper/ProtfolioData";

const Showpic = () => {
 let ProtfolioData = Data.slice(0, 4)
  const options = {
    animationData: Linkbtn,
    loop: true,
  };

  const View = useLottie(options);
  return (
    <section class="mx-auto w-fit">
      <div class="grid grid-cols-4 gap-4 ">
        {ProtfolioData.map((index, i) => (
          <div class=" relative overflow-hidden group">
            <img
              class="h-96 w-full object-cover"
              src={index.image}
              alt=""
            />
            <div class=" absolute h-full w-full bg-white/90 flex items-center justify-center -bottom-9 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div>
                <div className="flex justify-center space-x-3">
                  <button class="my-8 flex relative h-10 w-10 items-center justify-center overflow-hidden bg-white2 text-black hover:text-white2 shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-pink before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
                    <span class="relative z-10">
                      <ModalImage
                       className=""
                        key={i}
                        small={Linkbtn}
                        large={index.image}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showpic;
