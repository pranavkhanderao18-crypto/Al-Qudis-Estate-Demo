import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Building2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 flex items-center justify-center rounded-sm">
              <span className="text-gold-500 font-heading text-2xl font-bold">A</span>
            </div>
            <span className="font-heading font-bold text-2xl text-primary-600 tracking-tight uppercase">
              Al Qudis <span className="text-gold-500">Estate</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors text-sm font-semibold uppercase tracking-widest ${
                  isActive(link.path)
                    ? 'text-primary-600 border-b-2 border-gold-500'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all border border-primary-600 hover:bg-transparent hover:text-primary-600 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Agent
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-sm font-medium ${
                  isActive(link.path)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="mt-4 bg-primary-600 text-white px-4 py-3 rounded-sm font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Agent
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
