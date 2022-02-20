import { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Project from './Components/Projects'
import Skills from './Components/Skills';
import Header from './Components/Header'
import Contact from './Components/ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos'
import "aos/dist/aos.css"
function App() {
  useEffect(() => {
    Aos.init({ duration:2000 })
  }, [])
  return (
    <div >
      <div data-aos='fade-right' data-aos-delay="50">
        <Header id='Header' />
      </div>



      <div data-aos='fade-right'>
        <Navbar id='Navbar' />
      </div>


      <div data-aos='fade-right'>
        <Project id='Project' />
      </div>
      <div>
        <Skills id='Skills' />
      </div>
      <div data-aos='fade-right'>
        <Contact id='Contact' />
      </div>



    </div>
  );
}

export default App;
