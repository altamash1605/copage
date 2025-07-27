import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import ProjectCard from './ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-8 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl mb-10 text-left font-bold font-poppins"><span className='text-brand font-bold font-poppins'>Co</span>Projects</h2>

        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={3.2}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
            }}
            breakpoints={{
                320: { slidesPerView: 1.3 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
            }}
            className="pb-12"
         >
  {projects.map((project, index) => (
    <SwiperSlide key={index}>
      <ProjectCard {...project} />
    </SwiperSlide>
  ))}
</Swiper>
    
    </section>
  );
}
