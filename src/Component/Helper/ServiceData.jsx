import {
  FaLaptopCode,
  FaPalette,
  FaPaintBrush,
  FaChartLine,
} from "react-icons/fa";
import { MdOutlineWebStories } from "react-icons/md";
import GraphicDesign from "../../assets/ServiceImage/Graphic Design.webp";
import UI_UX_forService from "../../assets/ServiceImage/UI_UX forService.png";
import WebDesign from "../../assets/ServiceImage/Web Design.webp";
import WebDevelopmentService from "../../assets/ServiceImage/Web DevelopmentService.jpg";

const data = [
  {
    id: 1,
    Logo: <FaLaptopCode className="text-7xl   " />,
    image:WebDesign,
    title: "Web Design",
    details: "Crafting Visually Stunning and User-Friendly Websites",
    description:
      "I specialize in creating beautiful and functional websites that provide an exceptional user experience. My approach to web design focuses on aesthetics, usability, and accessibility, ensuring that every site I design is not only visually appealing but also intuitive and easy to navigate. I stay up-to-date with the latest design trends and technologies to deliver modern and responsive designs that work seamlessly across all devices.",
  },
  {
    id: 2,
    Logo: <MdOutlineWebStories className="text-7xl   " />,
    image:WebDevelopmentService,
    title: "Web Development",
    details: "Building Robust and Scalable Web Applications",
    description:
      "As a web developer, I bring your web design to life with clean, efficient, and scalable code. I have experience in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, React, and Node.js. My development process includes thorough testing and optimization to ensure that your website is fast, secure, and performs well under high traffic. Whether it's a simple landing page or a complex web application, I am committed to delivering high-quality, reliable web solutions.",
  },
  {
    id: 3,
    Logo: <FaPalette className="text-7xl   " />,
    image:UI_UX_forService,
    title: "UI/UX Design",
    details: "Designing Intuitive and Engaging User Experiences",
    description:
      "I excel in creating user interfaces that are both visually appealing and highly functional. My expertise in UI/UX design ensures that users have a seamless and enjoyable interaction with your product. I conduct user research, develop wireframes and prototypes, and perform usability testing to refine the design and enhance user satisfaction. My goal is to create intuitive interfaces that facilitate easy navigation and promote user engagement.",
  },
  {
    id: 5,
    Logo: <FaPaintBrush className="text-7xl   " />,
    image:GraphicDesign,
    title: "Graphic Design",
    details: "Designing Intuitive and Engaging User Experiences",
    description: "I excel in creating user interfaces that are both visually appealing and highly functional. My expertise in UI/UX design ensures that users have a seamless and enjoyable interaction with your product. I conduct user research, develop wireframes and prototypes, and perform usability testing to refine the design and enhance user satisfaction. My goal is to create intuitive interfaces that facilitate easy navigation and promote user engagement."
  }
];

export default data;
