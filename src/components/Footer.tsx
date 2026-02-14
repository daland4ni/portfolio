import { SiGmail } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <section id="contact" className="bg-violet-950 px-5 lg:px-25 py-15 grid
        grid-rows-3 grid-cols-1
        lg:grid-rows-1 lg:grid-cols-3">

            <div className="flex lg:justify-start">
                <div className="text-gray-400">
                    <p className="text-white text-xl font-semibold">Aeron Jamil Roxas</p>
                    <p>Software Developer</p>
                    <p>Open to Entry-Level Opportunities</p>
                    <p>Based in Pasay City, Philippines</p>
                    <p>&copy; 2026</p>
                </div>
            </div>

            <div className="flex lg:justify-center mt-3 lg:mt-0">
                <div className="text-gray-400">
                    <p className="text-white text-xl font-semibold">Quick Links</p>
                    <Link to="/">
                        <p className="hover:text-white active:text-white hover:cursor-pointer">Home</p>
                    </Link>
                    <Link to="/projects">
                        <p className="hover:text-white active:text-white hover:cursor-pointer">Projects</p>
                    </Link>
                    <Link to="/about">
                        <p className="hover:text-white active:text-white hover:cursor-pointer">About Me</p>
                    </Link>
                </div>
            </div>

            <div className="flex lg:justify-end">
                <div>
                    <p className="text-white text-xl font-semibold">My Socials and Contact</p>
                    <div className="flex flex-row items-center space-x-3 mt-2">
                        <span className="text-red-800 bg-white rounded-sm p-1"><SiGmail /></span>
                        <p className="text-gray-400">aeronroxas.office@gmail.com</p>
                    </div>
                    <div className="flex flex-row items-center space-x-3 mt-2 text-gray-400 underline">
                        <span className="text-black bg-white rounded-sm p-1"><FaGithub /></span>
                        <a className="hover:text-white active:text-white hover:cursor-pointer" href="https://github.com/daland4ni/" target="__blank">
                            <div className="flex flex-row items-center space-x-0.5">
                                <p className="">daland4ni (aeron.roxas)</p>
                                <span className="text-xs"><GoArrowUpRight /></span>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-row items-center space-x-3 mt-2 text-gray-400 underline">
                        <span className="text-teal-950 bg-white rounded-sm p-1"><FaLinkedin /></span>
                        <a className="hover:text-white active:text-white hover:cursor-pointer" href="https://www.linkedin.com/in/aeronroxas/" target="__blank">
                            <div className="flex flex-row items-center space-x-0.5">
                                <p className="">Aeron Jamil Roxas</p>
                                <span className="text-xs"><GoArrowUpRight /></span>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-row items-center space-x-3 mt-2 text-gray-400 underline">
                        <span className="text-blue-950 bg-white rounded-sm p-1"><FaFacebook /></span>
                        <a className="hover:text-white active:text-white hover:cursor-pointer" href="https://www.facebook.com/daland4ni/" target="__blank">
                            <div className="flex flex-row items-center space-x-0.5">
                                <p className="">Aeron Roxas</p>
                                <span className="text-xs"><GoArrowUpRight /></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer;