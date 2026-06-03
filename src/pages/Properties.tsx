import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Filter, SlidersHorizontal, Grid3X3, List } from 'lucide-react';
import { properties } from '../data/properties';

export default function Properties() {
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProperties = properties.filter(p => {
    if (filterType !== 'All' && p.type !== filterType) return false;
    if (filterStatus !== 'All' && p.status !== filterStatus) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#fcfcfc] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-4">Discover Properties</h1>
          <p className="text-gray-500">Browse through our exclusive collection of premium real estate.</p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search location..." 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-none focus:outline-none focus:ring-1 focus:ring-gold-500 font-bold text-sm text-gray-800"
              />
            </div>
            
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 bg-gray-50 border-none rounded-none focus:outline-none focus:ring-1 focus:ring-gold-500 font-bold text-sm text-gray-800"
            >
              <option value="All">Buy & Rent</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>

            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 bg-gray-50 border-none rounded-none focus:outline-none focus:ring-1 focus:ring-gold-500 font-bold text-sm text-gray-800"
            >
              <option value="All">All Types</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Plot">Plot</option>
              <option value="Farm House">Farm House</option>
            </select>

            <button className="md:hidden flex items-center gap-2 px-4 py-3 bg-primary-50 text-primary-700 rounded-sm font-bold text-sm">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 bg-gray-50 p-1 rounded-sm border border-gray-100">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-sm transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-sm transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          <AnimatePresence>
            {filteredProperties.map((property) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={property.id}
              >
                <Link 
                  to={`/property/${property.id}`} 
                  className={`group bg-white rounded-sm overflow-hidden shadow-lg border border-gray-100 p-2 flex ${viewMode === 'grid' ? 'flex-col' : 'flex-col md:flex-row h-full'}`}
                >
                  <div className={`relative overflow-hidden bg-gray-200 mb-2 rounded-sm ${viewMode === 'grid' ? 'h-56' : 'h-56 md:h-auto md:w-2/5'}`}>
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
                  
                  <div className={`px-2 pb-2 flex flex-col ${viewMode === 'grid' ? 'flex-grow' : 'flex-grow justify-between md:pl-6'}`}>
                    <div>
                      <div className="flex justify-between items-start mb-1 gap-2">
                        <h5 className="font-bold text-sm text-gray-800 line-clamp-1">{property.title}</h5>
                        <span className="text-gold-500 font-bold text-sm whitespace-nowrap">AED {property.price.toLocaleString()}</span>
                      </div>
                      <p className="text-[10px] text-gray-400 mb-3">{property.location}</p>
                      
                      {viewMode === 'list' && (
                        <p className="text-gray-600 text-xs mb-6 line-clamp-2 leading-relaxed">
                          {property.description}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex justify-between pt-2 border-t border-gray-50 text-[10px] font-semibold text-gray-500 mt-auto">
                      {property.bedrooms ? <span>{property.bedrooms} Beds</span> : <span>Plot</span>}
                      {property.bathrooms && <span>{property.bathrooms} Baths</span>}
                      <span>{property.area} sqft</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}

      </div>
    </div>
  );
}
