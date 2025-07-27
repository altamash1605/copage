import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Build from './components/Build';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Build />
      </main>
    </>
  );
}

export default App;
