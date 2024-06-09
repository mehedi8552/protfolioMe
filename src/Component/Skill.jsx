import React from "react";
import ProgressBar from "./Helper/ProgressBar"; // Adjust the import path as necessary

const Progress = () => {
  const skills = [
    { label: "Web Design", percentage: 60 },
    { label: "Web Development", percentage: 88 },
    { label: "UI/UX Design", percentage: 65 },
    { label: "SEO Marketing", percentage: 38 },
    { label: "Graphic Design", percentage: 60 },
  ];

  return (
    <div className="py-4 bg-white3 xl:px-24">
      <div className="flex justify-center text-center pt-16">
        <div>
          <p className="font-abc font-bold text-3xl"> My Skill</p>
          <p className="text-grey2 pt-4">
            Providing expert Web Design, Web Development, UI/UX Design, and
            Graphic Design.
          </p>
        </div>
      </div>

      <div className=" bg-white rounded-lg mx-10 shadow-lg mt-11  pb-4">
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
