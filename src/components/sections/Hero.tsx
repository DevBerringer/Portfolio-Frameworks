import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../../data/portfolio';
import AnimatedBlobBackground from '../ui/AnimatedBlobBackground';

const iconMap: Record<string, React.ReactElement> = {
  github: <FiGithub size={24} />,
  linkedin: <FiLinkedin size={24} />,
  twitter: <FiTwitter size={24} />,
  email: <FiMail size={24} />,
};

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Detect mobile for faster animations
  const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window);
  const animationDelay = isMobile ? 0.05 : 0.1;
  const animationDuration = isMobile ? 0.3 : 0.5;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Animated Background Elements */}
      <AnimatedBlobBackground intensity="high" />

      {/* Fade-out gradient at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationDuration, delay: animationDelay }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationDuration }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationDuration, delay: animationDelay * 2 }}
            className="text-xl md:text-2xl text-gray-600 mb-4"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationDuration, delay: animationDelay * 3 }}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationDuration, delay: animationDelay * 4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/50"
            >
              View My Work
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-primary-600 hover:text-primary-600 transition-colors"
            >
              <Link to="/contact" className="block w-full h-full">
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationDuration, delay: animationDelay * 5 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

