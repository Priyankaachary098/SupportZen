import React from 'react';
import { Calendar, Clock, Zap } from 'lucide-react';

export default function SmartScheduling() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Smart Scheduling</h2>
          <p className="mt-4 text-gray-600">AI-powered scheduling that learns from your preferences</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-indigo-50 rounded-xl">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-lg font-semibold">Predictive Booking</h3>
            </div>
            <p className="text-gray-600">Suggests optimal service times based on your history</p>
          </div>
          
          <div className="p-6 bg-indigo-50 rounded-xl">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-lg font-semibold">Real-time Availability</h3>
            </div>
            <p className="text-gray-600">Live provider schedules with instant booking</p>
          </div>
          
          <div className="p-6 bg-indigo-50 rounded-xl">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-lg font-semibold">Emergency Priority</h3>
            </div>
            <p className="text-gray-600">Urgent service requests get immediate attention</p>
          </div>
        </div>
      </div>
    </div>
  );
}