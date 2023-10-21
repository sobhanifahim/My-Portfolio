import './App.css';
import Navbar from './components/navbar';
import Intro from './components/introsection';
import Experience from './components/experiencesection';
import Education from './components/educationsection';
import Skills from './components/skills';
import Projects from './components/projectssection';
import Contact from './components/contact';
function App() {
  //scroll to the clicked section
  const scrollToSection=(sectionId)=>{
    const sectionRef=document.getElementById(sectionId)
    if(sectionRef){
      sectionRef.scrollIntoView({behavior:'smooth'})
    }
  }
  return (
    <div className="App">
          <Navbar scrollToSection={scrollToSection}/>
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
