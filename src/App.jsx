import Navbar from './components/Navbar/Navbar';
import Home from './components/First/Home/Home';
import Footer from './components/Footer/Footer';
import Projects from "./components/Projects/Projects"
import AboutContent from './components/About/AboutContent';
import {Routes,Route} from "react-router-dom"


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/aboutdetail' element={<AboutContent />}/>
        <Route path='/projectdetail' element={<Projects />}/>
      </Routes>
      <Footer />
    </>
  );
}