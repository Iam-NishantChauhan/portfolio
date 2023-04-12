import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";

export const Experience = [
  {
    id: 1,
    date: "2019 - present",
    iconsSrc: <IoCodeWorking />,
    title: "B.Tech",
    location: "Guru Govind Singh Indraprastha University",
    description:
      "CGPA : 8.9 till 6th Sem",
  },
  {
    id: 2,
    date: "2018 - 2019",
    iconsSrc: <IoCodeWorking />,
    title: "12th",
    location: "Prabhu Dayal Public School , Delhi",
    description:
      "Percentage : 70.4 ",
  },
  {
    id: 3,
    date: "2016 - 2017",
    iconsSrc: <IoCodeWorking />,
    title: "10th",
    location: "St.Rosier Public School, Delhi",
    description:
      "CGPA : 8.2",
  },
];


export const Projects = [
  {
    id: 1,
    name: "Instagram Clone",
    imageSrc: img1,
    techs: "React Js, Sass CSS",
    github: "https://github.com/Iam-NishantChauhan/instgram-clone",
  },
  {
    id: 2,
    name: "GK Quiz App",
    imageSrc: img2,
    techs: "HTML, CSS, Javascript",
    github: "https://github.com/Iam-NishantChauhan/GK-Quiz",
  },
  {
    id: 3,
    name: "E-Commerce Cart",
    imageSrc: img3,
    techs: "React Js, CSS",
    github: "https://github.com/Iam-NishantChauhan/e-commerce-cart",
  },
];


export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Iam-NishantChauhan",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "https://twitter.com/Iam_Nishant__",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nishant-chauhan-75683320b/",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://wa.me/919310849910",
  },
];