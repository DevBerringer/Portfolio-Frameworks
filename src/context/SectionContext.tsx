import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type SectionId = 'home' | 'work' | 'about' | 'projects';

interface SectionContextType {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  sections: SectionId[];
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const sections: SectionId[] = ['home', 'work', 'about', 'projects'];

export const SectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const location = useLocation();

  // Reset to home when leaving the home page? 
  // Or keep state? 
  // If we navigate to /project/1 and back, we might want to be at the same place?
  // For now, let's just keep the state.

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection, sections }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};
