import "./App.css";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { ParticleBackground } from "./components/Particle";
import { HeroHighlightDemo } from "./components/Hero";
import { ProjectsSection } from "./components/Carousel";

function App() {
  return (
    <>
      <div className="relative p-3">
        <Navbar />
      </div>
      <div className="fixed p-3 max-w-screen">
        <ParticleBackground />
      </div>

      <div className="relative p-11">
        <Card />
      </div>
      <div className="relative p-5">
        <HeroHighlightDemo />
      </div>
      <div className="bg-blue-300">
        <h1>Projects</h1>
      </div>
      <div className="bg-black-solid opacity-100 ">
        <ProjectsSection />
      </div>
    </>
  );
}

export default App;
