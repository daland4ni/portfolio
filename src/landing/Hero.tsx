import "../index.css";
import portrait from '../assets/portrait.png';
import { RiDownload2Fill } from "react-icons/ri";

function Hero() {
    return (
        <div className="grid gap-0 triangle-cut bg-black pb-10 grid-rows-2 
        lg:pb-100 lg:pt-30 lg:grid-rows-1 lg:grid-cols-6  lg:px-40">

            {/* HERO TEXT - note to self: be weary of space on large screens */}
            <div className="p-6 lg:pt-10 lg:col-span-4">

                <p className="text-white text-center lg:text-left text-md font-normal
            lg:text-2xl lg:w-fit">Hey! I'm Aeron Roxas, an aspiring</p>
                <p className="text-yellow-300 mt-2 text-center lg:text-left text-2xl font-extrabold
            lg:text-5xl lg:mt-4">SOFTWARE DEVELOPER</p>
                <p className="text-gray-500 mt-2 text-justify 
            lg:w-2/3 lg:text-md lg:mt-4">
                    I am an upcoming BS Computer Engineering graduate from PUP, striving to contribute in software development roles.
                    In university, I had projects that honed and challenged my programming skills that exposed me to trying out different languages and techniques.
                    I also have a leadership background in both academic and extra-curricular activities which made me a great communicator and problem solver.
                </p>
                <div className="flex flex-row mt-10 lg:mb-0 lg:mt-15 justify-center lg:justify-start">
                    <button type="button">
                        <p className="p-3 hover:cursor-pointer rounded-lg border border-yellow-300 text-center 
                        hover:bg-yellow-500 hover:text-black active:bg-yellow-500 active:text-black text-yellow-300 w-30">Contact Me</p>
                    </button>
                    <button type="button">
                        <p className="p-3 hover:cursor-pointer hover:text-white active:text-white  ml-7 text-gray-400 flex flex-row">View CV
                            <span className="ml-3 flex items-center"><RiDownload2Fill /> </span>
                        </p>
                    </button>
                </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="flex justify-center  items-center lg:col-span-2">
                <div className="lg:flex lg:justify-start
            w-90 h-90 pt-15 -mt-20
            lg:w-full lg:h-auto">
                    <img className="w-max h-max brightness-75
              lg:rounded-full border lg:bg-gray-200
              lg:drop-shadow-2xl
              lg:drop-shadow-amber-50/20"
                        alt="self portrait" src={portrait} />
                </div>
            </div>
        </div>
    )
}

export default Hero
