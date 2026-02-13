import TechTag from "../components/TechTag.tsx"
import '../index.css';
import { } from "react-icons";
import { FaArrowRight } from "react-icons/fa";


function Feature() {
    return (
        <div className='bg-indigo-950 py-5 lg:py-10 lg:px-20'>
            <div className="lg:flex lg:flex-row">
                <div className="lg:order-last">
                    <div className="px-5">
                        <div className="text-white text-center font-extralight mb-2 text-sm lg:text-right">FEATURED PROJECT</div>
                        <h1 className='text-yellow-300 text-3xl font-extrabold text-center lg:text-right lg:text-6xl'>THE STARSHOP BOT</h1>
                        <div className="text-white text-center font-extralight mb-4 text-md lg:text-right lg:text-xl">Role: Sole Developer</div>
                    </div>
                    <div className='px-5 flex flex-row flex-wrap justify-center lg:justify-end items-center space-x-1.5 space-y-1.5 mb-3 lg:mb-5'>
                        <TechTag tech="nodejs" />
                        <TechTag tech="mongodb-nosql" />
                        <TechTag tech="mongoose" />
                        <TechTag tech="discord-api" />
                    </div>
                    <p className='text-gray-300 font-light mb-3 lg:mb-8 text-justify px-5 text-md lg:text-lg'>
                        A Discord Chat Bot with more than 40 commands with various purposes: Discord server moderation and management, entertainment, and user profiling.
                        The Starshop bot features a text-based economy and levelling system as well as a text-based RPG game complete with combat and equipment mechanics.
                        <br /><br />From the assets to the computations of every algorithm of this bot, I designed it all and I loved every second coding this.
                        This project honed my problem-solving skills and code creativity. It also allowed me to listen to user feedback and applied suggestions accordingly.
                    </p>
                    <div className="px-5 mt-3 flex flex-row justify-center lg:justify-end space-x-4">
                        <div className="hidden bg-yellow-300 rounded-full px-4 py-2">Learn More</div>
                        <div className="py-2 px-4 bg-yellow-300 rounded-full flex flex-row items-center space-x-2"><p>Visit on GitHub</p> <FaArrowRight /></div>
                    </div>
                </div>
                <div className="flex justify-center items-center my-5 lg:my-0 px-5">
                    <div className="w-105 h-60 lg:w-210 lg:h-120 border border-white text-white text-center flex justify-center items-center">
                        Image Placeholder
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;