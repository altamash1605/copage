import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-16 px-8 md:px-12 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className="text-4xl md:text-5xl mb-10 text-left font-bold font-poppins">
        <span className="text-brand font-bold font-poppins">Co</span>Projects
      </h2>
      <p className="font-josefin font-regular text-gray-900 text-xl">Explore a curated showcase of collaborative creations — crafted with passion, precision, and purpose. From smart tools to elegant interfaces, each project reflects the essence of teamwork and innovation. Dive in, get inspired, and see how CoPage brings ideas to life with real-world impact.
      </p>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={3.2}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{  
          100: { slidesPerView: 1.2 },
          700: { slidesPerView: 2 },
          1024: { slidesPerView: 3.2 },
        }}
        className="py-12"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div variants={slideVariants} transition={{ duration: 0.3}}>
              <ProjectCard {...project} />
            </motion.div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination !mt-4 [&_.swiper-pagination-bullet-active]:!bg-red-600 [&_.swiper-pagination-bullet]:!bg-brand" />
      </Swiper>
    </motion.section>
  );
}
