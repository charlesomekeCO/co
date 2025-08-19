import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
    </>
  );
}

export default App;
