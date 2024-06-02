import {
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaPaintBrush,
  FaChartLine,
} from "react-icons/fa";
import { MdOutlineWebStories } from "react-icons/md";
import img from "../../assets/What-is-Web-Developer.jpg";
//const img = 0;
const data = [
  {
    id: 1,
    Logo: <FaLaptopCode className="text-7xl   " />,
    image:img,
    title: "Web Design",
    details: "Crafting Visually Stunning and User-Friendly Websites",
    description:
      "I specialize in creating beautiful and functional websites that provide an exceptional user experience. My approach to web design focuses on aesthetics, usability, and accessibility, ensuring that every site I design is not only visually appealing but also intuitive and easy to navigate. I stay up-to-date with the latest design trends and technologies to deliver modern and responsive designs that work seamlessly across all devices.",
  },
  {
    id: 2,
    Logo: <MdOutlineWebStories className="text-7xl   " />,
    image:img,
    title: "Web Development",
    details: "Building Robust and Scalable Web Applications",
    description:
      "As a web developer, I bring your web design to life with clean, efficient, and scalable code. I have experience in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, React, and Node.js. My development process includes thorough testing and optimization to ensure that your website is fast, secure, and performs well under high traffic. Whether it's a simple landing page or a complex web application, I am committed to delivering high-quality, reliable web solutions.",
  },
  {
    id: 3,
    Logo: <FaPalette className="text-7xl   " />,
    image:img,
    title: "UI/UX Design",
    details: "Designing Intuitive and Engaging User Experiences",
    description:
      "I excel in creating user interfaces that are both visually appealing and highly functional. My expertise in UI/UX design ensures that users have a seamless and enjoyable interaction with your product. I conduct user research, develop wireframes and prototypes, and perform usability testing to refine the design and enhance user satisfaction. My goal is to create intuitive interfaces that facilitate easy navigation and promote user engagement.",
  },
  {
    id: 5,
    Logo: <FaPaintBrush className="text-7xl   " />,
    image:img,
    title: "Graphic Design",
    details: "Designing Intuitive and Engaging User Experiences",
    description: "I excel in creating user interfaces that are both visually appealing and highly functional. My expertise in UI/UX design ensures that users have a seamless and enjoyable interaction with your product. I conduct user research, develop wireframes and prototypes, and perform usability testing to refine the design and enhance user satisfaction. My goal is to create intuitive interfaces that facilitate easy navigation and promote user engagement."
  },
  {
    id: 6,
    Logo: <FaChartLine className="text-7xl   " />,
    image:img,
    title: "SEO Marketing",
    details: "Transforming Spaces with Style and Functionality",
    description:
      "With a strong sense of aesthetics and functionality, I offer interior design services that transform spaces into inspiring environments. My designs are tailored to meet the unique needs and preferences of each client, whether it's a cozy home, a chic office, or a dynamic retail space. I focus on creating harmonious layouts, selecting the right materials and colors, and optimizing space utilization to enhance both the look and feel of the interior. My attention to detail and commitment to quality ensures that every project is completed to the highest standard.",
  },
];

export default data;
