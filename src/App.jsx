import "./App.css";
import Navbar from "./components/navbar/navbar.jsx";
import Intro from "./components/intro/intro.jsx";
import Projects from "./components/projects/projects.jsx";
import PreLoad from "./components/preload/preload.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <PreLoad />
      <Intro />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
