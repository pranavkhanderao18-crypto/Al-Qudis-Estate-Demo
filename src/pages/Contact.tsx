import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#fcfcfc] pb-24">
      
      {/* Header */}
      <div className="bg-primary-900 pt-32 pb-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">Get In Touch</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg">Our real estate experts are here to help you navigate the market and find your perfect property.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-sm shadow-md border border-gray-100 flex items-start gap-4">
               <div className="w-12 h-12 bg-primary-50 flex items-center justify-center shrink-0 rounded-sm">
                 <MapPin className="w-6 h-6 text-primary-600" />
               </div>
               <div>
                 <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Head Office</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">Office 104, Al Qudis Tower<br/>Sheikh Zayed Road<br/>Dubai, UAE</p>
               </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-md border border-gray-100 flex items-start gap-4">
               <div className="w-12 h-12 bg-primary-50 flex items-center justify-center shrink-0 rounded-sm">
                 <Phone className="w-6 h-6 text-primary-600" />
               </div>
               <div>
                 <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Direct Contact</h3>
                 <p className="text-gray-600 text-sm mb-1">Sales: +971 50 123 4567</p>
                 <p className="text-gray-600 text-sm">Support: +971 4 321 0000</p>
               </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-md border border-gray-100 flex items-start gap-4">
               <div className="w-12 h-12 bg-primary-50 flex items-center justify-center shrink-0 rounded-sm">
                 <Mail className="w-6 h-6 text-primary-600" />
               </div>
               <div>
                 <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">Email Us</h3>
                 <p className="text-gray-600 text-sm mb-1">info@alqudisestate.com</p>
                 <p className="text-gray-600 text-sm">sales@alqudisestate.com</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-sm shadow-lg border border-gray-100 border-t-4 border-t-gold-500">
             <h2 className="text-3xl font-heading font-bold text-primary-900 mb-8">Send a Message</h2>
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-400">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border-none rounded-none focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors text-sm font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-400">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border-none rounded-none focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors text-sm font-medium" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-400">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-gray-50 border-none rounded-none focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors text-sm font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-400">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 bg-gray-50 border-none rounded-none focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors text-sm font-medium" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400">Inquiry Type</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border-none rounded-none focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors text-gray-700 text-sm font-medium">
                    <option>Looking to Buy</option>
                    <option>Looking to Rent</option>
                    <option>List my Property</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gray-400">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-gray-50 border-none rounded-none focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors resize-none text-sm font-medium"></textarea>
                </div>

                <button type="button" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-sm font-bold tracking-widest text-xs uppercase transition-all shadow-md">
                  Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
