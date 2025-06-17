/* eslint-disable */
import { BiCodeBlock } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineCloud, AiOutlineApi } from "react-icons/ai";
import { FaDatabase, FaServer, FaReact, FaJava } from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    icon: <BsCodeSlash />,
  },
  {
    id: 2,
    title: "Java Spring Boot Backend",
    icon: <FaJava />,
  },
  {
    id: 3,
    title: "REST API Development",
    icon: <AiOutlineApi />,
  },
  {
    id: 4,
    title: "React.js Frontend Development",
    icon: <FaReact />,
  },
  {
    id: 5,
    title: "Database Design & Management",
    icon: <FaDatabase />,
  },
  {
    id: 6,
    title: "Microservices Development",
    icon: <FaServer />,
  },
  {
    id: 7,
    title: "Cloud Deployment (AWS/Azure)",
    icon: <AiOutlineCloud />,
  },
  {
    id: 8,
    title: "Bug Fixing & Code Optimization",
    icon: <BiCodeBlock />,
  },
];
