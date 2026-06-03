export type PropertyType = 'Villa' | 'Plot' | 'Farm House' | 'Apartment';

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  price: number;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number; // in sq ft
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  agent: {
    name: string;
    phone: string;
    image: string;
  };
  featured: boolean;
  status: 'For Sale' | 'For Rent';
}

export const properties: Property[] = [
  {
    id: 'prop-1',
    title: 'Luxury Palm Villa with Ocean View',
    type: 'Villa',
    price: 4500000,
    location: 'Palm Jumeirah, Dubai',
    bedrooms: 5,
    bathrooms: 6,
    area: 7500,
    image: 'https://images.unsplash.com/photo-1613490900233-141c5560d75d?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1613490900233-141c5560d75d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687931-ce8105fb9011?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Immerse yourself in unparalleled luxury with this magnificent 5-bedroom villa. Featuring modern architectural design, a private infinity pool overlooking the ocean, and state-of-the-art smart home technologies.',
    amenities: ['Swimming Pool', 'Smart Home', 'Private Beach Access', 'Gym', 'Maid Room', 'Security'],
    agent: {
      name: 'Sarah Rahman',
      phone: '+971 50 123 4567',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    featured: true,
    status: 'For Sale'
  },
  {
    id: 'prop-2',
    title: 'Skyline Penthouse Apartment',
    type: 'Apartment',
    price: 2800000,
    location: 'Downtown Dubai',
    bedrooms: 3,
    bathrooms: 4,
    area: 3200,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A breathtaking penthouse offering panoramic views of the city skyline including the Burj Khalifa. Exquisitely furnished with Italian marble and custom fittings.',
    amenities: ['Gym', 'Infinity Pool', 'Concierge', 'Valet Parking', 'Spa Access'],
    agent: {
      name: 'Michal Kowalski',
      phone: '+971 55 987 6543',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'
    },
    featured: true,
    status: 'For Sale'
  },
  {
    id: 'prop-3',
    title: 'Tranquil Oasis Farm House',
    type: 'Farm House',
    price: 1500000,
    location: 'Al Khawaneej, Dubai',
    bedrooms: 4,
    bathrooms: 4,
    area: 12000,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Escape the city to this beautiful farm house. Complete with organic gardens, a large outdoor entertainment area, and traditional yet modern interiors.',
    amenities: ['Garden', 'Outdoor Kitchen', 'Stables', 'Private Pool', 'Guest House'],
    agent: {
      name: 'Ahmed Al Maktoum',
      phone: '+971 52 345 6789',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    featured: false,
    status: 'For Sale'
  },
  {
    id: 'prop-4',
    title: 'Premium Residential Plot',
    type: 'Plot',
    price: 850000,
    location: 'Dubai Hills Estate',
    area: 15000,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A spectacular golf-course facing plot. Build your custom dream mansion in one of Dubai\'s most prestigious and sought-after residential communities.',
    amenities: ['Golf Course View', 'Gated Community', 'Park Access', 'Retail Centers Near'],
    agent: {
      name: 'Sarah Rahman',
      phone: '+971 50 123 4567',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    featured: true,
    status: 'For Sale'
  },
  {
    id: 'prop-5',
    title: 'Modern Family Villa',
    type: 'Villa',
    price: 2100000,
    location: 'Arabian Ranches',
    bedrooms: 4,
    bathrooms: 5,
    area: 4500,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Perfect family home situated in a quiet cul-de-sac. Features a large landscaped garden, open-plan living areas, and a community clubhouse.',
    amenities: ['Garden', 'Community Pool', 'Kids Play Area', 'Tennis Court', 'Security'],
    agent: {
      name: 'Michal Kowalski',
      phone: '+971 55 987 6543',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'
    },
    featured: false,
    status: 'For Rent'
  },
  {
    id: 'prop-6',
    title: 'Marina Waterfront Apartment',
    type: 'Apartment',
    price: 1250000,
    location: 'Dubai Marina',
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    image: 'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Wake up to the stunning views of the marina. This sleek 2-bedroom apartment is right on the promenade, footsteps away from fine dining and retail.',
    amenities: ['Marina View', 'Gym', 'Swimming Pool', 'Covered Parking', 'Balcony'],
    agent: {
      name: 'Ahmed Al Maktoum',
      phone: '+971 52 345 6789',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    featured: false,
    status: 'For Sale'
  }
];

export const getFeaturedProperties = () => properties.filter(p => p.featured);
