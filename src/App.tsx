import "./App.css";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { ParticleBackground } from "./components/Particle";
import { HeroHighlightDemo } from "./components/Hero";

function App() {
  return (
    <>
      <div className="relative p-3">
        <Navbar />
      </div>
      <div className="fixed p-3">
        <ParticleBackground />
      </div>

      <div className="relative p-11">
        <Card />
      </div>
      <div className="relative p-5">
        <HeroHighlightDemo />
      </div>
    </>
  );
}

export default App;
