import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NamePrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    const storedName = localStorage.getItem('userName');

    console.log('Cookie Consent:', consent);
    console.log('Stored User Name:', storedName);

    if (consent === 'true' && !storedName) {
      setShowPrompt(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem('userName', name.trim());
      setShowPrompt(false);
      console.log('User name saved:', name);
    }
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 bg-white text-gray-800 px-6 py-4 rounded-xl shadow-lg z-50 max-w-md mx-auto font-josefin"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label htmlFor="name" className="text-sm font-semibold">
              What should we call you?
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-brand"
              placeholder="Your name"
              required
            />
            <button
              type="submit"
              className="bg-brand text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
            >
              Save Name
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
