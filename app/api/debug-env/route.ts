import { NextResponse } from 'next/server';

export async function GET() {
  const workflowApiUrl = process.env.WORKFLOW_API_URL;
  
  return NextResponse.json({
    hasWorkflowApiUrl: !!workflowApiUrl,
    workflowApiUrlLength: workflowApiUrl?.length || 0,
    workflowApiUrlPreview: workflowApiUrl 
      ? `${workflowApiUrl.substring(0, 20)}...` 
      : 'NOT SET',
    allEnvKeys: Object.keys(process.env).filter(k => 
      k.includes('WORKFLOW') || k.includes('API')
    )
  });
}
