import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { properties } from '../data/properties';
import { MapPin, Phone, Mail, Check, Share2, Heart, Bed, Bath, Square, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-800 mb-4">Property Not Found</h2>
          <Link to="/properties" className="text-gold-500 hover:underline">Return to listings</Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIdx((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] pb-24">
      
      {/* Title & Actions Row (Mobile mostly) */}
      <div className="w-full bg-white border-b border-gray-100 py-4 hidden md:block config">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
              <div className="flex gap-4">
                  <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">{property.status}</span>
                  <span className="bg-gold-50 text-gold-700 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">{property.type}</span>
              </div>
              <div className="flex gap-4">
                 <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600 font-medium transition-colors">
                     <Share2 className="w-4 h-4" /> Share
                 </button>
                 <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 font-medium transition-colors">
                     <Heart className="w-4 h-4" /> Save
                 </button>
              </div>
          </div>
      </div>

      {/* Image Gallery */}
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-black">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImageIdx}
            src={property.images[currentImageIdx]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {property.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-sm text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-sm text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {property.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIdx(idx)}
                  className={`h-1.5 transition-all rounded-sm ${idx === currentImageIdx ? 'bg-white w-6' : 'bg-white/50 w-3'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white p-6 md:p-10 rounded-sm shadow-lg border border-gray-100 mb-8">
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-900 mb-4 tracking-tight">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-500 mb-8 border-b border-gray-100 pb-8">
                <MapPin className="w-5 h-5 text-gold-500" />
                <span className="text-lg font-medium">{property.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-8 md:gap-16 py-6 mb-8">
                {property.bedrooms && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Bedrooms</span>
                    <span className="font-serif font-bold text-3xl text-primary-900">{property.bedrooms}</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Bathrooms</span>
                    <span className="font-serif font-bold text-3xl text-primary-900">{property.bathrooms}</span>
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Square Feet</span>
                  <span className="font-serif font-bold text-3xl text-primary-900">{property.area}</span>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-4">Property Description</h3>
                <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                  {property.description}
                </p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-sm shadow-lg border border-gray-100">
              <h3 className="text-xl font-heading font-bold text-primary-900 mb-6">Amenities & Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-sm bg-gold-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-gold-600 font-bold" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Sticky Contact Form */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-sm shadow-lg border border-gray-100 border-t-4 border-t-gold-500 sticky top-28">
              <div className="mb-8 hidden md:block">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block mb-1">Asking Price</span>
                <p className="text-4xl font-heading font-bold text-gold-500">
                  AED {property.price.toLocaleString()}
                </p>
              </div>

              {/* Agent details */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-sm mb-6">
                <img src={property.agent.image} alt={property.agent.name} className="w-14 h-14 rounded-sm object-cover" />
                <div>
                  <p className="font-sans font-bold text-gray-900 text-sm">{property.agent.name}</p>
                  <p className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mb-1">Premium Agent</p>
                  <a href={`tel:${property.agent.phone}`} className="text-xs font-semibold text-primary-600 hover:text-gold-500 transition-colors inline-block">{property.agent.phone}</a>
                </div>
              </div>

              <h4 className="font-heading font-bold text-xl text-primary-900 mb-4">Request Information</h4>
              <form className="space-y-4 mb-6">
                <div>
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-gray-50 border-none rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500 font-medium text-sm" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-50 border-none rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500 font-medium text-sm" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-gray-50 border-none rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500 font-medium text-sm" />
                </div>
                <div>
                  <textarea placeholder="I am interested in this property..." rows={3} className="w-full px-4 py-3 bg-gray-50 border-none rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500 font-medium text-sm resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 rounded-sm transition-colors text-xs tracking-widest uppercase flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" /> SEND INQUIRY
                </button>
              </form>

              <div className="relative flex items-center py-2 mb-6">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-[10px] font-bold uppercase tracking-wider">Or</span>
                <div className="flex-grow border-t border-gray-100"></div>
              </div>

              <a 
                href={`https://wa.me/${property.agent.phone.replace(/[^0-9]/g, '')}?text=Hi, I am interested in ${property.title} located in ${property.location}.`}
                target="_blank" 
                rel="noreferrer" 
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-sm transition-colors text-xs tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> CHAT ON WHATSAPP
              </a>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
