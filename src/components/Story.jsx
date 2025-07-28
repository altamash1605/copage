import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';

export default function Story() {
  return (
    <section id="story" className="py-16 px-8 md:px-12 max-w-7xl mx-auto md:h-screen">
      <h2 className="text-4xl md:text-5xl mb-10 font-bold font-poppins">
        <span className="text-brand">Co</span>Story
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-stretch  md:w-full">
        {/* Left: Story Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-gray-700 space-y-5 font-josefin"
        >
          <h3 className="text-2xl font-semibold">How it all began</h3>
          <p className="text-xl font-regular">
            CoPage started as a spark — a personal project to bring designers, developers, and creators together. As I built more websites, I realized the need for a collaborative space that empowers everyone to showcase their work and build freely.
          </p>

          <h3 className="text-2xl font-semibold">The Vision</h3>
          <p className="text-xl font-regular">
            More than a portfolio, CoPage is a canvas. A place to create, to grow, to invite others into your journey. We're not just building websites — we're building presence, identity, and connection on the web.
          </p>
        </motion.div>

        {/* Right: Visual / Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 rounded-lg overflow-hidden shadow-xl drop-shadow-yellowHover">
            
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-sm p-3 text-center">
              Altamash Khan — Creator of CoPage
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
