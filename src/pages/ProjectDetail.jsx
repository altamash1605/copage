import { useParams } from 'react-router-dom'; import projects from '../data/projects';

export default function ProjectDetail() { const { slug } = useParams(); const project = projects.find((p) => p.detailSlug === slug);

if (!project) { return <div className="text-red-600 text-center mt-10">Project not found.</div>; }

return ( <div className="max-w-4xl mx-auto px-4 py-12 font-josefin"> <h1 className="text-3xl sm:text-5xl font-bold text-brand mb-6 text-center"> {project.title} </h1> <img
src={project.image}
alt={project.title}
className="w-full rounded-xl shadow-md mb-8 max-h-[400px] object-cover"
/>

<p className="text-lg text-gray-700 mb-6 leading-relaxed">
    {project.details.summary}
  </p>

  <section className="mb-6">
    <h2 className="text-2xl font-semibold text-brand mb-2">Features</h2>
    <ul className="list-disc list-inside text-gray-800 space-y-1">
      {project.details.features.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
  </section>

  <section className="mb-6">
    <h2 className="text-2xl font-semibold text-brand mb-2">Problem</h2>
    <p className="text-gray-700 leading-relaxed">{project.details.problem}</p>
  </section>

  <section className="mb-6">
    <h2 className="text-2xl font-semibold text-brand mb-2">Solution</h2>
    <p className="text-gray-700 leading-relaxed">{project.details.solution}</p>
  </section>

  <section className="mb-6">
    <h2 className="text-2xl font-semibold text-brand mb-2">Tech Stack</h2>
    <div className="flex flex-wrap gap-2">
      {project.details.techStack.map((tech, i) => (
        <span
          key={i}
          className="bg-brand text-white px-3 py-1 rounded-full text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </section>

  {project.liveUrl && (
    <div className="mt-8 text-center">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brand text-white px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
      >
        Visit Live Project
      </a>
    </div>
  )}
</div>

); }

