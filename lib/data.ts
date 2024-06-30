import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiConsoleController } from "react-icons/gi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

//import corpcommentImg from "@/public/corpcomment.png";
//import rmtdevImg from "@/public/rmtdev.png";
//import wordanalyticsImg from "@/public/wordanalytics.png";
// importing my pics
import easyPasswordGenImg from "@/public/easyPasswordGenPic.png";
import ReactPlayerImg from "@/public/ReactPlayer.png";
import tindogImg from "@/public/tindog.png";
import SlimeGoUpPic from "@/public/SlimeGoUpPic.png"
import { LuMonitorCheck } from "react-icons/lu";

import { Html } from "@react-email/components";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern FullStack Developer",
    location: "Remote, IL",
    description:
      "In this role, I developed and optimized a sophisticated Node.js bot, implementing robust chat functionalities, localization features, and cutting-edge image alteration functionalities. My proactive approach to staying ahead of industry trends and delivering exceptional user experiences is endorsed by a recommendation letter from team lead Nof Levi.",
    icon: React.createElement(IoChatboxEllipsesOutline),
    date: "2022 - 2023",
    link:null

   
  },
  {
    title: "Information Technology specialist",
    location: "katsrin golan heights, IL",
    description:
      "Performed database operations using PL/SQL for viewing and committing data. Administered systems, managing accounts, permissions and ensured efficient functionality, alongside various IT responsibilities.",
    icon: React.createElement(LuMonitorCheck),
    date: "2022 - 2023",
    link:null

   
  },
  {
    title: "FreeLance Gig",
    location: "Remote, IL",
    description:
      "Created A Video-Player Website Using ReactJS. it was uploaded to github pages, link below",
    icon: React.createElement(FaReact),
    date: "2021",
    link:"https://greengran.github.io/React-player/"

   
  },
  {
    title: "Game Development",
    location: "Remote, IL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(GiConsoleController),
    date: "2021",
    link:null
  },
  {
    title: "Graduated  Practical Software Engineer",
    location: "TelHai collage, IL",
    description:
      "I graduated after two and a half years of studying. During this time, I mastered the fundamentals of programming, from C to HTML and JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
    link:null
  },
] as const;

export const projectsData = [
  {
    title: "React-Video-Player",
    description:
      "I worked as a full-stack developer on this freelance project. Users can upload videos and view them with functionality such as slowing down, frame capture, clicking on timeline to move and much more.",
    tags: ["ReactJS", "CSS", "HTML", "matirialUI", "JavaScript"],
    imageUrl: ReactPlayerImg,
  },
  {
    title: "EasyPasswordGen",
    description:
      "Easy to use password creator website with save function that saves id,name for the file, password, time it was created and customizability of the  password. Made with just vanila JavaScript. CSS and HTML so it can run on any browser",
    tags: ["JavaScrip", "CSS", "HTML",],
    imageUrl: easyPasswordGenImg,
  },
  {
    title: "Slime Go Up",
    description:
      "indie game I made and publised to google using Unity with C#. It has ads,skins,shop, timed rewardds and more. Unlisted as of now",
    tags: ["unity", "c#",],
    imageUrl: SlimeGoUpPic,
  },
  {
    title: "CHANGE TO SLIME GO UP LATER",
    description:
      "Tindog! a mock up front-end web site for online dog dating",
    tags: ["JavaScrip", "CSS", "HTML","bootStrap",],
    imageUrl: tindogImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "C#",
  "Java",
  "MongoDB",
  "Unity",
  "Express",
  "Python",
  "Framer Motion",
] as const;