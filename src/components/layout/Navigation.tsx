import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const navHeight = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        }
      }, 100);
      setIsOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      // Calculate offset for fixed navigation bar (approximately 80-100px)
      const navHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative position
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 md:py-6 ${
        isOpen
          ? 'bg-white/60 backdrop-blur-sm shadow-lg'
          : scrolled
          ? 'bg-white/40 backdrop-blur-sm shadow-lg lg:bg-white/80'
          : 'bg-transparent'
      }`}
            
      style={(scrolled || isOpen) ? { backdropFilter: 'blur(10px)' } : {}}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" onClick={() => scrollToSection('#home')}>
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium cursor-pointer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link to="/" onClick={() => scrollToSection(item.href)}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
            >
              <Link to="/contact" className="block w-full h-full">
                Let's Talk
              </Link>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-3">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2 cursor-pointer"
              >
                <Link to="/" onClick={() => scrollToSection(item.href)}>
                  {item.label}
                </Link>
              </div>
            ))}
            <button
              className="w-full bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors mt-2"
            >
              <Link to="/contact" className="block w-full h-full">
                Let's Talk
              </Link>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

