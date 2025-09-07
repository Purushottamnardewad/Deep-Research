'use client';

import { ResearchStep } from '@/types';

interface Props {
  progress: number;
  currentStep: ResearchStep | null;
  completedSteps: ResearchStep[];
}

export default function ResearchProgress({ progress, currentStep, completedSteps }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Research Progress</h2>
      
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Current Step */}
      {currentStep && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Currently Working On:</h3>
          <p className="text-blue-700">{currentStep.title}</p>
          <p className="text-sm text-blue-600 mt-1">{currentStep.description}</p>
        </div>
      )}

      {/* Completed Steps */}
      {completedSteps.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Completed Steps:</h3>
          <div className="space-y-3">
            {completedSteps.map((step, index) => (
              <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-green-800 font-medium">{step.title}</p>
                  <p className="text-sm text-green-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
