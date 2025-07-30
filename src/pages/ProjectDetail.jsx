import { useParams } from 'react-router-dom'; // if using React Router
import { motion } from 'framer-motion';

export default function ProjectDetail() {
  const { id } = useParams(); // Get project ID from the URL

  // Placeholder data — you would fetch or pass this dynamically
  const project = {
    title: 'Sample Project',
    subtitle: 'A beautiful design for a bold brand',
    description: `This project was built with modern web technologies to ensure responsive, accessible, and high-performing design. The focus was on crafting a unique identity that resonates with the brand's vision.`,
    images: ['/assets/project1.jpg', '/assets/project2.jpg'],
    tools: ['React', 'Tailwind CSS', 'Framer Motion'],
    url: 'https://example.com',
  };

  return (
    <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto font-josefin">
      <motion.h1
        className="text-4xl font-bold mb-2 text-brand"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {project.title}
      </motion.h1>
      <p className="text-lg text-gray-600 mb-6">{project.subtitle}</p>

      <div className="space-y-4">
        <p className="text-xl text-gray-700 leading-relaxed">{project.description}</p>
        <ul className="flex gap-4 flex-wrap text-sm font-semibold text-brand mt-4">
          {project.tools.map((tool) => (
            <li key={tool} className="bg-yellow-100 px-3 py-1 rounded-full">{tool}</li>
          ))}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              className="rounded-xl shadow-lg"
            />
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-brand text-white px-6 py-3 rounded-md hover:bg-yellow-500 transition"
        >
          Visit Live Site
        </a>
      </div>
    </section>
  );
}
