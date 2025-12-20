import { useParams, Link } from 'react-router-dom';
import { workExperience } from '../data/portfolio';
import { useScrollToSection } from '../hooks/useScrollToSection';
import CompanyAvatar from '../components/ui/CompanyAvatar';

const getCompanyLinkProps = (companyUrl?: string) =>
  companyUrl
    ? {
        href: companyUrl,
        target: '_blank',
        rel: 'noreferrer',
      }
    : { href: '#' };

const renderListItems = (items?: string[]) =>
  items && items.length > 0 ? (
    <ul className="list-disc list-inside space-y-2 text-[color:var(--color-text)]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ) : (
    <p className="text-sm text-[color:var(--color-text-muted)]">No entries listed.</p>
  );

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>();
  const job = workExperience.find((j) => j.id === id);
  const scrollToSection = useScrollToSection();

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Experience not found</h1>
                      <Link 
                to="/"             
                onClick={() => scrollToSection('#work')}
                className="text-primary-600 hover:underline"
            >
                Back to work list
                </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-app py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute left-0 -top-10 md:-top-6">
          <Link to="/" onClick={() => scrollToSection('#work')} className="text-primary-600 hover:underline">← Back</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-8">
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <div className="flex items-center gap-4">
                <CompanyAvatar
                  name={job.company}
                  logo={job.logo}
                  size="lg"
                  shape="rounded"
                  className="border border-theme bg-surface p-2"
                  fallbackClassName="bg-surface-muted border border-theme text-xl font-semibold text-[color:var(--color-text)]"
                />
                <div>
                  <h1 className="text-xl font-bold text-[color:var(--color-text)]">{job.title}</h1>
                  <a
                    {...getCompanyLinkProps(job.companyUrl)}
                    className="text-sm text-[color:var(--color-text-muted)] hover:underline"
                  >
                    {job.company}
                  </a>
                  <div className="mt-2 text-xs text-[color:var(--color-text-muted)]">
                    <div>{job.location}</div>
                    <div className="mt-1">{job.start} — {job.end} {job.employmentType && (<span className="ml-2 px-2 py-0.5 text-xs bg-surface-muted border border-theme rounded">{job.employmentType}</span>)}</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                {job.companyUrl && (
                  <a href={job.companyUrl} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center px-3 py-1.5 rounded-md bg-primary-50 text-primary-700 text-sm hover:opacity-90">Company site</a>
                )}
              </div>

              {job.techStack && job.techStack.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-[color:var(--color-text-muted)]">Tech stack</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.techStack.map((tech) => (
                      <span key={tech} className="inline-block px-3 py-1 text-sm bg-surface-muted border border-theme rounded-full text-[color:var(--color-text)]">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </aside>

          <main className="md:col-span-2">
            <div className="space-y-6">
              {job.overview && (
                <section className="bg-surface-muted border border-theme p-6 rounded-lg shadow-sm">
                  <h2 className="text-lg font-semibold mb-2 text-[color:var(--color-text)]">Overview</h2>
                  <p className="text-[color:var(--color-text)]">{job.overview}</p>
                </section>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="p-6 rounded-lg bg-surface border border-theme shadow-sm">
                  <h3 className="text-md font-semibold mb-3 text-[color:var(--color-text)]">Responsibilities</h3>
                  {renderListItems(job.responsibilities)}
                </section>

                <section className="p-6 rounded-lg bg-surface border border-theme shadow-sm">
                  <h3 className="text-md font-semibold mb-3 text-[color:var(--color-text)]">Achievements</h3>
                  {renderListItems(job.achievements)}
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
