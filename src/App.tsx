import "./App.css";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { ParticleBackground } from "./components/Particle";

function App() {
  return (
    <>
      <div>
        <ParticleBackground />
      </div>
      <Navbar />
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2 grid grid-cols-subgrid">
          <Card />
        </div>
        <div className="col-span-2 grid grid-cols-subgrid">
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
