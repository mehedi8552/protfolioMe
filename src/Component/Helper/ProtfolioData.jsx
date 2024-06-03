import FitnessImage from "../../assets/ServiceImage/FitnessImage.png"
import CdsImage from "../../assets/ServiceImage/CdsImage.png"
import TouringImage from "../../assets/ServiceImage/TouringImage.png"

import Contact from "../../assets/ServiceImage/Contact.png"
import CRUD from "../../assets/ServiceImage/CRUD Project.png"
import Protfolio from "../../assets/ServiceImage/Protfolio.png"
import Shope from "../../assets/ServiceImage/Shope.png"

const products = [
    {
      id: 1,
      title: "Touring Blog website",
      category: "Design",
      image:TouringImage,
      link:"https://www.figma.com/design/iEjhp9TgLeRIc18y9B27Zu/Blog-Website?node-id=0-1&t=YAlGujnOpjilI1uT-1"
    },
    {
      id: 2,
      title: "My Protfolio",
      category: "Development",
      image: Protfolio,
      link:"https://mehediprotfolio.netlify.app/contact-us"
    },
    {
      id: 3,
      title: "Charity Donation System",
      category: "Design",
      image: CdsImage,
      link:"https://www.figma.com/design/FRESmFiEH6THAuvSTWozE7/CDS?node-id=0-1&t=gLw7CCysAZowusRx-1"
    },
    {
      id: 4,
      title: "Fitness App Design",
      category: "Design",
      image: FitnessImage,
      link:"https://www.figma.com/design/aY81uPPccpWjEscIH2PjlT/Fitness-App?node-id=0-1&t=13hkJTcLaWEgz01z-1"
    },
    {
      id: 5,
      title: "CRUD Project",
      category: "Development",
      image: CRUD,
      link:"https://mehedi13.netlify.app/Login"
    },
    {
      id: 6,
      title: "Contact Page",
      category: "Development",
      image: Contact,
      link:"https://contact202.netlify.app/"
    },
    {
        id: 7,
        title: "Shope",
        category: "Development",
        image: Shope,
        link:"https://mehedi-shpe.netlify.app/"
      },
    // Add more product objects as needed...
  ];

  export default products;