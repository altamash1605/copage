import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    const sessionSeen = sessionStorage.getItem('cookieBannerShown');

    if (!consent && !sessionSeen) {
      const timer = setTimeout(() => {
        setShowBanner(true);
        sessionStorage.setItem('cookieBannerShown', 'true');
      }, 3000); // 3-second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem('cookieConsent', accepted ? 'true' : 'false');
    setShowBanner(false);

    if (accepted) {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CKXQZ6B8XE';
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-CKXQZ6B8XE');
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 bg-brand text-gray-800 px-6 py-4 rounded-xl shadow-lg z-50 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-josefin"
        >
          <p className="text-sm sm:text-base">
            We use cookies to enhance your experience. Do you accept?
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => handleConsent(true)}
              className="px-4 py-2 rounded-md bg-white text-brand font-semibold hover:bg-yellow-100 transition"
            >
              Accept
            </button>
            <button
              onClick={() => handleConsent(false)}
              className="px-4 py-2 rounded-md bg-yellow-300 text-gray-600 font-semibold hover:bg-gray-700 transition"
            >
              Reject
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
