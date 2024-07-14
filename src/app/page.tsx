"use client"
import { useState } from 'react';
import JobList from '../components/JobList';
import { Job } from '../types/job';



export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([
    {
      jobRole: 'Application Developer',
      qualification: 'B.E / B.Tech',
      batch: '2021/2022',
      experience: '0 - 11 months',
      salary: '4.6 LPA',
      jobLocation: 'Bangalore, Hyderabad',
      driveLocation: 'Online (Virtual)',
      driveDate: 'Announced later',
      lastDate: '-',
      applicationUrl: 'https://company.com/careers/application-developer',
    },
    {
      jobRole: 'Backend Developer',
      qualification: 'B.E / B.Tech',
      batch: '2020/2021',
      experience: '1 - 2 years',
      salary: '6.0 LPA',
      jobLocation: 'Chennai, Pune',
      driveLocation: 'Offline',
      driveDate: 'August 15, 2024',
      lastDate: 'July 30, 2024',
      applicationUrl: 'https://company.com/careers/backend-developer',
    }
  ]);
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Job Listings</h1>
      <JobList jobs={jobs} />
    </div>
    </main>
  );
}

