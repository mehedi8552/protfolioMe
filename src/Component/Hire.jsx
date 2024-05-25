import React from "react";

const Hire = () => {
  return (
<div className="h-auto bg-card hover:bg-pink py-16 md:py-36">
  <div className="flex flex-col items-center text-center space-y-6 justify-center">
    <div>
      <p className="font-abc font-bold text-2xl md:text-4xl text-white py-2">
        Let's Work Together!
      </p>
      <p className="text-lg md:text-2xl pt-5 text-white">
        I am available for freelance projects. Hire me and get your project
        done.
      </p>
      <div className="flex items-center justify-center">
        <button className="my-8 flex relative h-[50px] w-40 items-center justify-center overflow-hidden bg-grey text-white shadow-2xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green before:duration-500 before:ease-out hover:shadow-pink hover:before:h-56 hover:before:w-56">
          <span className="relative z-10">HIRE ME</span>
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Hire;
