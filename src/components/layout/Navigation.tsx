import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { useTheme } from '../../hooks/useTheme';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollToSection = useScrollToSection();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 md:py-6 ${
        isOpen
          ? 'bg-white/60 backdrop-blur-sm shadow-lg dark:bg-slate-900/80 dark:shadow-black/40'
          : scrolled
          ? 'bg-white/40 backdrop-blur-sm shadow-lg lg:bg-white/80 dark:bg-slate-900/70 dark:shadow-black/40'
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
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium cursor-pointer dark:text-slate-200 dark:hover:text-primary-400"
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
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-full border border-gray-200/70 bg-white/80 p-2 text-gray-700 shadow-sm transition-colors hover:text-primary-600 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:text-primary-300"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors dark:text-slate-200 dark:hover:text-primary-400"
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
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2 cursor-pointer dark:text-slate-200 dark:hover:text-primary-400"
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
            <button
              type="button"
              onClick={toggleTheme}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-gray-200/70 bg-white/80 px-6 py-2 text-gray-700 shadow-sm transition-colors hover:text-primary-600 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:text-primary-300"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              <span className="text-sm font-medium">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
