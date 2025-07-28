import profile from '../assets/altamash.jpg'; // replace with your image path
import arrow from '../assets/arrow.svg';
import ProfileCard from './ProfileCard';


export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto h-[60vh] my-32 md:my-20 md:mt-5 md:h-auto md:px-10 px-10 py-10 flex flex-col md:flex-row  justify-between md:gap-12">
 
    
      {/* Left Content */}
      <div className="md:max-w-xl py-16">
    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight font-poppins">
          Designing The Web.<br />
          <span className="text-brand">Together.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-700 font-poppins">
          Build websites with purpose and people
        </p>
        <button className="relative bg-gray-800 text-white px-4 mt-5 py-3 font-josefin font-extralight text-xl drop-shadow-yellow drop-shadow-yellow transition-all duration-[50ms] hover:drop-shadow-yellowHover" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Portfolio
        </button>
      </div>
      {/* Container with profile + arrow + name */}
      
      <div className="hidden relative md:flex justify-center">
        <ProfileCard />

        {/* Arrow SVG overlay */}
        <img
          src={arrow}
          alt="Arrow"
          className="absolute bottom-[1.5rem] -left-[0.5rem] -translate-x-1/2 w-28"
        />

        {/* Name under arrow */}
        <a
          href="#about"
          className="absolute -bottom-[1rem] -left-[4.8rem] -translate-x-1/2 text-lg font-extralight font-josefin text-gray-800 hover:text-brand transition"
        >
          Altamash Khan
        </a>
      </div>
    </section>
  );
}
