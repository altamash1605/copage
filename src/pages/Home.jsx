import { useEffect, useState } from 'react';
import { supabase } from '../client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Build from '../components/Build';
import Story from '../components/Story';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import WelcomeModal from '../components/WelcomeModal';
import NamePrompt from '../components/NamePrompt';

function Home() {
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
        const seenWelcome = sessionStorage.getItem('seenWelcome');
        if (!seenWelcome) {
          setShowWelcome(true);
          sessionStorage.setItem('seenWelcome', 'true');
        }
      }
    }

    fetchUser();
  }, []);

  const firstName = user?.user_metadata?.full_name?.split(' ')[0] || 'there';

  return (
    <>
      <Navbar />
      <main>
        {showWelcome && <WelcomeModal name={firstName} onClose={() => setShowWelcome(false)} />}
        <Hero />
        <Story />
        <Projects />
        <Build />
      </main>
      <Footer />
      <CookieConsent />
      {!user && <NamePrompt />}
    </>
  );
}

export default Home;
