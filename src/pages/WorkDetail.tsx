import { useParams, Link } from 'react-router-dom';
import { workExperience } from '../data/portfolio';
import { useScrollToSection } from '../hooks/useScrollToSection';
import CompanyAvatar from '../components/ui/CompanyAvatar';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const getCompanyLinkProps = (companyUrl?: string) =>
  companyUrl
    ? {
        href: companyUrl,
        target: '_blank',
        rel: 'noreferrer',
      }
    : { href: '#' };

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>();
  const job = workExperience.find((j) => j.id === id);
  const scrollToSection = useScrollToSection();

  if (!job) {
    return (
      <div className="min-h-screen bg-app flex items-center justify-center px-4">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-[color:var(--color-text)]">Experience not found</h1>
          <Link
            to="/"
            onClick={() => scrollToSection('#work')}
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-[color:var(--color-text)] hover:bg-surface-muted"
          >
            Back to work list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-app pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Breadcrumbs
          className="mb-6"
          items={[
            { label: 'Home', to: '/', onClick: () => scrollToSection('#home') },
            { label: 'Work', to: '/', onClick: () => scrollToSection('#work') },
            { label: job.company, current: true },
          ]}
        />

        <section className="relative overflow-hidden rounded-3xl bg-surface shadow-2xl shadow-black/10">
          <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-primary-500/10 via-transparent to-surface-muted" aria-hidden />
          <div className="relative p-8 md:p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <CompanyAvatar
                  name={job.company}
                  logo={job.logo}
                  size="lg"
                  shape="rounded"
                  className="bg-surface p-2 shadow-sm"
                  fallbackClassName="bg-surface-muted text-xl font-semibold text-[color:var(--color-text)]"
                />
                <div>
                  <p className="text-sm uppercase tracking-[0.08em] text-[color:var(--color-text-muted)]">{job.company}</p>
                  <h1 className="text-2xl md:text-3xl font-bold text-[color:var(--color-text)]">{job.title}</h1>
                  <p className="text-sm text-[color:var(--color-text-muted)] mt-1">{job.location}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                {job.employmentType && (
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-text)] bg-surface-muted/60">
                    {job.employmentType}
                  </span>
                )}
                <span className="inline-flex items-center rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-[color:var(--color-text)]">
                  {job.start} — {job.end || 'Present'}
                </span>
                {job.companyUrl && (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90"
                  >
                    Visit company
                  </a>
                )}
              </div>
            </div>

            {job.overview && (
              <p className="max-w-4xl text-base leading-relaxed text-[color:var(--color-text)]">{job.overview}</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-surface-muted/60 px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-[color:var(--color-text-muted)]">Location</p>
                <p className="text-sm font-semibold text-[color:var(--color-text)]">{job.location}</p>
              </div>
              <div className="rounded-2xl bg-surface-muted/60 px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-[color:var(--color-text-muted)]">Duration</p>
                <p className="text-sm font-semibold text-[color:var(--color-text)]">{job.start} — {job.end || 'Present'}</p>
              </div>
              <div className="rounded-2xl bg-surface-muted/60 px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-[color:var(--color-text-muted)]">Company</p>
                <a
                  {...getCompanyLinkProps(job.companyUrl)}
                  className="text-sm font-semibold text-primary-600 hover:underline"
                >
                  {job.company}
                </a>
              </div>
            </div>

            {job.techStack && job.techStack.length > 0 && (
              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.08em] text-[color:var(--color-text-muted)]">Stack I used</p>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech) => (
                    <span key={tech} className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-sm text-[color:var(--color-text)] shadow-sm">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5">
          <section className="md:col-span-3 rounded-2xl bg-surface p-6 shadow-lg shadow-black/5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-[color:var(--color-text-muted)]">What I led</p>
                <h2 className="text-xl font-semibold text-[color:var(--color-text)]">Responsibilities</h2>
              </div>
              <Link
                to="/"
                onClick={() => scrollToSection('#work')}
                className="text-sm font-medium text-primary-600 hover:underline"
              >
                Back to work
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {job.responsibilities && job.responsibilities.length > 0 ? (
                job.responsibilities.map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl bg-surface-muted/50 px-4 py-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" aria-hidden />
                    <p className="text-sm leading-relaxed text-[color:var(--color-text)]">{item}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-[color:var(--color-text-muted)]">No entries listed.</p>
              )}
            </div>
          </section>

          <section className="md:col-span-2 rounded-2xl bg-surface p-6 shadow-lg shadow-black/5">
            <p className="text-xs uppercase tracking-[0.08em] text-[color:var(--color-text-muted)]">Impact</p>
            <h2 className="text-xl font-semibold text-[color:var(--color-text)]">Highlights</h2>
            <div className="mt-4 space-y-4">
              {job.achievements && job.achievements.length > 0 ? (
                job.achievements.map((item) => (
                  <div key={item} className="rounded-xl bg-gradient-to-r from-primary-500/10 via-surface to-surface px-4 py-3 shadow-sm">
                    <p className="text-sm font-medium text-[color:var(--color-text)]">{item}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-[color:var(--color-text-muted)]">No entries listed.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
