import type { IconType } from 'react-icons';
import '../index.css';
import { FaDiscord, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMongoose } from 'react-icons/si';

type TechProps = {
    tech: string;
}

const TechTag = ({tech}: TechProps) => {

    let tagColor, tagName, tagIconColor, TagIcon: IconType | undefined;
    if (tech === "nodejs") {
        tagColor = "border-green-400";
        tagName = "Node.js";
        tagIconColor = "text-green-800";
        TagIcon = FaNodeJs;
    } else if (tech === "mongodb-nosql") {
        tagColor = "border-green-300";
        tagName = "MongoDB Atlas (NoSQL)";
        tagIconColor = "text-green-600";
        TagIcon = SiMongodb;
    } else if (tech === "mongoose") {
        tagColor = "border-green-400";
        tagName = "Mongoose API";
        tagIconColor = "text-green-800";
        TagIcon = SiMongoose;
    } else if (tech === "discord-api") {
        tagColor = "border-indigo-400";
        tagName = "Discord API";
        tagIconColor = "text-indigo-800";
        TagIcon = FaDiscord;
    }

    if (!TagIcon) return null;

    return (
        <div className={`flex items-center justify-center text-white rounded-full space-x-2 border px-2 py-0.5 ` + tagColor}>
            <span className={`text-lg font-bold bg-white p-1 rounded-full ` + tagIconColor}><TagIcon /></span>
            <p className={`text-xs font-light`}>{tagName}</p>
        </div>
    )
}

export default TechTag;