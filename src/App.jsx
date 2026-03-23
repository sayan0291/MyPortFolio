import Navbar from './components/Navbar/Navbar';
import First from './components/First/First'
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from "./components/Projects/Projects"


export default function App() {
  return (
    <>
      <Navbar />
      <First />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}