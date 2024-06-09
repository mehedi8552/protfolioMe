import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";

const Resume = () => {
  const education = [
    {
      date: "2019-2024",
      title: "Green University Bangladesh",
      subtitle: "Bsc in Computer Engineer",
    },
    {
      date: "2014-2018",
      title: "Ashanullah Technical University",
      subtitle: "Diploma in Civil Engineer",
    },
    {
      date: "2002-2004",
      title: "Beluhar Nesaria Alim Madrasah",
      subtitle: "Dakhil Exam",
    },
  ];

  const experience = [
    {
      date: "2023-2024",
      title: "40+ Long and Short Project",
      subtitle: "Hands on Project Complete",
    },
    {
      date: "2023-2024",
      title: "100+ Problem Solve",
      subtitle: "Problem Solveing on CodeMama",
    },
    {
      date: "2023-2024",
      title: "18+ Live Test",
      subtitle: "Limited Time Live test On Ostad",
    },
  ];

  return (
    <div className="h-fit p-10 bg-white3 xl:px-24">
      <div className="flex justify-center text-center pt-16 ">
        <div>
          <p className="font-abc font-bold text-3xl">My Resume</p>
          <p className="text-grey2 pt-4">
            Here is my Educational experience and Development experience.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center  bg-white shadow-lg rounded-lg m-10">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4 font-abc pt-12">Education</h2>
          <VerticalTimeline>
            {education.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                <p>{item.date}</p>
                <p>{item.subtitle}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-bold mb-4 font-abc pt-12">Experience</h2>
          <VerticalTimeline>
            {experience.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<MdWork />}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                <p>{item.date}</p>
                <p>{item.subtitle}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Resume;
