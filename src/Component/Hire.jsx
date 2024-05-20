import React from "react";

const Hire = () => {
  return (
    <div className="h-96 w-full bg-card hover:bg-pink">
      <div className="py-36 flex items-center text-center space-y-10 justify-center">
        <div>
          <p className="font-abc font-bold text-4xl text-white py-2">
            Let's Work Together!
          </p>
          <p className="text-2xl pt-5 text-white">
            I am available for freelance projects. Hire me and get your project
            done.
          </p>
          <div className="flex items-center justify-center">
            <button class="my-8 flex relative h-[50px] w-40 items-center justify-center overflow-hidden bg-grey text-white shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
              <span class="relative z-10">HIRE ME</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
