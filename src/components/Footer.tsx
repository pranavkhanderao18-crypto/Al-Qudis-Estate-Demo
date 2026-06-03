import { Building2, Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-gold-500" />
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                Al Qudis <span className="text-gold-500">Estate</span>
              </span>
            </Link>
            <p className="text-primary-200 leading-relaxed text-sm">
              Your trusted partner in finding premium luxury real estate and commercial properties across the global market.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/properties" className="text-primary-200 hover:text-gold-400 transition-colors">Buy Property</Link></li>
              <li><Link to="/properties" className="text-primary-200 hover:text-gold-400 transition-colors">Rent Property</Link></li>
              <li><Link to="/about" className="text-primary-200 hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-200 hover:text-gold-400 transition-colors">Contact Support</Link></li>
              <li><Link to="/admin" className="text-primary-200 hover:text-gold-400 transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Featured Locations */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Featured Locations</h4>
            <ul className="space-y-3">
              <li className="text-primary-200">Downtown Dubai</li>
              <li className="text-primary-200">Palm Jumeirah</li>
              <li className="text-primary-200">Dubai Marina</li>
              <li className="text-primary-200">Arabian Ranches</li>
              <li className="text-primary-200">Business Bay</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-primary-200 text-sm leading-relaxed">Office 104, Al Qudis Tower, Sheikh Zayed Road, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-primary-200">+971 50 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-primary-200">info@alqudisestate.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-primary-800 text-center text-primary-300 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Al Qudis Estate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
