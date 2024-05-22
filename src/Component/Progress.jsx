import React from "react";
import ProgressBar from "./Helper/ProgressBar"; // Adjust the import path as necessary

const Progress = () => {
  const skills = [
    { label: "Web Design", percentage: 90 },
    { label: "Web Development", percentage: 88 },
    { label: "UI/UX Design", percentage: 80 },
    { label: "SEO Marketing", percentage: 88 },
    { label: "Graphic Design", percentage: 88 },
  ];

  return (
    <div className="py-4 bg-white3">
      <div  className="flex justify-center text-center pt-16 ">
        <div >
        <p className="font-abc font-bold text-3xl"> My Skill</p>
        <p className="text-grey2 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          maximus est.
        </p>
      </div>
      </div>

      <div className=" bg-white3 rounded-lg mx-10 shadow-lg mt-11">
        <div className="grid grid-cols-2 gap-6 m-6">
          {skills.map((skill, index) => (
            <ProgressBar
              key={index}
              label={skill.label}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;
