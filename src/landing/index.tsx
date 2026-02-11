import "../index.css";
import Stack from './Stack.tsx';
import Hero from "./Hero.tsx";

function Landing() {
  return (
    <body className="bg-black">
      <div className="px-2.5 pt-5">
        <Hero />
        <Stack />
      </div>
    </body>
  )
}

export default Landing
