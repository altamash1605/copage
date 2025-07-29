import { useEffect, useState } from 'react';

export default function NamePrompt() {
  const [name, setName] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
    const storedName = sessionStorage.getItem('copage_name');

    if (cookiesAccepted && !storedName) {
      const timer = setTimeout(() => setShowPrompt(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSave = () => {
    if (name.trim()) {
      sessionStorage.setItem('copage_name', name.trim());
      setShowPrompt(false);

      // Optional: send to Google Analytics
      window.gtag?.('set', {
        user_properties: {
          visitor_name: name.trim()
        }
      });
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white border shadow-lg p-4 rounded-md z-50 max-w-sm w-full">
      <p className="text-gray-800 mb-2 font-medium">Hey! What should we call you?</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded-md mb-2"
        placeholder="Enter your name"
      />
      <button
        onClick={handleSave}
        className="bg-brand text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
      >
        Save
      </button>
    </div>
  );
}
