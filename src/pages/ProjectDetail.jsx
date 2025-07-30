import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import MainLayout from '../layouts/MainLayout';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.detailSlug === slug);

  if (!project) {
    return (
      <MainLayout>
        <div className="text-center py-20 text-red-600 text-xl font-bold">
          Project not found.
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="max-w-5xl mx-auto px-6 py-12 font-josefin text-gray-800">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-lg text-gray-600">{project.description}</p>
        </div>

        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg shadow-lg mb-8 w-full max-h-[400px] object-cover"
        />

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">About the Project</h2>
            <p>{project.longDescription}</p>
          </div>

          {project.features && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
              <ul className="list-disc list-inside space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-yellow-100 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Links */}
        <div className="mt-10 flex gap-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              View Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
