import './App.css';
import Navbar from './components/navbar';
import Intro from './components/introsection';
import Experience from './components/experiencesection';
import Education from './components/educationsection';
import Skills from './components/skills';
import Projects from './components/projectssection';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
          <Navbar/>
          <Intro/>
          <Experience/>
          <Education/>
          <Skills/>
          <Projects/>
          <Contact/>
    </div>
  );
}

export default App;
