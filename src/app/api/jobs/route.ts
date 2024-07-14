import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const jobsFilePath = path.join(process.cwd(), 'public', 'jobs.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'your-secure-password';

// Helper function to check admin password
function isAdminAuthorized(request: NextRequest): boolean {
  const password = request.headers.get('authorization');
  console.log({password});
  
//   return password === 'Authorization'; Added temp for testing
  return password === ADMIN_PASSWORD;
}

// Handler for GET requests
export async function GET() {
  const jsonData = fs.readFileSync(jobsFilePath, 'utf-8');
  const jobs = JSON.parse(jsonData);
  return NextResponse.json(jobs);
}

// Handler for POST requests (Add job)
export async function POST(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const job = await request.json();

    const jsonData = fs.readFileSync(jobsFilePath, 'utf-8');
    const jobs = JSON.parse(jsonData);

    jobs.push({ ...job, id: new Date().toISOString() });

    fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2));

    return new NextResponse(JSON.stringify({ message: 'Job added successfully' }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Handler for DELETE requests
export async function DELETE(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const { id } = await request.json();

    const jsonData = fs.readFileSync(jobsFilePath, 'utf-8');
    let jobs = JSON.parse(jsonData);

    jobs = jobs.filter((job: any) => job.id !== id);

    fs.writeFileSync(jobsFilePath, JSON.stringify(jobs, null, 2));

    return new NextResponse(JSON.stringify({ message: 'Job deleted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
