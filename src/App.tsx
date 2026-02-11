import "./index.css";
import portrait from './assets/portrait.png';
//import Home from "./Home.tsx";

function App() {
  return (
    <body className="bg-black">
      <div className="px-2.5 pt-5">
        <div className="grid gap-1 triangle-cut bg-black pb-10 grid-rows-2 
        lg:pb-30 lg:grid-rows-1 lg:grid-cols-3">
          <div className="p-6 lg:col-span-2 lg:px-20 lg:pt-10">
            <p className="text-white text-center lg:text-left text-md font-normal
            lg:text-2xl">Hey! I'm Aeron Roxas, an aspiring</p>
            <p className="text-yellow-300 mt-2 text-center lg:text-left text-2xl font-extrabold
            lg:text-6xl lg:mt-4">SOFTWARE DEVELOPER</p>
            <p className="text-gray-500 mt-2 text-justify 
            lg:w-150 lg:text-md lg:mt-4">
              I am an upcoming BS Computer Engineering graduate from PUP, striving to contribute in software development roles.
              In university, I had projects that honed and challenged my programming skills that exposed me to trying out different languages and techniques.
              I also have a leadership background in both academic and extra-curricular activities which made me a great communicator and problem solver.
            </p>
            <div className="flex flex-row mt-7 -mb-15 lg:mb-0 lg:mt-15">
              <p className="p-3 rounded-xl border border-yellow-300 text-center text-yellow-300 w-30">Contact Me</p>
              <p className="p-3 ml-3 text-gray-300">View CV</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="
            w-90 h-90 pt-15 -mt-20
            lg:w-100 lg:h-100">
              <img className="w-max h-max brightness-75
              lg:rounded-full lg:bg-amber-200 lg:mr-45 
              lg:drop-shadow-2xl
              lg:drop-shadow-yellow-100/30"
                alt="self portrait" src={portrait} />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 text-white -mt-70 pt-70 pb-20">
          <div className="px-4 grid gap-3 text-center
          grid-rows-4 grid-cols-1 
          lg:grid-cols-4 lg:grid-rows-1">
            <p className="border border-white p-5">Item Placeholder 1</p>
            <p className="border border-white p-5">Item Placeholder 2</p>
            <p className="border border-white p-5">Item Placeholder 3</p>
            <p className="border border-white p-5">Item Placeholder 4</p>
          </div>
        </div>
      </div>
    </body>
  )
}

export default App
