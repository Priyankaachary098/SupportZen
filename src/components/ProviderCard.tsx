import React, { useState } from 'react';
import { Star, Phone, Mail, Calendar } from 'lucide-react';
import { Provider } from '../types';

interface ProviderCardProps {
  provider: Provider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  const [showContact, setShowContact] = useState(false);

  const providerDetails = {
    'john-smith': {
      phone: '+1 (555) 123-4567',
      email: 'john.smith@zetaone.com',
      specialties: ['AC Repair', 'Plumbing']
    },
    'sarah-johnson': {
      phone: '+1 (555) 234-5678',
      email: 'sarah.johnson@zetaone.com',
      specialties: ['Electrical', 'Carpentry']
    },
    'mike-wilson': {
      phone: '+1 (555) 345-6789',
      email: 'mike.wilson@zetaone.com',
      specialties: ['AC Repair', 'Cleaning']
    }
  };

  const details = providerDetails[provider.id as keyof typeof providerDetails];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
      <img
        src={provider.image}
        alt={provider.name}
        className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{provider.name}</h3>
        <div className="flex items-center mb-2">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium">{provider.rating}</span>
          <span className="ml-1 text-sm text-gray-500">
            ({provider.reviews} reviews)
          </span>
        </div>

        {showContact ? (
          <div className="space-y-3 mt-4">
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 text-indigo-600 mr-2" />
              <span>{details.phone}</span>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 text-indigo-600 mr-2" />
              <span>{details.email}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {details.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
            <button
              onClick={() => setShowContact(false)}
              className="w-full mt-3 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Hide Details
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowContact(true)}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Now
          </button>
        )}
      </div>
    </div>
  );
}