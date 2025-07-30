import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Build from '../components/Build';
import Story from '../components/Story';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import NamePrompt from '../components/NamePrompt';



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
      <Footer />
      <CookieConsent />
      <NamePrompt />
    </>
  );
}

export default App;
