import profile from '../assets/altamash.jpg'; // replace with your image path
import arrow from '../assets/arrow.svg';
import ProfileCard from './ProfileCard';


export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="max-w-xl">
    <h1 className="text-[50px] md:text-[55px] font-extrabold leading-tight font-poppins">
          Designing The Web.<br />
          <span className="text-brand">Together.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-700 font-poppins">
          Build websites with purpose and people
        </p>
        <button className="relative bg-gray-800 text-white px-4 mt-5 py-3 font-josefin font-extralight text-xl drop-shadow-yellow drop-shadow-yellow transition-all duration-[50ms] hover:drop-shadow-yellowHover">
            View Portfolio
        </button>
      </div>
      {/* right Content */}
       <ProfileCard />     
                
    </section>
  );
}
