import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Phone, Mail, Calendar } from 'lucide-react';

export default function ProviderDetails() {
  const { providerId } = useParams();

  // This would typically fetch provider data from an API
  const provider = {
    id: providerId,
    name: 'John Smith',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    rating: 4.8,
    reviews: 127,
    specialties: ['AC Repair', 'Plumbing'],
    experience: '8 years',
    phone: '+1 (555) 123-4567',
    email: 'john.smith@example.com',
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={provider.image}
              alt={provider.name}
            />
          </div>
          <div className="p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{provider.name}</h2>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">{provider.rating}</span>
              </div>
            </div>
            
            <p className="mt-2 text-gray-600">{provider.experience} of experience</p>
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Specialties</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {provider.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span>{provider.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span>{provider.email}</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="flex items-center justify-center w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}