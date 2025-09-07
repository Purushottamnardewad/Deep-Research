import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: NextRequest) {
  const { topic } = await request.json();
  
  console.log('🔍 Planning research for topic:', topic);
  
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'OpenAI API key not configured on server' }, { status: 500 });
  }
  
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  
  try {
    console.log('🤖 Calling OpenAI for research plan...');
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a research planning expert. Create a detailed research plan with 8-10 steps for comprehensive topic analysis. You MUST respond with valid JSON only."
        },
        {
          role: "user",
          content: `Create a comprehensive research plan for: "${topic}". 
          
          You MUST return ONLY a valid JSON object with a "steps" array. Each step should have: 
          - title: Clear, specific research step name
          - description: Detailed explanation of what this step involves  
          - priority: "High", "Medium", or "Low"
          - expectedOutcome: What insights this step should provide
          
          Make the research plan specifically tailored to "${topic}". Include steps like:
          - Background research and current state analysis
          - Technical/detailed analysis of key aspects
          - Comparative analysis with alternatives
          - Expert opinions and industry insights  
          - Future trends and predictions
          - Practical applications and use cases
          - Challenges and limitations
          - Recommendations and conclusions
          
          RESPOND WITH VALID JSON ONLY:
          {
            "steps": [
              {
                "title": "Current Market Analysis of ${topic}",
                "description": "Analyze the current state, key players, and market dynamics of ${topic}",
                "priority": "High", 
                "expectedOutcome": "Clear understanding of current ${topic} landscape"
              }
            ]
          }`
        }
      ]
    });
    
    const planContent = completion.choices[0].message.content;
    console.log('✅ OpenAI response received:', planContent?.substring(0, 200) + '...');
    
    if (!planContent) {
      throw new Error('No content received from OpenAI');
    }
    
    let plan;
    try {
      // Try to extract JSON if the response has extra text
      const jsonMatch = planContent.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : planContent;
      plan = JSON.parse(jsonString);
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      throw new Error('Invalid JSON response from OpenAI: ' + planContent.substring(0, 100));
    }
    
    if (!plan.steps || !Array.isArray(plan.steps)) {
      throw new Error('Invalid plan format received from OpenAI - missing steps array');
    }
    
    console.log('✅ Successfully generated plan with', plan.steps.length, 'steps');
    return NextResponse.json({ plan: plan.steps });
    
  } catch (error: any) {
    console.error('❌ Error generating research plan:', error);
    
    // Handle specific OpenAI errors
    if (error.code === 'insufficient_quota') {
      return NextResponse.json({ 
        error: 'OpenAI API quota exceeded. Please check your billing at https://platform.openai.com/account/billing', 
        details: 'Your OpenAI account has exceeded its usage quota. You need to add billing information or wait for quota reset.',
        errorType: 'quota_exceeded'
      }, { status: 429 });
    }
    
    if (error.code === 'model_not_found') {
      return NextResponse.json({ 
        error: 'OpenAI model not accessible. Please check your API key permissions.', 
        details: error.message,
        errorType: 'model_access'
      }, { status: 400 });
    }
    
    return NextResponse.json({ 
      error: 'Failed to generate research plan with OpenAI', 
      details: error.message,
      errorType: 'general'
    }, { status: 500 });
  }
}
