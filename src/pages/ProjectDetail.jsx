import { useParams } from 'react-router-dom';
import projects from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-red-600 font-semibold">
        Project not found.
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 font-josefin">
      <h1 className="text-4xl font-bold text-brand mb-4">{project.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-xl shadow-md mb-6"
        />
      )}

      {project.details && (
        <div className="text-gray-800 space-y-4">
          {project.details.map((detail, idx) => (
            <p key={idx}>{detail}</p>
          ))}
        </div>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-brand text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
        >
          Visit Project
        </a>
      )}
    </section>
  );
}
