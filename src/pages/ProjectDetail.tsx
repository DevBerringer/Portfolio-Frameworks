import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolio';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const screenshots = project?.screenshots?.length ? project.screenshots : project?.image ? [project.image] : [];
  const [activeScreenshot, setActiveScreenshot] = useState(screenshots[0] ?? '');

  useEffect(() => {
    setActiveScreenshot(screenshots[0] ?? '');
  }, [project?.id, screenshots]);

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

          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
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

            <div className="flex flex-col gap-6">
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full rounded-3xl object-cover shadow-2xl shadow-slate-900/40"
              />
              <dl className="grid grid-cols-2 gap-4 text-sm text-slate-100">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-300">Status</dt>
                  <dd className="mt-2 text-base font-semibold">
                    {project.githubUrl ? 'Open Source' : 'Private Build'}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-slate-300">Completed</dt>
                  <dd className="mt-2 text-base font-semibold">
                    {project.date ? new Date(project.date).toLocaleDateString() : 'In progress'}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {project.detailedDescription && (
          <section className="grid gap-6 border-b border-slate-200 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Overview
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">About this project</h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              {project.detailedDescription}
            </p>
          </section>
        )}

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          {project.technologies && project.technologies.length > 0 && (
            <section className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Stack
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Technologies used</h2>
              </div>
              <div className="space-y-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
                    <h3 className="text-base font-semibold text-slate-900">{tech.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{tech.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Highlights
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Key outcomes</h2>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      ✓
                    </span>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {project.challenges && (
          <section className="grid gap-6 border-b border-slate-200 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Strategy
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">Challenges & solutions</h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600">{project.challenges}</p>
          </section>
        )}

        {screenshots.length > 0 && (
          <section className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Gallery
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Product visuals</h2>
              </div>
              <p className="text-sm text-slate-500">Tap a thumbnail to preview.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)]">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/60">
                {activeScreenshot && (
                  <img
                    src={activeScreenshot}
                    alt={`${project.title} preview`}
                    className="h-[22rem] w-full object-cover sm:h-[28rem]"
                  />
                )}
              </div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {screenshots.map((screenshot, index) => {
                  const isActive = screenshot === activeScreenshot;
                  return (
                    <button
                      key={screenshot}
                      type="button"
                      onClick={() => setActiveScreenshot(screenshot)}
                      className={`overflow-hidden rounded-2xl border transition ${
                        isActive
                          ? 'border-slate-900 ring-2 ring-slate-900/20'
                          : 'border-slate-200 hover:border-slate-400'
                      }`}
                      aria-label={`View ${project.title} screenshot ${index + 1}`}
                    >
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="h-20 w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
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
