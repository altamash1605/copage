import { useEffect, useState } from 'react';
import supabase from '../supabase/client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Build from '../components/Build';
import Story from '../components/Story';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import NamePrompt from '../components/NamePrompt';
import WelcomeModal from '../components/WelcomeModal'; // you’ll need to create this

function Home() {
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const [hasName, setHasName] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        const { data, error } = await supabase
          .from('profiles') // adjust if your table is named differently
          .select('full_name')
          .eq('id', session.user.id)
          .single();

        if (data?.full_name) {
          setHasName(true);
          setShowWelcome(true);
          setTimeout(() => setShowWelcome(false), 5000); // auto-hide welcome
        }
      }
    };

    getUser();
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
      {user && hasName && showWelcome && (
        <WelcomeModal name={user.user_metadata?.name || 'there'} />
      )}
      {user && !hasName && <NamePrompt user={user} />}
    </>
  );
}

export default Home;
