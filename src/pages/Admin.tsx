import { useState } from 'react';
import { LayoutDashboard, Home, Users, Settings, LogOut, Plus, Edit, Trash2 } from 'lucide-react';
import { properties } from '../data/properties';
import { Link } from 'react-router-dom';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('properties');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-primary-900 text-white flex flex-col min-h-screen sticky top-0 md:h-screen">
        <div className="p-6 border-b border-primary-800">
          <Link to="/" className="font-heading font-bold text-2xl tracking-tight block text-center md:text-left">
            Al Qudis <span className="text-gold-500">Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === 'dashboard' ? 'bg-primary-800 text-gold-500 border-l-2 border-gold-500' : 'text-primary-200 hover:bg-primary-800 hover:text-white border-l-2 border-transparent'}`}
          >
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('properties')}
            className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === 'properties' ? 'bg-primary-800 text-gold-500 border-l-2 border-gold-500' : 'text-primary-200 hover:bg-primary-800 hover:text-white border-l-2 border-transparent'}`}
          >
            <Home className="w-5 h-5" /> Properties
          </button>
          <button 
            onClick={() => setActiveTab('leads')}
            className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === 'leads' ? 'bg-primary-800 text-gold-500 border-l-2 border-gold-500' : 'text-primary-200 hover:bg-primary-800 hover:text-white border-l-2 border-transparent'}`}
          >
            <Users className="w-5 h-5" /> Leads
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${activeTab === 'settings' ? 'bg-primary-800 text-gold-500 border-l-2 border-gold-500' : 'text-primary-200 hover:bg-primary-800 hover:text-white border-l-2 border-transparent'}`}
          >
            <Settings className="w-5 h-5" /> Settings
          </button>
        </nav>
        
        <div className="p-4 border-t border-primary-800">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-sm transition-colors text-primary-200 hover:bg-primary-800 hover:text-white">
            <LogOut className="w-5 h-5" /> Exit to Site
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-heading font-bold text-gray-900 capitalize">{activeTab}</h1>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-primary-200 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Admin" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>

        {activeTab === 'properties' && (
          <div>
             <div className="flex justify-between items-center mb-6">
                <div className="relative w-64">
                   <input type="text" placeholder="Search properties..." className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-500" />
                </div>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Property
                </button>
             </div>

             <div className="bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden">
               <table className="w-full text-left">
                 <thead className="bg-gray-50 border-b border-gray-100">
                   <tr>
                     <th className="px-6 py-4 font-bold text-gray-700 text-[10px] uppercase tracking-wider">Property</th>
                     <th className="px-6 py-4 font-bold text-gray-700 text-[10px] uppercase tracking-wider">Type</th>
                     <th className="px-6 py-4 font-bold text-gray-700 text-[10px] uppercase tracking-wider">Status</th>
                     <th className="px-6 py-4 font-bold text-gray-700 text-[10px] uppercase tracking-wider">Price</th>
                     <th className="px-6 py-4 font-bold text-gray-700 text-[10px] uppercase tracking-wider text-right">Actions</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                    {properties.map((property) => (
                      <tr key={property.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={property.image} alt={property.title} className="w-12 h-12 rounded-sm object-cover" />
                            <div>
                               <p className="font-heading font-semibold text-gray-900">{property.title}</p>
                               <p className="text-xs text-gray-500">{property.location}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 font-medium">{property.type}</td>
                        <td className="px-6 py-4">
                           <span className={`px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest ${property.status === 'For Sale' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'}`}>
                             {property.status}
                           </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">AED {property.price.toLocaleString()}</td>
                        <td className="px-6 py-4">
                           <div className="flex items-center justify-end gap-2">
                              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><Edit className="w-4 h-4" /></button>
                              <button className="p-2 text-gray-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                           </div>
                        </td>
                      </tr>
                    ))}
                 </tbody>
               </table>
             </div>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-white p-6 rounded-sm shadow-md border border-gray-100 border-t-2 border-t-gold-500">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Total Properties</p>
                <h3 className="text-4xl font-serif font-bold text-primary-900">124</h3>
             </div>
             <div className="bg-white p-6 rounded-sm shadow-md border border-gray-100 border-t-2 border-t-gold-500">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Active Leads</p>
                <h3 className="text-4xl font-serif font-bold text-primary-900">45</h3>
             </div>
             <div className="bg-white p-6 rounded-sm shadow-md border border-gray-100 border-t-2 border-t-gold-500">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Total Views (30 days)</p>
                <h3 className="text-4xl font-serif font-bold text-primary-900">12.5K</h3>
             </div>
          </div>
        )}

        {(activeTab === 'leads' || activeTab === 'settings') && (
           <div className="bg-white p-12 rounded-sm shadow-md border border-gray-100 text-center">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Module</h3>
              <p className="text-gray-500">This module is available in the full version.</p>
           </div>
        )}

      </div>
    </div>
  );
}
