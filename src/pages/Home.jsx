import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Build from '../components/Build';
import Story from '../components/Story';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import NamePrompt from '../components/NamePrompt';
import WelcomeModal from '../components/WelcomeModal';
import { supabase } from '../client'; // make sure this path is correct

function Home() {
  const [firstName, setFirstName] = useState(null);

  useEffect(() => {
    const fetchUserName = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user?.user_metadata?.full_name) {
        const fullName = session.user.user_metadata.full_name;
        const first = fullName.split(' ')[0];
        setFirstName(first);
      }
    };

    fetchUserName();
  }, []);

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

      {firstName ? (
        <WelcomeModal firstName={firstName} />
      ) : (
        <NamePrompt />
      )}
    </>
  );
}

export default Home;
