
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookmarkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  skills: string[];
  description: string;
  saved?: boolean;
}

interface JobCardProps {
  job: Job;
  onSave?: (id: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onSave }) => {
  const handleSaveJob = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onSave) {
      onSave(job.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleSaveJob}
            className="h-8 w-8"
          >
            <BookmarkIcon
              className={cn(
                "h-5 w-5",
                job.saved ? "fill-primary text-primary" : "text-gray-400"
              )}
            />
            <span className="sr-only">
              {job.saved ? "Unsave" : "Save"} this job
            </span>
          </Button>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span className="font-medium">{job.company}</span>
          <span className="mx-2">•</span>
          <span>{job.location}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <p className="text-gray-500">Salary</p>
            <p className="font-medium text-gray-900">{job.salary}</p>
          </div>
          <div>
            <p className="text-gray-500">Job Type</p>
            <p className="font-medium text-gray-900">{job.type}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Required Skills</p>
          <div className="flex flex-wrap gap-1">
            {job.skills.map((skill, index) => (
              <span 
                key={index} 
                className="inline-block bg-gray-100 text-xs px-2 py-0.5 rounded text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-sm text-gray-600 mb-4 line-clamp-3">
          {job.description}
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <div className="text-xs text-gray-500">
            Posted {job.posted}
          </div>
          <Link to={`/jobs/${job.id}`}>
            <Button>Apply Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
