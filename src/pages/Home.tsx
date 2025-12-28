import {useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/sections/Hero';
import WorkExperienceSection from '../components/sections/WorkExperience';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import { useSection } from '../context/SectionContext';
import { sections as sectionIds } from '../constants/sections';

const sections = [
  { Component: Hero, key: 'hero', id: 'home' },
  { Component: WorkExperienceSection, key: 'work', id: 'work' },
  { Component: About, key: 'about', id: 'about' },
  { Component: Projects, key: 'projects', id: 'projects' },
];

export default function Home() {
  const { activeSection, setActiveSection } = useSection();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle wheel scroll for desktop
  useEffect(() => {
    if (isMobile) return;

    let lastScrollTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < 1000) return; // Debounce

      const currentIndex = sectionIds.indexOf(activeSection);
      if (e.deltaY > 0) {
        // Scroll down
        if (currentIndex < sectionIds.length - 1) {
          setActiveSection(sectionIds[currentIndex + 1]);
          lastScrollTime = now;
        }
      } else {
        // Scroll up
        if (currentIndex > 0) {
          setActiveSection(sectionIds[currentIndex - 1]);
          lastScrollTime = now;
        }
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSection, isMobile, setActiveSection]);

  if (isMobile) {
    return (
      <div className="flex flex-col pt-20">
        {sections.map(({ Component, key, id }) => (
          <div key={key} id={id} className="w-full">
            <Component />
          </div>
        ))}
      </div>
    );
  }

  const ActiveComponent = sections.find(s => s.id === activeSection)?.Component || Hero;

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full overflow-y-auto no-scrollbar"
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

