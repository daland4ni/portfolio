import "../index.css";
import Stack from './Stack.tsx';
import Hero from "./Hero.tsx";
import Feature from "./Feature.tsx";

function Landing() {
  return (
    <div id="home">
      <Hero />
      <Stack />
      <Feature />
    </div>
  )
}

export default Landing
