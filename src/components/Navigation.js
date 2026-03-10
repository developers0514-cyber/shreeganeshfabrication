import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/gallery', label: 'GALLERY' },
    { path: '/equipment', label: 'EQUIPMENT' },
    { path: '/quote', label: 'REQUEST QUOTE' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center p-1">
              <img src="/logo.png" alt="Shree Ganesh Fabrication" className="w-full h-full object-contain" />
            </div>
            <div className="hidden md:block">
              <div className="text-slate-900 font-bold text-xl uppercase tracking-tighter" style={{ fontFamily: 'Barlow Condensed' }}>Shree Ganesh</div>
              <div className="text-orange-400 text-xs uppercase tracking-widest">Fabrication</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#FB923C] border-b-2 border-[#FB923C]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                style={{ fontFamily: 'Barlow Condensed' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <a
            href="tel:+919226281112"
            className="hidden lg:flex items-center space-x-2 bg-[#FB923C] hover:bg-[#EA580C] text-slate-900 px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 border border-[#FB923C] hover:border-glow"
            data-testid="header-call-button"
          >
            <Phone className="w-5 h-5" />
            <span>CALL NOW</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-900 p-2"
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200" data-testid="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#FB923C] bg-[#FB923C]/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'Barlow Condensed' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919226281112"
              className="flex items-center justify-center space-x-2 mx-4 mt-4 bg-[#FB923C] hover:bg-[#EA580C] text-slate-900 px-6 py-3 font-bold uppercase tracking-wider transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>CALL NOW</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
