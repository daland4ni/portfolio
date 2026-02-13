import "../index.css";
import { Tooltip } from 'react-tooltip';
import { FaCss3Alt, FaPhp, FaReact, FaVuejs, FaBootstrap, FaGithub, FaNodeJs } from "react-icons/fa";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { FiMoreHorizontal } from "react-icons/fi";
import type { IconType } from 'react-icons';

const languages = [
    { id: "html", name: "HTML5", Icon: IoLogoHtml5 },
    { id: "css", name: "CSS3", Icon: FaCss3Alt },
    { id: "js", name: "JavaScript", Icon: IoLogoJavascript },
    { id: "ts", name: "TypeScript", Icon: SiTypescript },
    { id: "php", name: "PHP", Icon: FaPhp },
    { id: "etc", name: "and more...", Icon: FiMoreHorizontal }
]

const frameworks = [
    { id: "react", name: "React JS", Icon: FaReact },
    { id: "vue", name: "Vue JS", Icon: FaVuejs },
    { id: "tailwind", name: "Taildwind CSS", Icon: RiTailwindCssFill },
    { id: "bootstrap", name: "Bootstrap CSS", Icon: FaBootstrap }
]

const techs = [
    { id: "git", name: "Git & GitHub", Icon: FaGithub },
    { id: "node", name: "Node.js", Icon: FaNodeJs },
    { id: "mongodb", name: "MongoDB Atlas (NoSQL)", Icon: SiMongodb },
    { id: "mysql", name: "MySQL", Icon: SiMysql },
    { id: "postman", name: "Postman (HTTP)", Icon: SiPostman }
]

interface Skill { id: string; name: string; Icon: IconType; }
interface IconListProps { items: Skill[]; }

const StackIt = ({ items }: IconListProps) => {
    return (
        <div className="flex flex-row gap-2 justify-center">
            {items.map(({ id, name, Icon }) => (
                <span
                    key={id}
                    className="p-1.5 rounded-full w-fit text-4xl 
                    bg-white text-black 
                    hover:bg-black hover:text-yellow-300
                    active:bg-black active:text-yellow-300"
                    data-tooltip-id={id}
                    data-tooltip-content={name}
                >
                    <Icon />
                </span>
            ))}
            <Tooltip anchorSelect="[data-tooltip-id]" place="bottom" />
        </div>
    )
}

function Stack() {

    const BoxStyle = "p-3 bg-white grid grid-rows-2 grid-cols-1 mb-3";

    return (
        <div className="bg-gray-900 text-white -mt-70 pt-70 lg:pt-60 pb-10">
            <p className="text-center font-bold mb-3 text-xl -mt-10 lg:mb-13 lg:mt-2 lg:text-2xl">SKILLS</p>

            <div className="px-4">
                <div className=" grid gap-2 justify-center lg:mx-30 lg:gap-7
                grid-rows-3 grid-cols-1 
                lg:grid-cols-3 lg:grid-rows-1">
                    <div className={BoxStyle}>
                        <div>
                            <p className="text-black font-bold text-center">LANGUAGES</p>
                        </div>
                        <StackIt items={languages} />
                    </div>
                    <div className={BoxStyle}>
                        <div>
                            <p className="text-black font-bold text-center">FRAMEWORKS</p>
                        </div>
                        <StackIt items={frameworks} />
                    </div>
                    <div className={BoxStyle}>
                        <div>
                            <p className="text-black font-bold text-center">TECHNOLOGIES</p>
                        </div>
                        <StackIt items={techs} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack;