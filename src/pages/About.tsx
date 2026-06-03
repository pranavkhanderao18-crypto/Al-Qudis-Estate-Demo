import { Award, Users, Globe, Building2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#fcfcfc] pb-24">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
            alt="Office Building" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary-900/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">About Al Qudis</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Redefining luxury real estate with uncompromising integrity, global reach, and unparalleled market expertise.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">A Legacy of Excellence in Luxury Real Estate</h2>
               <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                 Founded with a vision to transform the property buying experience, Al Qudis Estate has grown into a premier luxury brokerage. We specialize in curating an exclusive portfolio of properties that meet the highest standards of architectural excellence, location, and lifestyle amenities.
               </p>
               <p className="text-gray-600 leading-relaxed text-lg">
                 Our dedicated team of professionals brings decades of collective experience, ensuring that every client receives bespoke guidance, whether they are acquiring a private family estate, a high-yield investment property, or premium commercial spaces.
               </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80" alt="House" className="rounded-sm w-full h-64 object-cover mt-8" />
               <img src="https://images.unsplash.com/photo-1613490900233-141c5560d75d?auto=format&fit=crop&w=600&q=80" alt="Villa" className="rounded-sm w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="text-center">
               <Award className="w-10 h-10 text-gold-500 mx-auto mb-4" />
               <h4 className="text-3xl font-heading font-bold mb-2">15+</h4>
               <p className="text-primary-200">Awards Won</p>
             </div>
             <div className="text-center">
               <Building2 className="w-10 h-10 text-gold-500 mx-auto mb-4" />
               <h4 className="text-3xl font-heading font-bold mb-2">2B+</h4>
               <p className="text-primary-200">Property Sales</p>
             </div>
             <div className="text-center">
               <Users className="w-10 h-10 text-gold-500 mx-auto mb-4" />
               <h4 className="text-3xl font-heading font-bold mb-2">50+</h4>
               <p className="text-primary-200">Expert Agents</p>
             </div>
             <div className="text-center">
               <Globe className="w-10 h-10 text-gold-500 mx-auto mb-4" />
               <h4 className="text-3xl font-heading font-bold mb-2">10</h4>
               <p className="text-primary-200">Global Markets</p>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
