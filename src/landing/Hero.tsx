import "./index.css";
import portrait from './assets/portrait.png';

function Hero() {
    return (
        <div className="grid gap-1 triangle-cut bg-black pb-10 grid-rows-2 
        lg:pb-60 lg:pt-30 lg:grid-rows-1 lg:grid-cols-2">

            {/* HERO TEXT - note to self: be weary of space on large screens */}
            <div className="p-6 lg:col-span-1 lg:px-20 lg:pt-10 lg:ml-30 w-fit">
                <p className="text-white text-center lg:text-left text-md font-normal
            lg:text-2xl lg:w-fit">Hey! I'm Aeron Roxas, an aspiring</p>
                <p className="text-yellow-300 mt-2 text-center lg:text-left text-2xl font-extrabold
            lg:text-6xl lg:mt-4">SOFTWARE DEVELOPER</p>
                <p className="text-gray-500 mt-2 text-justify 
            lg:w-150 lg:text-md lg:mt-4">
                    I am an upcoming BS Computer Engineering graduate from PUP, striving to contribute in software development roles.
                    In university, I had projects that honed and challenged my programming skills that exposed me to trying out different languages and techniques.
                    I also have a leadership background in both academic and extra-curricular activities which made me a great communicator and problem solver.
                </p>
                <div className="flex flex-row mt-7 -mb-5 lg:mb-0 lg:mt-15 w-fit ">
                    <p className="p-3 rounded-xl border border-yellow-300 text-center text-yellow-300 w-30">Contact Me</p>
                    <p className="p-3 ml-3 text-gray-300">View CV</p>
                </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="flex justify-center items-center lg:mr-60">
                <div className="
            w-90 h-90 pt-15 -mt-20
            lg:w-125 lg:h-125">
                    <img className="w-max h-max brightness-75
              lg:rounded-full border lg:bg-gray-200 lg:mr-45 
              lg:drop-shadow-2xl
              lg:drop-shadow-yellow-100/30"
                        alt="self portrait" src={portrait} />
                </div>
            </div>
        </div>
    )
}

export default Hero
