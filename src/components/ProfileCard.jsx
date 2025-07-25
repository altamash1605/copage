import React from 'react';
import profile from '../assets/altamash.jpg'; // Adjust to your actual path

export default function ProfileCard() {
  return (
    <div className="relative inline-block">
      
      {/* Profile image */}
      <img
        src={profile}
        alt="Altamash Khan"
        className="block w-[320px] h-auto rounded-[2px] object-cover drop-shadow-yellow transition-all duration-100 hover:drop-shadow-yellowHover "
      />

      {/* Chat button */}
      <div className="absolute bottom-3 left-3">
        <button className="flex items-center gap-2 px-4 py-1.5 bg-amber-100 rounded-full text-sm font-medium text-gray-800 shadow-sm hover:bg-amber-200 transition">
          <span className="w-3 h-3 bg-green-500 rounded-full border border-white"></span>
          Chat
        </button>
      </div>
    </div>
  );
}
