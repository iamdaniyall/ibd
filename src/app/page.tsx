"use client"
import { useEffect, useState } from 'react';
import JobList from '../components/JobList';
import { Job } from '../types/job';
import axios from 'axios';



export default function Home() {
  const [jobs, setJobs] = useState<any>()
const getData =async ()=>{

  const response = await axios.get('/api/jobs');
  setJobs(response.data)
  console.log('Job added successfully', response.data);
}
useEffect(() => {
  getData()
}, [])

  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Job Listings</h1>
      <JobList jobs={jobs} />
    </div>
    </main>
  );
}

