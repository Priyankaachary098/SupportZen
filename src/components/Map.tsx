import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

interface ServiceCenter {
  id: string;
  name: string;
  location: string;
  distance: string;
  services: string[];
}

const serviceCenters: ServiceCenter[] = [
  {
    id: '1',
    name: 'ZETAONE Central',
    location: '123 Main St, Downtown',
    distance: '0.5 miles',
    services: ['AC Repair', 'Plumbing', 'Electrical']
  },
  {
    id: '2',
    name: 'ZETAONE Express',
    location: '456 Oak Ave, Westside',
    distance: '1.2 miles',
    services: ['Cleaning', 'Carpentry']
  },
  {
    id: '3',
    name: 'ZETAONE Plus',
    location: '789 Pine Rd, Eastside',
    distance: '2.0 miles',
    services: ['AC Repair', 'Electrical']
  }
];

export default function Map() {
  const [selectedCenter, setSelectedCenter] = useState<ServiceCenter | null>(null);

  useEffect(() => {
    // Initialize map here (using Google Maps or similar)
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Nearby Service Centers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-100 rounded-lg h-96">
            {/* Map container */}
            <div id="map" className="w-full h-full rounded-lg"></div>
          </div>
          <div className="space-y-4">
            {serviceCenters.map((center) => (
              <div
                key={center.id}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedCenter?.id === center.id
                    ? 'bg-indigo-50 border-2 border-indigo-500'
                    : 'bg-white border border-gray-200 hover:border-indigo-300'
                }`}
                onClick={() => setSelectedCenter(center)}
              >
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-indigo-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{center.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{center.location}</p>
                    <p className="text-sm text-indigo-600 mt-1">{center.distance}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {center.services.map((service) => (
                        <span
                          key={service}
                          className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}