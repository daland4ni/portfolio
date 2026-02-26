import "../index.css";
import TechTag from '../components/TechTag'
import type { TechKey } from '../components/TechTag'
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export type Project = {
    name: string;
    bgColor: string;
    iconURL: string;
    role: string;
    description: string;
    keywords: string;
    techs: TechKey[];
    github: boolean,
    githubURL: string,
    featured: boolean,
    featureURL: string
};
interface ProjectProps { projects: Project[] };

const ProjectItem = ({ projects }: ProjectProps) => {
    return (

        <div className='bg-black
        px-5 pt-5 lg:pt-15 pb-5 lg:pb-30 lg:px-30'>

            {projects.map(({ name, bgColor, iconURL, role, description, keywords, techs, github, githubURL, featured, featureURL }) => (
                <div className={bgColor + ` shadow-2xl rounded-md mb-3 lg:mb-8 p-2 lg:p-5 flex flex-col lg:flex-row`}>
                    <div className='flex justify-center items-center lg:w-1/5'>
                        <img alt={name} src={iconURL} className='my-2 lg:my-0 text-center w-1/3 h-fit lg:w-2/3 rounded-xl' />
                    </div>
                    <div className='flex flex-col text-center justify-center lg:text-justify lg:w-3/5'>
                        <div className='flex flex-wrap justify-center items-end space-x-1.5 lg:justify-start'>
                            <p className='text-white font-bold text-xl lg:text-4xl'>{name.toUpperCase()}</p>
                            <p className='text-gray-300 text-sm font-light'>({role})</p>
                        </div>
                        <div className='flex flex-row justify-center lg:justify-start space-x-1 flex-wrap space-y-1 my-2'>
                            {techs.map((tech, index) => (
                                <TechTag
                                    key={tech}
                                    tech={tech}
                                    sizing="nm"
                                    style={index === 0 ? "solid-dark" : "dark"}
                                />
                            ))}
                        </div>
                        <p className='text-gray-300 font-normal text-justify px-7 lg:px-0 py-3 lg:py-7'>{description}
                            <br /><br />
                            <span className="font-bold text-red-200">MAIN FEATURES:</span>&nbsp;&nbsp;&nbsp;{keywords}
                        </p>
                        <div className='flex flex-col lg:flex-row justify-center lg:items-end lg:justify-start space-y-2 lg:space-y-0 lg:space-x-2 mt-3'>

                            {github && (
                                <a href={githubURL} target="__blank" >
                                    <p className='text-xs lg:text-lg flex flex-row items-center rounded-full border-white border text-white py-2 px-5'><FaGithub />&nbsp;View Repository on GitHub</p>
                                </a>
                            )}

                            {featured && (
                                <Link to={featureURL} target="__blank" >
                                    <p className='text-xs lg:text-lg flex flex-row items-center rounded-full bg-amber-500 text-black py-2 px-5'>View Feature / Demo&nbsp;<FaArrowRight /></p>
                                </Link>
                            )}

                        </div>
                    </div>
                </div>))}
        </div>
    )
}

export default ProjectItem;