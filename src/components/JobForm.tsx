import axios from 'axios';
import { useState } from 'react';
import { Job } from '../types/job';

interface JobFormProps {
  onSubmit: (job: Job) => void;
}

const JobForm: React.FC<JobFormProps> = ({ onSubmit }) => {
  const [job, setJob] = useState<Job>({
    id: '',
    jobRole: '',
    qualification: '',
    batch: '',
    experience: '',
    salary: '',
    jobLocation: '',
    driveLocation: '',
    driveDate: '',
    lastDate: '',
    applicationUrl: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/jobs', job, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'your-secure-password'
        }
      });
      console.log('Job added successfully', response.data);
      onSubmit({ ...job, id: new Date().toISOString() });
      setJob({
        id: '',
        jobRole: '',
        qualification: '',
        batch: '',
        experience: '',
        salary: '',
        jobLocation: '',
        driveLocation: '',
        driveDate: '',
        lastDate: '',
        applicationUrl: ''
      });
    } catch (error) {
      console.error('Error adding job', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">Job Role</label>
          <input
            type="text"
            name="jobRole"
            value={job.jobRole}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-sm font-medium text-gray-700">Qualification</label>
          <input
            type="text"
            name="qualification"
            value={job.qualification}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">Batch</label>
          <input
            type="text"
            name="batch"
            value={job.batch}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-sm font-medium text-gray-700">Experience</label>
          <input
            type="text"
            name="experience"
            value={job.experience}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">Salary</label>
          <input
            type="text"
            name="salary"
            value={job.salary}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-sm font-medium text-gray-700">Job Location</label>
          <input
            type="text"
            name="jobLocation"
            value={job.jobLocation}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">Drive Location</label>
          <input
            type="text"
            name="driveLocation"
            value={job.driveLocation}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-sm font-medium text-gray-700">Drive Date</label>
          <input
            type="text"
            name="driveDate"
            value={job.driveDate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-sm font-medium text-gray-700">Last Date</label>
          <input
            type="text"
            name="lastDate"
            value={job.lastDate}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-sm font-medium text-gray-700">Application URL</label>
          <input
            type="text"
            name="applicationUrl"
            value={job.applicationUrl}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Job</button>
    </form>
  );
};

export default JobForm;
