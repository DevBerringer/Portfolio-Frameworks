import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';

export default function Home() {
  return (
    <div className="relative w-full">
      <div id="home" className="relative z-0">
        <Hero />
      </div>
      <div id="about" className="relative z-10 bg-background">
        <About />
      </div>
      <div id="work" className="relative z-10">
        <Experience />
      </div>
      <div id="projects" className="relative z-10 bg-background">
        <Projects />
      </div>
    </div>
  );
}

