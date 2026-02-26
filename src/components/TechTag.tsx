import type { IconType } from "react-icons";
import { DiJava, DiNetbeans } from "react-icons/di";
import { FaBootstrap, FaDiscord, FaGithub, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMongoose, SiMysql, SiTypescript } from "react-icons/si";

export type TechKey =
  | "nodejs"
  | "mongodb-nosql"
  | "mongoose"
  | "discord-api"
  | "php"
  | "mysql"
  | "javascript"
  | "bootstrap"
  | "git"
  | "tailwind"
  | "typescript"
  | "reactjs"
  | "html"
  | "java"
  | "apache-netbeans";

type SizeVariant = "nm" | "lg";
type StyleVariant = "dark" | "light" | "solid-dark" | "solid-light";

type TechProps = {
  tech: TechKey;
  sizing?: SizeVariant;
  style?: StyleVariant;
};

type TechConfig = {
  name: string;
  icon: IconType;
  colors: {
    bg800: string;
    bg400: string;
    border400: string;
    border800: string;
    text400: string;
    text800: string;
  };
};

const TECH_MAP: Record<TechKey, TechConfig> = {
  "nodejs": {
    name: "Node.js",
    icon: FaNodeJs,
    colors: {
      bg800: "bg-green-800",
      bg400: "bg-green-600",
      border400: "border-green-600",
      border800: "border-green-800",
      text800: "text-green-800",
      text400: "text-green-400"
    },
  },
  "mongodb-nosql": {
    name: "MongoDB Atlas (NoSQL)",
    icon: SiMongodb,
    colors: {
      bg800: "bg-green-800",
      bg400: "bg-green-600",
      border400: "border-green-600",
      border800: "border-green-800",
      text400: "text-green-400",
      text800: "text-green-800",
    },
  },
  "mongoose": {
    name: "Mongoose API",
    icon: SiMongoose,
    colors: {
      bg800: "bg-green-800",
      bg400: "bg-green-600",
      border400: "border-green-600",
      border800: "border-green-800",
      text400: "text-green-400",
      text800: "text-green-800",
    },
  },
  "discord-api": {
    name: "Discord API",
    icon: FaDiscord,
    colors: {
      bg800: "bg-indigo-800",
      bg400: "bg-indigo-400",
      border400: "border-indigo-400",
      border800: "border-indigo-800",
      text400: "text-indigo-400",
      text800: "text-indigo-800",
    },
  },
  "php": {
    name: "PHP",
    icon: FaPhp,
    colors: {
      bg800: "bg-purple-800",
      bg400: "bg-purple-400",
      border400: "border-purple-400",
      border800: "border-purple-800",
      text400: "text-purple-400",
      text800: "text-purple-800",
    },
  },
  "mysql": {
    name: "MySQL",
    icon: SiMysql,
    colors: {
      bg800: "bg-orange-800",
      bg400: "bg-orange-400",
      border400: "border-orange-400",
      border800: "border-orange-800",
      text400: "text-orange-400",
      text800: "text-orange-800",
    },
  },
  "javascript": {
    name: "JavaScript",
    icon: IoLogoJavascript,
    colors: {
      bg800: "bg-yellow-800",
      bg400: "bg-yellow-400",
      border400: "border-yellow-400",
      border800: "border-yellow-800",
      text400: "text-yellow-400",
      text800: "text-yellow-800",
    },
  },
  "bootstrap": {
    name: "Bootstrap CSS",
    icon: FaBootstrap,
    colors: {
      bg800: "bg-purple-800",
      bg400: "bg-purple-400",
      border400: "border-purple-400",
      border800: "border-purple-800",
      text400: "text-purple-400",
      text800: "text-purple-800",
    },
  },
  "git": {
    name: "Git Repository",
    icon: FaGithub,
    colors: {
      bg800: "bg-gray-800",
      bg400: "bg-gray-400",
      border400: "border-gray-400",
      border800: "border-gray-800",
      text400: "text-gray-400",
      text800: "text-gray-800",
    },
  },
  "tailwind": {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    colors: {
      bg800: "bg-sky-800",
      bg400: "bg-sky-400",
      border400: "border-sky-400",
      border800: "border-sky-800",
      text400: "text-sky-400",
      text800: "text-sky-800",
    },
  },
  "typescript": {
    name: "TypeScript",
    icon: SiTypescript,
    colors: {
      bg800: "bg-blue-800",
      bg400: "bg-blue-400",
      border400: "border-blue-400",
      border800: "border-blue-800",
      text400: "text-blue-400",
      text800: "text-blue-800",
    },
  },
  "reactjs": {
    name: "React JS",
    icon: FaReact,
    colors: {
      bg800: "bg-cyan-800",
      bg400: "bg-cyan-400",
      border400: "border-cyan-400",
      border800: "border-cyan-800",
      text400: "text-cyan-400",
      text800: "text-cyan-800",
    },
  },
  "html": {
    name: "HTML",
    icon: IoLogoHtml5,
    colors: {
      bg800: "bg-orange-800",
      bg400: "bg-orange-400",
      border400: "border-orange-400",
      border800: "border-orange-800",
      text400: "text-orange-400",
      text800: "text-orange-800",
    },
  },
  "java": {
    name: "Java",
    icon: DiJava,
    colors: {
      bg800: "bg-red-800",
      bg400: "bg-red-400",
      border400: "border-red-400",
      border800: "border-red-800",
      text400: "text-red-400",
      text800: "text-red-800",
    },
  },
  "apache-netbeans": {
    name: "Apache Netbeans",
    icon: DiNetbeans,
    colors: {
      bg800: "bg-red-800",
      bg400: "bg-red-400",
      border400: "border-green-400",
      border800: "border-green-800",
      text400: "text-blue-400",
      text800: "text-blue-800",
    },
  },
};

const SIZE_CLASSES: Record<SizeVariant, string> = {
  nm: "px-2 py-0.5",
  lg: "px-4 py-1",
};

const TechTag = ({
  tech,
  sizing = "nm",
  style = "dark",
}: TechProps) => {
  const config = TECH_MAP[tech];

  if (!config) return null;

  const { name, icon: TagIcon, colors } = config;

  let containerClasses =
    "w-fit h-fit flex items-center justify-center rounded-full space-x-2 ";
  let iconClasses = "text-lg font-bold p-1 rounded-full ";
  let textClasses = "text-xs ";

  // Size
  containerClasses += SIZE_CLASSES[sizing] + " ";

  // Style variants
  switch (style) {
    case "dark":
      containerClasses += `border ${colors.border400} `;
      iconClasses += `bg-white ${colors.text800} `;
      textClasses += "text-white";
      break;

    case "light":
      containerClasses += `border ${colors.border400} `;
      iconClasses += `bg-white font-bold ${colors.text800} `;
      textClasses += colors.text800;
      break;

    case "solid-dark":
      containerClasses += `${colors.bg800} border ${colors.border800}`;
      iconClasses += "text-white ";
      textClasses += "text-white font-bold";
      break;

    case "solid-light":
      containerClasses += `${colors.bg400} border ${colors.border400}`;
      iconClasses += "text-black ";
      textClasses += "text-black font-bold";
      break;
  }

  return (
    <div className={containerClasses}>
      <span className={iconClasses}>
        <TagIcon />
      </span>
      <p className={textClasses}>{name}</p>
    </div>
  );
};

export default TechTag;