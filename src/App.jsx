import "./App.css";
import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import Projects from "./components/projects.jsx";
import PreLoad from "./components/preload.jsx";

function App() {
  return (
    <>
      <Navbar />
      <PreLoad />
      <Intro />
      <Projects />
    </>
  );
}

export default App;
