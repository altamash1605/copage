import logo from '../assets/logo.svg';

export default function Navbar() {
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
    <nav className="md:hidden flex flex-col justify-between items-center px-20 md:px-10 py-4 max-w-7xl mx-auto">
      <img src={logo} alt="CoPage logo" className="h-20 w-auto" />
    </nav>
    </section>
  );
}
