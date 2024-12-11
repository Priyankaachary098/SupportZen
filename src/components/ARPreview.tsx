import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Eye } from 'lucide-react';

export default function ARPreview() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">AR Service Preview</h2>
            <p className="text-lg mb-6">
              See how repairs and installations will look before booking with our AR technology
            </p>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/ar-preview')}
                className="flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold"
              >
                <Smartphone className="h-5 w-5 mr-2" />
                Try AR Preview
              </button>
              <button className="flex items-center border border-white px-6 py-3 rounded-lg font-semibold">
                <Eye className="h-5 w-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 bg-indigo-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg">AR Preview Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}