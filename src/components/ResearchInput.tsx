'use client';

import { useState } from 'react';

interface Props {
  onStart: (topic: string, demoMode?: boolean) => void;
}

export default function ResearchInput({ onStart }: Props) {
  const [topic, setTopic] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      onStart(topic);
    }
  };
  
  const handleDemo = () => {
    onStart(topic || 'Best Electric Cars in 2024', true);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Start New Research</h2>
      <p className="text-gray-600 mb-6">
        Enter any topic you&apos;d like to research. Our AI agent will create a comprehensive research plan and execute it automatically.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter research topic (e.g., 'Best Electric Cars in 2024', 'Future of Artificial Intelligence')"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-lg"
          required
        />
        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={!topic.trim()}
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            🚀 Start AI Research
          </button>
          <button
            type="button"
            onClick={handleDemo}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
            title="Try demo mode if you have API quota issues"
          >
            🎭 Demo Mode
          </button>
        </div>
      </form>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">How it works:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• AI creates a detailed 8-10 step research plan</li>
          <li>• Each step is executed automatically using advanced AI</li>
          <li>• Real-time progress tracking with live updates</li>
          <li>• Comprehensive final report with exportable formats</li>
        </ul>
        <div className="mt-3 pt-3 border-t border-blue-200">
          <p className="text-sm text-blue-600">
            <strong>Note:</strong> If you encounter API quota issues, use Demo Mode to explore the interface with sample data.
          </p>
        </div>
      </div>
    </div>
  );
}
