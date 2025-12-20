import { motion } from 'framer-motion';
import { FiCoffee, FiCode, FiMapPin } from 'react-icons/fi';
import { personalInfo, skills } from '../../data/portfolio';

export default function About() {
  const category = 'cloud tools';

  const skillCategories = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    backend: skills.filter((s) => s.category === 'backend'),
    [category]: skills.filter((s) => s.category === 'cloud tools'),
    design: skills.filter((s) => s.category === 'design'),
    AI: skills.filter((s) => s.category === 'AI'),
  };

  const stats = [
    { icon: <FiCode />, label: 'Years Experience', value: '5+' },
    { icon: <FiCoffee />, label: 'Cups of Coffee', value: '∞' },
  ];

  return (
    <section id="about" className="relative py-20 bg-white scroll-mt-20">
      {/* Fade-in gradient at top for smooth transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-600 xl:text-lg max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.3 }}
          >
            <div className="prose prose-lg">
              {personalInfo.about.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4 xl:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center text-gray-700">
                <FiMapPin className="mr-3 text-primary-600" size={20} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                <span className="text-gray-700">{personalInfo.availability}</span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl xl:text-3xl font-bold mb-6">Skills & Technologies</h3>
            
            <div className="space-y-6">
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-2 gap-4 w-fit"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl glass aspect-square w-40 md:w-48"           
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4 text-2xl">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

