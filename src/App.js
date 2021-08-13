import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Project from './Components/Projects'
import Skills from './Components/Skills';
import Header from './Components/Header'
import Contact from './Components/ContactMe';

function App() {
  return (
    <div >
      <Header/>
      <Navbar/>
      <Project/>
      <Skills/>
      <Contact/>

    </div>
  );
}

export default App;
