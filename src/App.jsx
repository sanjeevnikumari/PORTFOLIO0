import Background from "./components/Background";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
function App() {
  return (
    <>
      <Background />

      <div className="relative z-10">
       <Navbar/>
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;