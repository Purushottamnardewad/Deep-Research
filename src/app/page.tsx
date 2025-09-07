'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResearchInput from '@/components/ResearchInput';
import ResearchPlan from '@/components/ResearchPlan';
import ResearchProgress from '@/components/ResearchProgress';
import ResearchReport from '@/components/ResearchReport';
import { ResearchState, ResearchStep } from '@/types';

export default function Home() {
  const [research, setResearch] = useState<ResearchState>({
    topic: '',
    plan: [],
    progress: 0,
    currentStep: null,
    completedSteps: [],
    report: null,
    isActive: false
  });
  
  const [error, setError] = useState<string>('');
  const [isDemoMode, setIsDemoMode] = useState<boolean>(false);

  const handleStartResearch = async (topic: string, demoMode: boolean = false) => {
    setError('');
    setResearch(prev => ({ ...prev, topic, isActive: true }));
    
    try {
      // Generate research plan
      const endpoint = demoMode ? '/api/research/demo' : '/api/research/plan';
      const planResponse = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic })
      });
      
      const planResult = await planResponse.json();
      
      if (!planResponse.ok) {
        if (planResult.errorType === 'quota_exceeded') {
          throw new Error('OpenAI API quota exceeded. Please add billing at https://platform.openai.com/account/billing or wait for quota reset.');
        } else if (planResult.errorType === 'model_access') {
          throw new Error('OpenAI model access issue. Please check your API key permissions.');
        } else {
          throw new Error(planResult.error || 'Failed to generate research plan');
        }
      }
      
      if (!planResult.plan || !Array.isArray(planResult.plan)) {
        throw new Error('Invalid research plan received');
      }
      
      const { plan } = planResult;
      setResearch(prev => ({ ...prev, plan }));
      
      // Show demo mode message
      if (planResult.demoMode) {
        setError(''); // Clear any errors
        setIsDemoMode(true);
      } else {
        setIsDemoMode(false);
      }
      
      // Execute research steps (simplified for demo mode)
      const newCompletedSteps: ResearchStep[] = [];
      for (let i = 0; i < plan.length; i++) {
        const step = plan[i];
        setResearch(prev => ({
          ...prev,
          currentStep: step,
          progress: Math.round(((i + 1) / plan.length) * 100)
        }));
        
        const stepResponse = await fetch(demoMode ? '/api/research/demo-execute' : '/api/research/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ step, topic })
        });
        
        const stepResult = await stepResponse.json();
        
        if (!stepResponse.ok) {
          console.error('Step execution failed:', stepResult.error);
          // Continue with next step instead of failing completely
        }
        
        const completedStep = { ...step, result: stepResult };
        newCompletedSteps.push(completedStep);
        
        setResearch(prev => ({
          ...prev,
          completedSteps: [...newCompletedSteps]
        }));
        
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Generate final report
      const reportResponse = await fetch(demoMode ? '/api/research/demo-report' : '/api/research/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          topic, 
          completedSteps: newCompletedSteps
        })
      });
      
      const reportResult = await reportResponse.json();
      
      if (!reportResponse.ok) {
        throw new Error(reportResult.error || 'Failed to generate report');
      }
      
      const { report } = reportResult;
      setResearch(prev => ({ ...prev, report, isActive: false, currentStep: null }));
      
    } catch (error: any) {
      console.error('Research failed:', error);
      setError(error.message || 'Research failed');
      setResearch(prev => ({ ...prev, isActive: false }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Deep Research AI Agent</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
          >
            <strong>Error:</strong> {error}
            <button
              onClick={() => setError('')}
              className="ml-4 text-red-600 hover:text-red-800 underline"
            >
              Dismiss
            </button>
          </motion.div>
        )}
        
        {isDemoMode && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-lg"
          >
            <strong>🎭 Demo Mode:</strong> This is a demonstration using sample data. For real AI research, resolve the OpenAI API quota issue at{' '}
            <a href="https://platform.openai.com/account/billing" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">
              OpenAI Billing
            </a>
          </motion.div>
        )}
        
        <AnimatePresence mode="wait">
          {!research.isActive && !research.report && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ResearchInput onStart={handleStartResearch} />
            </motion.div>
          )}
          
          {research.plan.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ResearchPlan steps={research.plan} />
            </motion.div>
          )}
          
          {research.isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ResearchProgress
                progress={research.progress}
                currentStep={research.currentStep}
                completedSteps={research.completedSteps}
              />
            </motion.div>
          )}
          
          {research.report && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ResearchReport report={research.report} topic={research.topic} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
