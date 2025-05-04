
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface Course {
  id: string;
  name: string;
  stream: 'science' | 'commerce' | 'arts';
  description: string;
  duration: string;
  eligibility: string;
  careers: string[];
  iconText: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const streamColors = {
    science: 'border-science text-science',
    commerce: 'border-commerce text-commerce',
    arts: 'border-arts text-arts'
  };

  return (
    <div className="course-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className={cn("mb-2 inline-flex items-center text-xs font-medium uppercase tracking-wider rounded-full px-2 py-1",
              course.stream === 'science' && 'bg-blue-50 text-science',
              course.stream === 'commerce' && 'bg-green-50 text-commerce',
              course.stream === 'arts' && 'bg-orange-50 text-arts'
            )}>
              {course.stream}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{course.name}</h3>
          </div>
          <div className={cn("flex items-center justify-center h-12 w-12 rounded-full text-white text-xl font-semibold",
            course.stream === 'science' && 'bg-science',
            course.stream === 'commerce' && 'bg-commerce',
            course.stream === 'arts' && 'bg-arts'
          )}>
            {course.iconText}
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-baseline">
            <span className="font-medium text-sm text-gray-700 w-24">Duration:</span>
            <span className="text-gray-600 text-sm">{course.duration}</span>
          </div>
          <div className="flex items-baseline">
            <span className="font-medium text-sm text-gray-700 w-24">Eligibility:</span>
            <span className="text-gray-600 text-sm">{course.eligibility}</span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 text-sm line-clamp-3">{course.description}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-1">
            {course.careers.slice(0, 2).map((career, index) => (
              <span 
                key={index}
                className="inline-block bg-gray-100 text-xs px-2 py-1 rounded text-gray-600"
              >
                {career}
              </span>
            ))}
            {course.careers.length > 2 && (
              <span className="inline-block bg-gray-100 text-xs px-2 py-1 rounded text-gray-600">
                +{course.careers.length - 2} more
              </span>
            )}
          </div>
          <Link to={`/courses/${course.id}`}>
            <Button size="sm" variant="outline">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
