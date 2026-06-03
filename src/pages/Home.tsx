import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, MapPin, Home as HomeIcon, Wallet, ArrowRight, Shield, Award, Users, BadgeCheck } from 'lucide-react';
import { getFeaturedProperties } from '../data/properties';

export default function Home() {
  const featuredProperties = getFeaturedProperties();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Mansion" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary-900/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.1] max-w-4xl"
          >
            Find Your <span className="italic font-light text-white">Signature</span> Sanctuary
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            Discover exclusive luxury villas, apartments, and premium plots with our expert real estate associates.
          </motion.p>

          {/* Search Box / CTA Mobile */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="w-full max-w-4xl bg-white p-6 shadow-2xl flex flex-col md:flex-row gap-6 mb-8 rounded-sm border-t-4 border-gold-500"
          >
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider text-left">Location</label>
              <div className="flex items-center bg-gray-50 border-none ring-0 w-full p-2">
                <input type="text" placeholder="Dubai Marina, UAE" className="bg-transparent border-none outline-none w-full text-sm font-bold text-gray-800" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider text-left">Property Type</label>
              <div className="flex items-center bg-gray-50 border-none ring-0 w-full p-2">
                <select className="bg-transparent border-none outline-none w-full text-sm font-bold text-gray-800 cursor-pointer p-0">
                  <option value="">Luxury Villa</option>
                  <option value="apartment">Apartment</option>
                  <option value="plot">Plot</option>
                </select>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider text-left">Budget Range</label>
              <div className="flex items-center bg-gray-50 border-none ring-0 w-full p-2">
                <select className="bg-transparent border-none outline-none w-full text-sm font-bold text-gray-800 cursor-pointer p-0">
                  <option value="">$5,000,000 - $10,000,000</option>
                  <option value="1">Under $5M</option>
                  <option value="3">$10M+</option>
                </select>
              </div>
            </div>
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-sm transition-colors flex items-center justify-center gap-2 mt-auto h-[40px] px-6">
              <span>SEARCH NOW</span>
            </button>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="flex gap-4"
          >
             <Link to="/properties" className="bg-gold-500 text-primary-600 px-8 py-4 rounded-sm font-bold transition-all shadow-xl">
               VIEW PROPERTIES
             </Link>
             <a href="/contact" className="border border-white/30 text-white px-8 py-4 rounded-sm font-bold transition-all backdrop-blur-md hover:bg-white/10">
               CONTACT AGENT
             </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">1000+</h3>
              <p className="text-gray-500 font-medium">Premium Properties</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">500+</h3>
              <p className="text-gray-500 font-medium">Happy Clients</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">10+</h3>
              <p className="text-gray-500 font-medium">Years Experience</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-2">24/7</h3>
              <p className="text-gray-500 font-medium">VIP Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Exclusive listings</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-600">Featured Properties</h2>
            </div>
            <Link to="/properties" className="hidden md:flex items-center gap-2 text-primary-600 font-medium hover:text-gold-500 transition-colors">
              View all listings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Link key={property.id} to={`/property/${property.id}`} className="group bg-white rounded-sm overflow-hidden shadow-lg border border-gray-100 flex flex-col p-2">
                <div className="relative h-64 overflow-hidden bg-gray-200 mb-3 rounded-sm">
                  <div className="absolute top-2 left-2 z-10 flex gap-1">
                    <span className="bg-gold-500 text-primary-600 text-[8px] font-bold px-2 py-0.5 uppercase tracking-wider">
                      {property.status}
                    </span>
                  </div>
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                
                <div className="px-2 pb-2 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1 gap-2">
                    <h5 className="font-bold text-sm text-gray-800 line-clamp-1">{property.title}</h5>
                    <span className="text-gold-500 font-bold text-sm whitespace-nowrap">AED {property.price.toLocaleString()}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mb-3">{property.location}</p>
                  
                  <div className="flex justify-between pt-2 border-t border-gray-50 text-[10px] font-semibold text-gray-500 mt-auto">
                    {property.bedrooms ? <span>{property.bedrooms} Beds</span> : <span>Plot</span>}
                    {property.bathrooms && <span>{property.bathrooms} Baths</span>}
                    <span>{property.area} sqft</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
             <Link to="/properties" className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-6 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-primary-100 transition-colors">
              View all listings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Advantage</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose Al Qudis</h2>
            <p className="text-primary-200">We provide an unparalleled real estate experience, combining local market expertise with a global network to deliver exceptional results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BadgeCheck, title: "Verified Listings", desc: "Every property goes through a rigorous legal and structural verification process." },
              { icon: Users, title: "Expert Agents", desc: "Our multilingual agents possess deep knowledge of the UAE real estate market." },
              { icon: Shield, title: "Secure Deals", desc: "Complete transparency and secure escrow management for a stress-free transaction." },
              { icon: Award, title: "Premium Support", desc: "A dedicated concierge team assisting you from viewing to finalizing the handover." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-primary-800/50 p-8 rounded-sm border border-primary-700 hover:bg-primary-800 transition-colors text-center md:text-left">
                <div className="w-12 h-12 bg-primary-700 rounded-sm flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <feature.icon className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="text-lg font-serif font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-500 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-900 mb-6 tracking-tight">Ready to Find Your New Premium Home?</h2>
          <p className="text-primary-900/80 mb-10 text-lg">Connect with our luxury property specialists today and let us guide you home.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-sm font-bold transition-all shadow-xl text-sm uppercase tracking-widest flex justify-center items-center gap-2">
               Connect on WhatsApp
             </a>
             <Link to="/contact" className="bg-white/20 hover:bg-white/30 text-primary-900 border border-primary-900/40 px-8 py-4 rounded-sm font-bold transition-all text-sm uppercase tracking-widest flex justify-center items-center">
               Schedule a Meeting
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
