import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ Import Link

export default function ProjectCard({ title, description, image, tags, liveUrl, detailSlug }) {
  const isInternal = !liveUrl;

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg min-w-[90%] sm:min-w-[70%] md:min-w-[30%] h-[450px]">
      
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="relative z-10 w-full h-64 object-cover rounded-lg"
      />

      {/* Overlay for desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="hidden md:flex absolute inset-0 bg-black bg-opacity-60 items-center justify-center z-20 group-hover:flex"
      >
        {isInternal ? (
          <Link
            to={`/projects/${detailSlug}`}
            className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-brand transition"
          >
            View Project
          </Link>
        ) : (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-brand transition"
          >
            View Live
          </a>
        )}
      </motion.div>

      {/* Always-visible button on mobile */}
      <div className="md:hidden absolute bottom-[13rem] left-1/2 transform -translate-x-1/2 z-20">
        {isInternal ? (
          <Link
            to={`/projects/${detailSlug}`}
            className="px-4 py-2 bg-white text-black font-semibold rounded shadow-md hover:bg-brand transition"
          >
            View Project
          </Link>
        ) : (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black font-semibold rounded shadow-md hover:bg-brand transition"
          >
            View Live
          </a>
        )}
      </div>

      {/* Project Info */}
      <div className="bg-white px-4 py-3 relative z-10 h-[calc(100%-12rem)]">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1 font-josefin font-bold">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, i) => (
            <span key={i} className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
