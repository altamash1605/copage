import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import testimonials from '../data/testimonials';

export default function Testimonials({ className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Auto scroll every 4s

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`h-32 md:h-24 overflow-hidden font-josefin md:text-white relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="absolute w-full"
        >
          <p className="text-lg italic leading-relaxed mb-3">
            “{testimonials[index].quote}”
          </p>
          <p className="text-sm font-bold mt-1">
            — {testimonials[index].author}, <span className="italic font-normal">{testimonials[index].role}</span>
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
