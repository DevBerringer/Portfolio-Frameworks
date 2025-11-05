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
    <section id="projects" className="py-10 bg-gray-50 overflow-hidden scroll-mt-20">
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
            Here is some of my recent work. Each project represents a unique challenge
            and showcases different aspects of my skillset.
          </p>
        </motion.div>

        {/* Desktop Carousel - Hidden on mobile */}
        <div className="hidden md:block relative w-full mx-auto mb-12 overflow-hidden">
          <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
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

          {/* Navigation Dots - Desktop only */}
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

        {/* Mobile Unique Layout - Visible on mobile only */}
        <div className="md:hidden mb-12">
          <div className="space-y-0">
            {projects.map((project, index) => (
              <MobileProjectLayout key={project.id} project={project} index={index} total={projects.length} />
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

// Unique Mobile Layout - No cards! Editorial storytelling format
function MobileProjectLayout({ project, index, total }: { project: Project; index: number; total: number }) {
  const isLast = index === total - 1;
  
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`relative ${!isLast ? 'mb-10' : 'mb-12'}`}
    >
      {/* Visual timeline indicator - left side */}
      <div className="absolute left-0 top-0 bottom-0 w-1 flex flex-col items-center">
        {!isLast && (
          <div className="w-1 flex-1 bg-gradient-to-b from-primary-500 via-primary-400/50 to-transparent opacity-20" />
        )}
        <div className="absolute top-0 w-6 h-6 bg-primary-600 rounded-full border-4 border-gray-50 shadow-lg z-10" />
      </div>

      {/* Content area - offset from timeline */}
      <div className="ml-8">
        {/* Large hero image - full bleed style */}
        <motion.div 
          className="relative w-full mb-6"
          initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileInView={{ scale: 1.1 }}
              initial={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
          </div>
        </motion.div>

        {/* Title - Large, editorial style */}
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="text-4xl font-black text-gray-900 mb-3 leading-tight tracking-tight"
        >
          {project.title}
        </motion.h2>

        {/* Tags - minimal, inline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tag}
              className="text-xs font-semibold text-primary-600 uppercase tracking-wider"
            >
              {tag}{tagIndex < project.tags.length - 1 && ' • '}
            </span>
          ))}
        </motion.div>

        {/* Description - editorial paragraph style */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
          className="text-gray-700 mb-6 leading-relaxed text-[16px] max-w-none font-light"
          style={{ lineHeight: '1.75' }}
        >
          {project.description}
        </motion.p>

        {/* Action buttons - minimal, text-focused with consistent spacing */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
          className="flex gap-4 pt-4 border-b mb-12 border-gray-200 min-h-[48px] items-center"
        >
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
            >
              <FiExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              <span>Live Demo</span>
              <span className="text-gray-400">→</span>
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-900 transition-colors group"
            >
              <FiGithub size={18} className="group-hover:rotate-12 transition-transform" />
              <span>Source Code</span>
              <span className="text-gray-400">→</span>
            </motion.a>
          )}
          {!project.demoUrl && !project.githubUrl && (
            <span className="flex items-center gap-2 text-gray-400 font-medium">
              <FiLock size={18} />
              Private Repository
            </span>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
}
