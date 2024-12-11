import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wind, Pipette, Zap, Hammer, Sparkles } from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const iconMap = {
  'wind': Wind,
  'pipe': Pipette,
  'zap': Zap,
  'hammer': Hammer,
  'spray-can': Sparkles
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const navigate = useNavigate();
  const Icon = iconMap[category.icon as keyof typeof iconMap];

  const handleClick = () => {
    navigate(`/service/${category.name.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-indigo-100 rounded-full mb-4">
          {Icon && <Icon className="h-8 w-8 text-indigo-600" />}
        </div>
        <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
        <p className="text-gray-600 text-sm">{category.description}</p>
      </div>
    </div>
  );
}