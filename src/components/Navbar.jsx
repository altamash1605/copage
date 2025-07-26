import { useState } from 'react';
import logo from '../assets/logo.svg';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section>
    <nav className="hidden md:flex flex-row shrink-0 justify-between items-center px-20 md:px-10 py-4 max-w-7xl mx-auto">
      <img src={logo} alt="CoPage logo" className="md:h-15 w-auto" />
      <ul className="flex flex-row gap-8 text-lg font-light text-gray-800">
        <li><a href="#home" className="hover:text-brand">Home</a></li>
        <li><a href="#about" className="hover:text-brand">About</a></li>
        <li><a href="#portfolio" className="hover:text-brand">Portfolio</a></li>
        <li><a href="#build" className="hover:text-brand">Let’s Build</a></li>
      </ul>
    </nav>
    <nav className="md:hidden relative flex flex-col justify-between items-center px-10 mx-auto w-64">
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">  
      <img src={logo} alt="CoPage logo" className="h-20 w-auto" />
      </button>
      {/*Dropdown for mobile*/}
      {menuOpen && (
        <ul className="md:hidden absolute top-12 left-[6.3rem] leading-[0.8] mt-6 space-y-4 text-5xl font-bold font-poppins text-[#1F2937] text-opacity-25">
          <li><a href="#home">Home</a></li>
          <li><a href="#story">Story</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#build">Build</a></li>
        </ul>
      )}
    </nav>
    </section>
  );
}
