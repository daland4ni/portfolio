import "../index.css";
import Stack from './Stack.tsx';
import Home from "./Hero.tsx";

function Landing() {
  return (
    <body className="bg-black">
      <div className="px-2.5 pt-5">
        <Home />
        <div className="bg-gray-900 text-white -mt-70 pt-70 pb-20">
          <p className="text-center font-bold mb-3 text-xl -mt-10
          lg:mb-13 lg:mt-4 lg:text-2xl">SKILLS</p>
          <div className="px-4">
            <Stack />
          </div>
        </div>
      </div>
    </body>
  )
}

export default Landing
