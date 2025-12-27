import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import Hero from '../components/sections/Hero';
import WorkExperienceSection from '../components/sections/WorkExperience';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';

const sections = [
  { Component: Hero, key: 'hero', id: 'home' },
  { Component: WorkExperienceSection, key: 'work', id: 'work' },
  { Component: About, key: 'about', id: 'about' },
  { Component: Projects, key: 'projects', id: 'projects' },
];

const SectionWrapper = ({ 
  children, 
  index, 
  total, 
  scrollYProgress 
}: { 
  children: React.ReactNode; 
  index: number; 
  total: number; 
  scrollYProgress: MotionValue<number>;
}) => {
  const step = 1 / (total - 1);
  const center = index * step;
  const prevMidpoint = center - step / 2;
  const nextMidpoint = center + step / 2;
  const overlap = step * 0.2; // Controls the crossfade duration
  
  // Scale: 0.5 (far away) -> 1 (focus) -> 1.5 (past camera)
  const scale = useTransform(scrollYProgress, 
    [center - step, center, center + step],
    [0.8, 1, 1.2]
  );
  
  // Opacity: Crossfade at midpoints
  const opacity = useTransform(scrollYProgress, 
    [
      prevMidpoint - overlap, 
      prevMidpoint + overlap, 
      nextMidpoint - overlap, 
      nextMidpoint + overlap
    ],
    [0, 1, 1, 0]
  );

  // Blur: Depth of field effect
  const filter = useTransform(scrollYProgress,
    [center - step, center, center + step],
    ["blur(8px)", "blur(0px)", "blur(8px)"]
  );

  // Hide completely when out of view to prevent interaction interference
  const display = useTransform(scrollYProgress, (v) => 
    (v < prevMidpoint - overlap || v > nextMidpoint + overlap) ? "none" : "flex"
  );

  return (
    <motion.div 
      style={{ scale, opacity, filter, display, zIndex: total - index }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar bg-app">
        {children}
      </div>
    </motion.div>
  );
};

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Add spring physics to smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col bg-app">
        {sections.map(({ Component, key, id }) => (
          <div key={key} id={id} className="w-full">
            <Component />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={targetRef} className="relative h-[600vh] bg-app">
      {/* Scroll Anchors for Navigation */}
      {sections.map(({ id }, index) => (
        <div
          key={id}
          id={id}
          className="absolute w-full h-px pointer-events-none"
          style={{ 
            // Position anchors based on the scroll progress required to center the section
            // Formula: (index / (total - 1)) * (totalHeight - viewportHeight) + navOffset
            top: `calc(${(index / (sections.length - 1))} * (100% - 100vh) + 100px)` 
          }}
        />
      ))}

      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {sections.map(({ Component, key }, index) => (
            <SectionWrapper 
              key={key} 
              index={index} 
              total={sections.length} 
              scrollYProgress={smoothProgress}
            >
              <Component />
            </SectionWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}

