import "../index.css";
import TechTag from '../components/TechTag'
import type { TechKey } from '../components/TechTag'
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export type Project = {
    name: string;
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

        <div className='bg-indigo-950
        px-5 py-5 lg:py-15 lg:px-30'>

            {projects.map(({ name, iconURL, role, description, keywords, techs, github, githubURL, featured, featureURL }) => (
                <div className='bg-white shadow-2xl rounded-md mb-3 lg:mb-5 p-2 lg:p-5 flex flex-col lg:flex-row'>
                    <div className='flex justify-center items-center lg:w-1/5'>
                        <img alt={name} src={iconURL} className='my-2 lg:my-0 text-center w-1/3 h-fit lg:w-2/3 rounded-xl' />
                    </div>
                    <div className='flex flex-col text-center justify-center lg:text-justify lg:w-3/5'>
                        <div className='flex flex-wrap justify-center items-end space-x-1.5 lg:justify-start'>
                            <p className='font-bold text-xl lg:text-3xl'>{name.toUpperCase()}</p>
                            <p className='text-sm font-light'>({role})</p>
                        </div>
                        <div className='flex flex-row justify-center lg:justify-start space-x-1 flex-wrap space-y-1 my-2'>
                            {techs.map((tech, index) => (
                                <TechTag
                                    key={tech}
                                    tech={tech}
                                    sizing="nm"
                                    style={index === 0 ? "solid-dark" : "light"}
                                />
                            ))}
                        </div>
                        <p className='font-normal text-justify px-7 lg:px-0 py-3 lg:py-7'>{description}
                            <br /><br />
                            <span className="font-bold text-red-950">MAIN FEATURES:</span>&nbsp;&nbsp;&nbsp;{keywords}
                        </p>
                        <div className='flex justify-center items-end lg:justify-start space-x-2 mt-3'>

                            {github && (
                                <a href={githubURL} target="__blank" >
                                    <p className='text-xs lg:text-lg flex flex-row items-center rounded-full bg-black text-white py-2 px-5'><FaGithub />&nbsp;View Repository on GitHub</p>
                                </a>
                            )}

                            {featured && (
                                <Link to={featureURL} >
                                    <p className='text-xs lg:text-lg flex flex-row items-center rounded-full bg-amber-500 text-black py-2 px-5'>View Feature&nbsp;<FaArrowRight /></p>
                                </Link>
                            )}

                        </div>
                    </div>
                </div>))}
        </div>
    )
}

export default ProjectItem;