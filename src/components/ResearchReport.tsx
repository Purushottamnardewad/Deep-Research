'use client';

import { ResearchReport as ResearchReportType } from '@/types';
import ReactMarkdown from 'react-markdown';

interface Props {
  report: ResearchReportType;
  topic: string;
}

export default function ResearchReport({ report, topic }: Props) {
  const exportToPDF = async () => {
    // This would require jsPDF implementation
    console.log('Export to PDF functionality would be implemented here');
  };

  const exportToMarkdown = () => {
    const markdown = `# Research Report: ${topic}

## Executive Summary
${report.executiveSummary}

## Sections
${report.sections.map(section => `### ${section.title}\n${section.content}`).join('\n\n')}

## Key Findings
${report.keyFindings.map(finding => `- ${finding}`).join('\n')}

## Recommendations
${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## Future Research
${report.futureResearch.map(research => `- ${research}`).join('\n')}

## Citations
${report.citations.map(citation => `- ${citation}`).join('\n')}
`;

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${topic.replace(/[^a-zA-Z0-9]/g, '_')}_research_report.md`;
    a.click();
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Research Report</h2>
        <div className="space-x-2">
          <button
            onClick={exportToPDF}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Export PDF
          </button>
          <button
            onClick={exportToMarkdown}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Export Markdown
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Executive Summary</h3>
          <div className="prose max-w-none">
            <ReactMarkdown>{report.executiveSummary}</ReactMarkdown>
          </div>
        </div>

        {report.sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h3>
            <div className="prose max-w-none">
              <ReactMarkdown>{section.content}</ReactMarkdown>
            </div>
          </div>
        ))}

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Findings</h3>
          <ul className="space-y-2">
            {report.keyFindings.map((finding, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">{finding}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommendations</h3>
          <ul className="space-y-2">
            {report.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Future Research</h3>
          <ul className="space-y-2">
            {report.futureResearch.map((research, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-700">{research}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Citations</h3>
          <ul className="space-y-2">
            {report.citations.map((citation, index) => (
              <li key={index} className="text-sm text-gray-600">
                {index + 1}. {citation}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
