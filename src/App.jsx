import "./App.css";
import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import Projects from "./components/projects.jsx";
import PreLoad from "./components/preload.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <PreLoad />
      <Intro />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
