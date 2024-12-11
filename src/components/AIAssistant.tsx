import React from 'react';
import { MessageSquare, X } from 'lucide-react';

interface AIAssistantProps {
  onClose: () => void;
}

export default function AIAssistant({ onClose }: AIAssistantProps) {
  return (
    <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl z-50">
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center">
          <MessageSquare className="h-5 w-5 text-indigo-600 mr-2" />
          <h3 className="font-semibold">ZETA Assistant</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4 h-96 overflow-y-auto">
        <div className="space-y-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-sm">Hello! How can I help you today?</p>
          </div>
          {/* Add more chat messages here */}
        </div>
      </div>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}