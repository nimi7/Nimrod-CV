import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Project from './Components/Projects'
import Skills from './Components/Skills';
import Header from './Components/Header'
import Contact from './Components/ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';

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
