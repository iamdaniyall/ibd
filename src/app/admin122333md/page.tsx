"use client"
import JobForm from '@/components/JobForm';
import JobList from '@/components/JobList';
import { Job } from '@/types/job';
import { useState } from 'react';

const Admin: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const addJob = (job: Job) => {
    setJobs([...jobs, job]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <JobForm onSubmit={addJob} />
      {/* <h2 className="text-2xl font-bold mt-8 mb-4">Manage Jobs</h2>
      <JobList jobs={jobs} /> */}
    </div>
  );
};

export default Admin;
