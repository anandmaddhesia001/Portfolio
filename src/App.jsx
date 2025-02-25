import Navbar from "./components/NavBar/navbar"
import Intro from "./components/Intro/intro"
import About from "./components/About/about"
import Project from "./components/Projects/project"
import Techstack from "./components/Skills/techstack"
import Contact from "./components/Contact/contact"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Techstack/>
      <Contact/>     
    </div>
  )
}

export default App
