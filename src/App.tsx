import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import ProviderCard from './components/ProviderCard';
import SmartScheduling from './components/SmartScheduling';
import ARPreview from './components/ARPreview';
import LoyaltyProgram from './components/LoyaltyProgram';
import AIAssistant from './components/AIAssistant';
import AccessibilityPanel from './components/AccessibilityPanel';
import Map from './components/Map';
import Login from './pages/Login';
import ServiceBooking from './pages/ServiceBooking';
import ProviderDetails from './pages/ProviderDetails';
import ARPreviewPage from './pages/ARPreview';
import { categories, featuredProviders } from './data/services';
import { MessageSquare } from 'lucide-react';

function App() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/service/:serviceType" element={<ServiceBooking />} />
          <Route path="/provider/:providerId" element={<ProviderDetails />} />
          <Route path="/ar-preview" element={<ARPreviewPage />} />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AccessibilityPanel />
                
                <section className="py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                      {categories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                      ))}
                    </div>
                  </div>
                </section>

                <ARPreview />
                <SmartScheduling />
                <Map />

                <section className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Top Service Providers
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {featuredProviders.map((provider) => (
                        <ProviderCard key={provider.id} provider={provider} />
                      ))}
                    </div>
                  </div>
                </section>

                <LoyaltyProgram />
              </>
            }
          />
        </Routes>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ZETAONE</h3>
                <p className="text-gray-400">Your trusted partner for all home services</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Become a Provider</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>support@zetaone.com</li>
                  <li>1-800-ZETAONE</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} ZETAONE. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <button
          onClick={() => setIsAssistantOpen(!isAssistantOpen)}
          className="fixed bottom-4 right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 z-50 flex items-center transform transition-transform hover:scale-110"
        >
          <MessageSquare className="h-6 w-6" />
        </button>

        {isAssistantOpen && <AIAssistant onClose={() => setIsAssistantOpen(false)} />}
      </div>
    </Router>
  );
}

export default App;