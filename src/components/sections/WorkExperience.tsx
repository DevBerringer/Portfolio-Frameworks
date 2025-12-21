import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { workExperience } from '../../data/portfolio';
import CompanyAvatar from '../ui/CompanyAvatar';

const MotionLink = motion(Link);

export default function WorkExperienceSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  } as const;

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  } as const;

  return (
    <section id="work" className="py-16 bg-app">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Roles where I built scalable systems, reliable data pipelines, and user-facing products.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {workExperience.map((job) => (
            <MotionLink
              key={job.id}
              to={`/work/${job.id}`}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-surface border border-theme p-6 rounded-xl flex flex-col items-center justify-center hover:shadow-lg transition-shadow min-w-[240px] w-full max-w-sm"
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
                    <span className="ml-2 px-2 py-0.5 text-xs bg-surface-muted border border-theme rounded">
                      {job.employmentType}
                    </span>
                  )}
                </div>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
