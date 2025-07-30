import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NamePrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const consent = localStorage.getItem('cookieConsent') === 'true';
      const nameSeen = sessionStorage.getItem('namePromptSeen') === 'true';
      if (consent && !nameSeen) {
        setShowPrompt(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'name_collected', {
        event_category: 'engagement',
        visitor_name: name,
        value: name,
      });
    }

    setSubmitted(true);
    sessionStorage.setItem('namePromptSeen', 'true');
    localStorage.setItem('visitorName', name);
    setTimeout(() => {
      setShowPrompt(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 sm:left-1/2 sm:translate-x-[-50%] bg-white text-gray-800 px-6 py-4 rounded-xl shadow-lg z-50 font-josefin max-w-sm w-[95%]"
        >
          {submitted ? (
            <p className="text-center text-brand font-semibold">Thanks, {name}!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md bg-gray-100 outline-none border border-gray-300 w-full"
                required
              />
              <button
                type="submit"
                className="bg-brand text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition w-full sm:w-auto"
              >
                Submit
              </button>
            </form>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
