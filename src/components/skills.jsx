import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiPostman,
  SiVite,
  SiFigma,
  SiRedux,
  SiFirebase,
  SiNetlify,
} from "react-icons/si";

import {
  FaPython,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";

import {
  TbBrandCpp,
  TbApi,
} from "react-icons/tb";

export const skills = [
  // Frontend
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Redux", icon: SiRedux },

  // Backend
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
  { name: "REST API", icon: TbApi },

  // Programming
  { name: "C++", icon: TbBrandCpp },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },

  // AI / ML
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "OpenCV", icon: SiOpencv },

  // Tools
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Vite", icon: SiVite },
  { name: "Figma", icon: SiFigma },
  { name: "Netlify", icon: SiNetlify },
];