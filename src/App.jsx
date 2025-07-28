import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Build from './components/Build';
import Story from './components/Story';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Projects />
        <Build />
      </main>
    </>
  );
}

export default App;
