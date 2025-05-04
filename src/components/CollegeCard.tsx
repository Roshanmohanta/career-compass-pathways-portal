
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export interface College {
  id: string;
  name: string;
  location: string;
  avgSalary: string;
  fees: string;
  companies: string[];
  applicationDeadline: string;
  courseId: string;
}

interface CollegeCardProps {
  college: College;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college }) => {
  return (
    <div className="college-card bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{college.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{college.location}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-xs text-gray-500 mb-1">Avg. Salary Package</p>
            <p className="text-base font-medium text-gray-900">{college.avgSalary}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Admission Fees</p>
            <p className="text-base font-medium text-gray-900">{college.fees}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Top Recruiting Companies</p>
          <div className="flex flex-wrap gap-1">
            {college.companies.slice(0, 3).map((company, index) => (
              <span 
                key={index} 
                className="inline-block bg-gray-100 text-xs px-2 py-0.5 rounded text-gray-700"
              >
                {company}
              </span>
            ))}
            {college.companies.length > 3 && (
              <span className="inline-block bg-gray-100 text-xs px-2 py-0.5 rounded text-gray-700">
                +{college.companies.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <div className="text-xs">
            <p className="text-gray-500">Application Deadline</p>
            <p className="font-medium text-red-600">{college.applicationDeadline}</p>
          </div>
          <Link to={`/colleges/${college.id}?course=${college.courseId}`}>
            <Button size="sm">View College</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
