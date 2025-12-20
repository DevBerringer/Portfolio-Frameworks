import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolio';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-10 h-64 w-64 rounded-full bg-indigo-500 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-sky-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-300">
            <Link to="/" className="transition hover:text-white">
              Projects
            </Link>
            <span>/</span>
            <span className="text-white">{project.title}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                Case Study
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-200">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    <FiExternalLink size={18} />
                    View Live Demo
                  </a>
                )}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
                  >
                    <FiGithub size={18} />
                    Explore Code
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200/70"
                  >
                    <FiGithub size={18} />
                    Private Repository
                  </button>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur">
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full rounded-2xl object-cover shadow-lg"
              />
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-100">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Status</p>
                  <p className="mt-2 text-base font-semibold">
                    {project.githubUrl ? 'Open Source' : 'Private Build'}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Completed</p>
                  <p className="mt-2 text-base font-semibold">
                    {project.date ? new Date(project.date).toLocaleDateString() : 'In progress'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        {project.detailedDescription && (
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Overview
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">About this project</h2>
              </div>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {project.detailedDescription}
            </p>
          </section>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Stack
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Technologies used</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-base font-semibold text-slate-900">{tech.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.features && project.features.length > 0 && (
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Highlights
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Key outcomes</h2>
            </div>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.challenges && (
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Strategy
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Challenges & solutions</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{project.challenges}</p>
          </section>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Gallery
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Product visuals</h2>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {project.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="h-56 w-full rounded-2xl object-cover shadow-md"
                />
              ))}
            </div>
          </section>
        )}

        {project.date && (
          <div className="text-center text-sm text-slate-500">
            Project completed on {new Date(project.date).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
