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
import img4 from "./images/4.png";

export const Experience = [
  {
    id: 1,
    date: "2024 - present",
    iconsSrc: <IoCodeWorking />,
    title: "Associate Software Engineer",
    location: "Accenture",
    description:
      "Tech Stack : Azure Devops, .Net, C#, React.js, PostgresSQL",
  },
  {
    id: 2,
    date: "2019 - 2023",
    iconsSrc: <IoCodeWorking />,
    title: "B.Tech",
    location: "Guru Gobind Singh Indraprastha University",
    description:
      "CGPA : 8.74",
  },
  {
    id: 3,
    date: "2018 - 2019",
    iconsSrc: <IoCodeWorking />,
    title: "12th",
    location: "Prabhu Dayal Public School , Delhi",
    description:
      "Percentage : 70.4 ",
  },
  {
    id: 4,
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
    name: "Pin Your Mood",
    imageSrc: img2,
    techs: "ReactJs, Javascript, Tailwind CSS",
    github: "https://github.com/Iam-NishantChauhan/MajorProject",
  },
  {
    id: 2,
    name: "Instagram Clone",
    imageSrc: img1,
    techs: "React Js, Sass CSS",
    github: "https://github.com/Iam-NishantChauhan/instgram-clone",
  },
  {
    id: 3,
    name: "E-Commerce Cart",
    imageSrc: img3,
    techs: "React Js, CSS",
    github: "https://github.com/Iam-NishantChauhan/e-commerce-cart",
  },
  {
    id: 4,
    name: "Image Viewer",
    imageSrc: img4,
    techs: "React Js, CSS",
    github: "https://github.com/Iam-NishantChauhan/image-viewer",
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
    link: "https://x.com/Iam_Nishanttt",
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
