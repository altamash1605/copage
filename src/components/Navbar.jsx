import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [previewShown, setPreviewShown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Auto preview dropdown on mobile once
  useEffect(() => {
  const isMobile = window.innerWidth < 768;
  const hasShown = sessionStorage.getItem('dropdownPreviewShown');

  if (isMobile && !hasShown) {
    setMenuOpen(true);
    sessionStorage.setItem('dropdownPreviewShown', 'true');

    const closeTimeout = setTimeout(() => {
      setMenuOpen(false);
    }, 2000); // Close after 2 seconds

    return () => clearTimeout(closeTimeout);
  }
}, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section>
      <nav className="hidden md:flex flex-row shrink-0 justify-between items-center px-20 md:px-10 py-4 max-w-7xl mx-auto">
        <img src={logo} alt="CoPage logo" className="md:h-15 w-auto" />
        <ul className="flex flex-row gap-8 text-lg font-light text-gray-800">
          <li><a href="https://copage.vercel.app" className="hover:text-brand">Home</a></li>
          <li><a href="#story" className="hover:text-brand">Story</a></li>
          <li><a href="#projects" className="hover:text-brand">Projects</a></li>
          <li><a href="#build" className="hover:text-brand">Let’s Build</a></li>
        </ul>
      </nav>

      <nav className="md:hidden relative flex flex-col justify-between items-center px-10 mx-auto w-64">
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">  
          <img src={logo} alt="CoPage logo" className="h-20 w-auto" />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              ref={dropdownRef}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden absolute top-12 left-[6.3rem] leading-[0.8] mt-6 space-y-4 text-5xl font-bold font-poppins text-[#1F2937] text-opacity-25"
            >
              {[
                { name: 'Home', href: 'https://copage.vercel.app' },
                { name: 'Story', href: '#story' },
                { name: 'Projects', href: '#projects' },
                { name: 'Build', href: '#build' }
              ].map(({ name, href }) => (
                <motion.li key={name} variants={itemVariants}>
                  <a
                    href={href}
                    {...(href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </section>
  );
}
