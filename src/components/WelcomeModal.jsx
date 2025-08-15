import React from 'react';

export default function WelcomeModal({ name, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
        <h2 className="text-xl font-semibold mb-2">Welcome, {name}!</h2>
        <p className="mb-4">Glad to see you here.</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
