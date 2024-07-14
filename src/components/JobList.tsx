import React from 'react';
import Link from 'next/link';
import { Job } from '../types/job';

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg shadow-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drive Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drive Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apply</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {jobs.map((job, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{job.jobRole}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.qualification}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.batch}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.experience}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.salary}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.jobLocation}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.driveLocation}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.driveDate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.lastDate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <Link href={job.applicationUrl}>
                  <span className="text-blue-600 hover:text-blue-800 transition-colors">Apply &rarr;</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
