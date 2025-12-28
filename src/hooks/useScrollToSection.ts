import { useLocation, useNavigate } from 'react-router-dom';
import { useSection } from '../context/SectionContext';

export const useScrollToSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setActiveSection } = useSection();

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '') as any;
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then set section
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 100);
      return;
    }

    setActiveSection(sectionId);
  };

  return scrollToSection;
};