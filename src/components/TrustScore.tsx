import React from 'react';
import { Shield, Award, ThumbsUp } from 'lucide-react';

interface TrustScoreProps {
  score: number;
  verifications: string[];
  completedJobs: number;
}

export default function TrustScore({ score, verifications, completedJobs }: TrustScoreProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Shield className="h-6 w-6 text-green-600 mr-2" />
          <h3 className="text-lg font-semibold">Trust Score</h3>
        </div>
        <span className="text-2xl font-bold text-green-600">{score}%</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <Award className="h-5 w-5 text-indigo-600 mr-2" />
          <span className="text-sm">Verified Professional</span>
        </div>
        {verifications.map((verification, index) => (
          <div key={index} className="flex items-center">
            <ThumbsUp className="h-5 w-5 text-indigo-600 mr-2" />
            <span className="text-sm">{verification}</span>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t">
          <span className="text-sm text-gray-600">
            Successfully completed {completedJobs} jobs
          </span>
        </div>
      </div>
    </div>
  );
}