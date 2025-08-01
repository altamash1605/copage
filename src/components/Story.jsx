import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';
import Testimonials from './Testimonials';
import profileImage from '../assets/altamash.jpg'; // Replace with your actual image path

export default function Story() {
  const storyRef = useRef();
  let timeEntered = null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeEntered = Date.now();
        } else if (timeEntered) {
          const timeSpent = Math.round((Date.now() - timeEntered) / 1000);
          if (timeSpent > 3 && window.gtag) {
            window.gtag('event', 'time_on_story_section', {
              event_category: 'Engagement',
              event_label: 'Story Section',
              value: timeSpent,
            });
          }
          timeEntered = null;
        }
      },
      { threshold: 0.5 }
    );

    if (storyRef.current) observer.observe(storyRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" ref={storyRef} className="py-16 px-8 md:px-12 max-w-7xl mx-auto md:mb-24 md:h-screen">
      <h2 className="text-4xl md:text-5xl mb-10 font-extrabold font-poppins">
        <span className="text-brand">Co</span>Story
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-stretch md:w-full">
        {/* Left: Story Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-gray-700 space-y-5 font-josefin"
        >
          {/* Mobile Profile Picture */}
          <div className="md:hidden flex justify-center">
            <img
              src={profileImage}
              alt="Altamash Khan"
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-brand shadow-md"
            />
          </div>

          <h3 className="text-2xl font-semibold">How it all began</h3>
          <p className="text-xl font-regular">
            CoPage is a one-person mission to make powerful websites simple and accessible. I started building websites out of pure curiosity — and soon realized how many creatives, founders, and small business owners needed a beautiful online presence without the complexity. What began as a personal project quickly turned into something more: a platform for others to launch their own ideas.
          </p>

          <h3 className="text-2xl font-semibold">The Vision</h3>
          <p className="text-xl font-regular">
            I believe in clean design, thoughtful code, and putting stories first. CoPage isn't just about building pages — it's about building presence. Whether you're showcasing your work or launching a brand, this is your space to grow, connect, and be seen.
          </p>

          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="text-xl font-regular">
            Hi, I’m <strong>Altamash Khan</strong> — designer, developer, and creator of CoPage. I wear every hat here, from wireframing to writing code. With a background in creative development and a passion for intuitive design, I built CoPage to help people like you bring your ideas online with clarity and impact.
          </p>

          <p className="text-xl font-regular">
            Your brand deserves more than a template. If you’re ready to turn your ideas into something beautiful — <a href="#build" className="underline text-brand">let’s start the conversation</a>.
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

      <div className="md:hidden bg-brand rounded-xl p-5 mt-8">
        <Testimonials className="text-gray-900" />
      </div>
    </section>
  );
}
