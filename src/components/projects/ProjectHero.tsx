import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import ProjectImage from './ProjectImage';
import type { Project } from '../../types';

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const scrollToSection = useScrollToSection();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -right-10 h-64 w-64 rounded-full bg-indigo-500 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-sky-500 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl xl:max-w-[80vw] 4xl:max-w-[70vw] pb-12 pt-10 px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <nav className="flex items-center gap-2 text-sm text-slate-300">
          <Link
            to="/"
            onClick={() => scrollToSection('#projects')}
            className="transition hover:text-white"
          >
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
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl xl:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-200 xl:text-xl">
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
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-white/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
                >
                  <FiGithub size={18} />
                  Explore Code
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-slate-200/70"
                >
                  <FiGithub size={18} />
                  Private Repository
                </button>
              )}
            </div>
          </div>

          <ProjectImage project={project} />
        </div>
      </div>
    </section>
  );
}