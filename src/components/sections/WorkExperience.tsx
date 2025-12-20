import { Link } from 'react-router-dom';
import { workExperience } from '../../data/portfolio';
import CompanyAvatar from '../ui/CompanyAvatar';

export default function WorkExperienceSection() {
  return (
    <section id="work" className="py-16 bg-app">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Roles where I built scalable systems, reliable data pipelines, and user-facing products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto">
          {workExperience.map((job) => (
            <Link
              key={job.id}
              to={`/work/${job.id}`}
              className="bg-surface border border-theme p-6 rounded-xl flex flex-col items-center justify-center hover:shadow-lg transition-shadow min-w-[240px]"
            >
              <CompanyAvatar
                name={job.company}
                logo={job.logo}
                size="md"
                shape="circle"
                className="mb-4"
                fallbackClassName="bg-surface-muted text-gray-800 dark:text-gray-200 font-semibold text-lg"
              />
              <div className="text-base font-semibold text-center dark:text-white">{job.company}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">{job.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
