import React from 'react';
import { MapPin, Clock, CheckCircle } from 'lucide-react';

interface ServiceStatus {
  status: 'scheduled' | 'in-progress' | 'completed';
  provider: string;
  eta?: string;
  location: string;
}

export default function ServiceTracker({ status, provider, eta, location }: ServiceStatus) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-4">Live Service Tracking</h3>
      
      <div className="space-y-6">
        <div className="flex items-center">
          <div className="relative">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
              status === 'completed' ? 'bg-green-100' : 'bg-indigo-100'
            }`}>
              <CheckCircle className={`h-5 w-5 ${
                status === 'completed' ? 'text-green-600' : 'text-indigo-600'
              }`} />
            </div>
          </div>
          <div className="ml-4">
            <p className="font-medium">{provider}</p>
            <p className="text-sm text-gray-500">Service Provider</p>
          </div>
        </div>

        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-gray-400" />
          <span className="ml-2 text-sm">{location}</span>
        </div>

        {eta && (
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-400" />
            <span className="ml-2 text-sm">ETA: {eta}</span>
          </div>
        )}

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
            style={{ 
              width: status === 'completed' ? '100%' : 
                     status === 'in-progress' ? '66%' : '33%' 
            }}
          />
        </div>
      </div>
    </div>
  );
}