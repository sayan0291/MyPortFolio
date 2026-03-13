import Navbar from './components/Navbar/Navbar';
import First from './components/First/First'
import About from './components/About/About'
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from "./components/Projects/Projects"


export default function App() {
  return (
    <>
      <Navbar />
      <First />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}