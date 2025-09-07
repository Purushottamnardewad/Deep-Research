import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { saveResearch } from '@/lib/database';

export async function POST(request: NextRequest) {
  const { topic, completedSteps } = await request.json();
  
  console.log('🔍 Generating final report for:', topic);
  console.log('📋 Completed steps:', completedSteps.length);
  
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'OpenAI API key not configured on server' }, { status: 500 });
  }
  
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  
  try {
    console.log('🤖 Calling OpenAI for comprehensive report generation...');
    
    // Prepare research findings summary
    const researchSummary = completedSteps.map((step: any, index: number) => 
      `\n${index + 1}. ${step.title}:\n${step.result?.content || 'No content available'}\n`
    ).join('\n');
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an expert research report writer. Create comprehensive, professional research reports that synthesize findings into actionable insights. 
          
          Your reports should be:
          - Well-structured and professionally written
          - Based on the research findings provided
          - Comprehensive yet concise
          - Actionable with practical recommendations
          - Forward-looking with future research directions
          
          You MUST respond with valid JSON only.`
        },
        {
          role: "user",
          content: `Create a final comprehensive research report for: "${topic}"
          
          Based on these completed research steps and their findings:
          ${researchSummary}
          
          You MUST return ONLY valid JSON with exactly this structure:
          {
            "executiveSummary": "A comprehensive 2-3 paragraph executive summary of all key findings about ${topic}",
            "sections": [
              {
                "title": "Section Title",
                "content": "Detailed section content synthesizing research findings"
              }
            ],
            "keyFindings": [
              "Specific finding 1 about ${topic}",
              "Specific finding 2 about ${topic}"
            ],
            "recommendations": [
              "Actionable recommendation 1 based on research",
              "Actionable recommendation 2 based on research"
            ],
            "futureResearch": [
              "Future research direction 1",
              "Future research direction 2"
            ],
            "citations": [
              "Research source 1 (Based on AI knowledge synthesis)",
              "Research source 2 (Based on AI knowledge synthesis)"
            ]
          }
          
          Requirements:
          - Executive summary should be 150-250 words
          - Include 4-6 main sections covering different aspects of ${topic}
          - Provide 5-8 key findings that are specific to ${topic}
          - Give 4-6 actionable recommendations
          - Suggest 3-5 areas for future research
          - Include 5-8 conceptual citations
          
          Make everything specific to "${topic}" and based on the research findings provided. RESPOND WITH VALID JSON ONLY.`
        }
      ]
    });
    
    const reportContent = completion.choices[0].message.content;
    console.log('✅ Report content generated, length:', reportContent?.length || 0);
    
    if (!reportContent) {
      throw new Error('No report content received from OpenAI');
    }
    
    let report;
    try {
      // Try to extract JSON if the response has extra text
      const jsonMatch = reportContent.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : reportContent;
      report = JSON.parse(jsonString);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      throw new Error('Invalid JSON response from OpenAI: ' + reportContent.substring(0, 100));
    }
    console.log('✅ Successfully generated comprehensive report');
    
    // Save to database
    try {
      await saveResearch({ topic, report, completedSteps });
      console.log('💾 Research saved to database');
    } catch (dbError: any) {
      console.warn('⚠️ Failed to save to database:', dbError.message);
    }
    
    return NextResponse.json({ report });
    
  } catch (error: any) {
    console.error('❌ Error generating research report:', error);
    
    return NextResponse.json({ 
      error: 'Failed to generate comprehensive research report', 
      details: error.message
    }, { status: 500 });
  }
}
