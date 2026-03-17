import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
