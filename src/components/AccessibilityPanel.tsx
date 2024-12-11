import React, { useState } from 'react';
import { Eye, Type, Volume2, Globe } from 'lucide-react';

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState(100);

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-600 text-white p-3 rounded-full shadow-lg"
      >
        <Eye className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="absolute left-16 bg-white rounded-lg shadow-lg p-6 w-72">
          <h3 className="font-semibold mb-4">Accessibility Options</h3>
          
          <div className="space-y-4">
            <div>
              <label className="flex items-center text-sm mb-2">
                <Type className="h-4 w-4 mr-2" />
                Font Size
              </label>
              <input
                type="range"
                min="80"
                max="150"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="flex items-center text-sm mb-2">
                <Eye className="h-4 w-4 mr-2" />
                Contrast
              </label>
              <input
                type="range"
                min="80"
                max="120"
                value={contrast}
                onChange={(e) => setContrast(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="flex items-center justify-between">
              <button className="flex items-center text-sm">
                <Volume2 className="h-4 w-4 mr-2" />
                Screen Reader
              </button>
              <button className="flex items-center text-sm">
                <Globe className="h-4 w-4 mr-2" />
                Languages
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}