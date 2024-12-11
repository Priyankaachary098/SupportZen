import React, { useState } from 'react';
import { Gift, Star, Trophy, Sparkles, ChevronRight } from 'lucide-react';

interface Reward {
  points: number;
  title: string;
  description: string;
  benefits: string[];
}

const rewards: Reward[] = [
  {
    points: 500,
    title: 'Silver Member',
    description: '5% off on all services',
    benefits: ['Priority Support', 'Early Access to Deals', 'Birthday Bonus']
  },
  {
    points: 1000,
    title: 'Gold Member',
    description: '10% off + Priority booking',
    benefits: ['24/7 Support', 'Free Annual Service', 'Exclusive Events']
  },
  {
    points: 2000,
    title: 'Platinum Member',
    description: '15% off + VIP support',
    benefits: ['Personal Account Manager', 'Free Emergency Service', 'VIP Events']
  }
];

export default function LoyaltyProgram() {
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const userPoints = 750;

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">ZETAONE Rewards</h2>
          <div className="flex items-center justify-center mt-4">
            <Gift className="h-6 w-6 text-indigo-600 mr-2" />
            <p className="text-xl font-semibold">{userPoints} Points</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rewards.map((reward, index) => (
            <div 
              key={index}
              onClick={() => setSelectedReward(reward)}
              className={`relative bg-white p-6 rounded-xl shadow-sm cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                userPoints >= reward.points ? 'border-2 border-indigo-500' : ''
              } ${selectedReward === reward ? 'ring-2 ring-indigo-500' : ''}`}
            >
              {userPoints >= reward.points && (
                <div className="absolute -top-3 -right-3">
                  <Sparkles className="h-6 w-6 text-indigo-600" />
                </div>
              )}
              
              <div className="flex items-center mb-4">
                {index === 0 ? (
                  <Star className="h-8 w-8 text-gray-400" />
                ) : index === 1 ? (
                  <Star className="h-8 w-8 text-yellow-400" />
                ) : (
                  <Trophy className="h-8 w-8 text-purple-600" />
                )}
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{reward.title}</h3>
              <p className="text-gray-600 mb-4">{reward.description}</p>
              
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${Math.min(100, (userPoints / reward.points) * 100)}%`
                    }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {reward.points} points needed
                </p>
              </div>

              {selectedReward === reward && (
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-2">
                    {reward.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="h-4 w-4 text-indigo-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}