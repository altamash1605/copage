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
import supabase from '../supabase/client';

function Home() {
  const [firstName, setFirstName] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const fetchUserName = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user?.user_metadata?.full_name) {
        const fullName = session.user.user_metadata.full_name;
        const first = fullName.split(' ')[0];
        setFirstName(first);
        setShowWelcome(true); // Show modal
      }
    };

    fetchUserName();
  }, []);

  // Hide modal after 5 seconds
  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

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

      {showWelcome ? (
        <WelcomeModal name={firstName} onClose={() => setShowWelcome(false)} />
      ) : (
        !firstName && <NamePrompt />
      )}
    </>
  );
}

export default Home;
