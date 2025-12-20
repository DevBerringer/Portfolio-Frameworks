import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../data/portfolio';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const iconMap: Record<string, React.ReactElement> = {
  github: <FiGithub size={20} />,
  linkedin: <FiLinkedin size={20} />,
  twitter: <FiTwitter size={20} />,
  email: <FiMail size={20} />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToSection = useScrollToSection();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Portfolio</h3>
            <p className="text-gray-600">
              Building exceptional digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={() => scrollToSection('#home')} className="text-gray-600 hover:text-primary-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => scrollToSection('#about')} className="text-gray-600 hover:text-primary-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => scrollToSection('#projects')} className="text-gray-600 hover:text-primary-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  aria-label={link.name}
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

