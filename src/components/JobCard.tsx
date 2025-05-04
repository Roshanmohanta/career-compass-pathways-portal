
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
  return (
    <div className="job-card bg-white rounded-lg shadow border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <span className="text-xs text-gray-500">{job.posted}</span>
        </div>
        
        <p className="text-sm font-medium text-gray-800 mb-3">{job.company} • {job.location}</p>
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm font-medium text-gray-900">{job.salary}</span>
          <Badge variant="outline" className="bg-gray-50">{job.type}</Badge>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
        </div>
        
        <div className="mb-5">
          <div className="flex flex-wrap gap-1 mt-1">
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
        
        <div className="flex justify-end">
          <Link to={`/job-details/${job.id}`}>
            <Button size="sm">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
