import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, image, tags, liveUrl, detailSlug }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg min-w-[80%] sm:min-w-[60%] md:min-w-[30%]">
      {/* Yellow drop shadow behind image */}
      <div />

      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="relative z-10 w-full h-64 object-cover rounded-lg"
      />

      {/* Overlay on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-20"
      >
        <a
          href={liveUrl || `/projects/${detailSlug}`}
          className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-yellow-300 transition"
        >
          View Project
        </a>
      </motion.div>

      {/* Project Info */}
      <div className="bg-white px-4 py-3 relative z-10">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
