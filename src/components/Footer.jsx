import { FaInstagram, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import logo from '../assets/logo.svg'; // Or use text if preferred

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="CoPage Logo" className="h-12 w-auto mb-3" />
          <p className="text-sm text-gray-500">
            Built for creators. © {new Date().getFullYear()} CoPage
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-brand">Home</a></li>
            <li><a href="#story" className="hover:text-brand">Story</a></li>
            <li><a href="#projects" className="hover:text-brand">Projects</a></li>
            <li><a href="#build" className="hover:text-brand">Let’s Build</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 text-xl text-gray-600">
            <a href="https://www.instagram.com/copage.app?igsh=MXhpaGlqb2JxdjMzdQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
