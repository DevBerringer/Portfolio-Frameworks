import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLock } from 'react-icons/fi';
import { projects } from '../../data/portfolio';
import type { Project } from '../../types';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect if device supports touch
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle swipe gestures (mobile only)
  const handleDragEnd = (_event: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 50; // minimum distance for a swipe
    const velocityThreshold = 500; // minimum velocity for a swipe
    
    // Check both distance and velocity for better UX
    if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      // Swiped right -> go to previous
      goToPrevious();
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      // Swiped left -> go to next
      goToNext();
    }
  };

  // Get the projects to display (previous, current, next)
  const getPreviousIndex = () => (currentIndex - 1 + projects.length) % projects.length;
  const getNextIndex = () => (currentIndex + 1) % projects.length;

  return (
    <section id="projects" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works. Each project represents a unique challenge
            and showcases different aspects of my skillset.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full mx-auto mb-12 overflow-hidden">
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-visible md:overflow-hidden">
            {/* Previous Card (Left) */}
            <AnimatePresence initial={false}>
              <motion.div
                key={`prev-${getPreviousIndex()}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onClick={goToPrevious}
                className="absolute left-0 md:left-0 w-[35%] md:w-[50%] h-[350px] md:h-[450px] z-10 cursor-pointer"
                style={{
                  filter: 'blur(4px) grayscale(60%)',
                  transform: 'scale(0.75) translateX(-10%)',
                }}
                whileHover={{ opacity: 0.4 }}
              >
                <ProjectCard project={projects[getPreviousIndex()]} isActive={false} />
              </motion.div>
            </AnimatePresence>

            {/* Current Card (Center) */}
            <AnimatePresence initial={false}>
              <motion.div
                key={`current-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                drag={isTouchDevice ? "x" : false}
                dragConstraints={{ left: -150, right: 150 }}
                dragElastic={0.15}
                dragMomentum={false}
                onDragEnd={isTouchDevice ? handleDragEnd : undefined}
                style={{
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                }}
                className={`absolute z-20 w-[90%] md:w-[66.666%] h-[400px] md:h-[500px] touch-pan-y ${
                  isTouchDevice ? 'cursor-grab active:cursor-grabbing' : ''
                }`}
              >
                <ProjectCard project={projects[currentIndex]} isActive={true} />
              </motion.div>
            </AnimatePresence>

            {/* Next Card (Right) */}
            <AnimatePresence initial={false}>
              <motion.div
                key={`next-${getNextIndex()}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onClick={goToNext}
                className="absolute right-0 md:right-0 w-[35%] md:w-[50%] h-[350px] md:h-[450px] z-10 cursor-pointer"
                style={{
                  filter: 'blur(4px) grayscale(60%)',
                  transform: 'scale(0.75) translateX(10%)',
                }}
                whileHover={{ opacity: 0.4 }}
              >
                <ProjectCard project={projects[getNextIndex()]} isActive={false} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/DevBerringer"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-full font-medium hover:bg-primary-600 hover:text-white transition-colors"
          >
            <FiGithub className="mr-2" size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, isActive }: { project: Project; isActive: boolean }) {
  return (
    <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
      {/* Project Image Background */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-200 text-sm md:text-base mb-6 line-clamp-2">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {!project.demoUrl && !project.githubUrl ? (
              <button
                disabled
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium cursor-not-allowed opacity-70 border border-white/30"
                onClick={(e) => e.stopPropagation()}
              >
                <FiLock className="mr-2" size={18} />
                Private Repository
              </button>
            ) : (
              <>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink className="mr-2" size={18} />
                    View Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/30 transition-colors border border-white/30"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub className="mr-2" size={18} />
                    Code
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
