import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { topic } = await request.json();
  
  console.log('🎭 Demo mode: Planning research for topic:', topic);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const mockPlan = [
    {
      title: `Market Analysis of ${topic}`,
      description: `Comprehensive analysis of the current market landscape and trends for ${topic}`,
      priority: "High",
      expectedOutcome: `Detailed understanding of ${topic} market dynamics`
    },
    {
      title: `Technical Specifications and Features`,
      description: `Deep dive into technical aspects, specifications, and key features related to ${topic}`,
      priority: "High",
      expectedOutcome: `Technical comparison and feature analysis`
    },
    {
      title: `Performance and Benchmarking`,
      description: `Evaluate performance metrics, benchmarks, and real-world testing results for ${topic}`,
      priority: "High",
      expectedOutcome: `Performance data and comparative analysis`
    },
    {
      title: `Cost-Benefit Analysis`,
      description: `Analyze pricing, value proposition, and return on investment for ${topic}`,
      priority: "Medium",
      expectedOutcome: `Financial assessment and cost considerations`
    },
    {
      title: `User Experience and Reviews`,
      description: `Examine user feedback, reviews, and real-world experience with ${topic}`,
      priority: "Medium",
      expectedOutcome: `User satisfaction and experience insights`
    },
    {
      title: `Industry Expert Opinions`,
      description: `Gather and analyze expert opinions and professional reviews about ${topic}`,
      priority: "Medium",
      expectedOutcome: `Professional perspectives and expert insights`
    },
    {
      title: `Future Trends and Developments`,
      description: `Research upcoming trends, innovations, and future developments in ${topic}`,
      priority: "Low",
      expectedOutcome: `Forward-looking analysis and trend predictions`
    },
    {
      title: `Recommendations and Conclusions`,
      description: `Synthesize findings and provide actionable recommendations regarding ${topic}`,
      priority: "High",
      expectedOutcome: `Clear recommendations and strategic insights`
    }
  ];
  
  return NextResponse.json({ plan: mockPlan, demoMode: true });
}
