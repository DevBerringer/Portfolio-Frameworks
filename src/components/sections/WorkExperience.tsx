import { Link } from 'react-router-dom';
import { workExperience } from '../../data/portfolio';
import CompanyAvatar from '../ui/CompanyAvatar';

export default function WorkExperienceSection() {



  return (
    <section className="min-h-screen flex flex-col justify-center relative pb-16 pt-25">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 dark:text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 xl:text-lg max-w-2xl mx-auto">
            Roles where I built scalable systems, reliable data pipelines, and user-facing products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto">
          {workExperience.map((job) => (
            <Link
              key={job.id}
              to={`/work/${job.id}`}
              className="bg-surface p-6 rounded-xl flex flex-col items-center justify-center hover:shadow-lg transition-shadow min-w-[240px] w-full max-w-sm hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300"
            >
              <CompanyAvatar
                name={job.company}
                logo={job.logo}
                size="md"
                shape="rounded"
                className="mb-4"
                fallbackClassName="bg-surface-muted text-gray-800 dark:text-gray-200 font-semibold text-lg"
              />
              <div className="text-base font-semibold text-center dark:text-white">{job.company}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">{job.title}</div>
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 text-center">
                <div className="mt-1">
                  {job.start} — {job.end ?? 'Present'}{' '}
                  {job.employmentType && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-surface-muted rounded">
                      {job.employmentType}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
