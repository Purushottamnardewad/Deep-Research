'use client';

import { ResearchStep } from '@/types';

interface Props {
  steps: ResearchStep[];
}

export default function ResearchPlan({ steps }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Research Plan</h2>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                step.priority === 'High' ? 'bg-red-100 text-red-800' :
                step.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {step.priority}
              </span>
            </div>
            <p className="text-gray-600 mb-2">{step.description}</p>
            <p className="text-sm text-gray-500">Expected: {step.expectedOutcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
