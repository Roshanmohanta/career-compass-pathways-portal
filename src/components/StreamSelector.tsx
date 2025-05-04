
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type Stream = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
};

const streams: Stream[] = [
  {
    id: 'science',
    name: 'Science',
    description: 'Explore engineering, medicine, and scientific research pathways.',
    icon: '🔬',
    color: 'text-science',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'commerce',
    name: 'Commerce',
    description: 'Discover business, accounting, and finance career options.',
    icon: '📊',
    color: 'text-commerce',
    bgColor: 'bg-green-50',
  },
  {
    id: 'arts',
    name: 'Arts',
    description: 'Pursue creative, humanities, and liberal arts education.',
    icon: '🎨',
    color: 'text-arts',
    bgColor: 'bg-orange-50',
  },
];

const StreamSelector = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
      {streams.map((stream) => (
        <Link 
          key={stream.id}
          to={`/courses?stream=${stream.id}`}
          className={cn(
            "stream-card rounded-xl shadow-md overflow-hidden border border-gray-100",
            "hover:border-gray-200"
          )}
        >
          <div className={cn("p-6", stream.bgColor)}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={cn("text-2xl font-bold", stream.color)}>
                {stream.name}
              </h3>
              <span className="text-3xl">{stream.icon}</span>
            </div>
            <p className="text-gray-600 mb-4">{stream.description}</p>
            <div className={cn(
              "inline-flex items-center font-medium",
              stream.id === 'science' && "text-science",
              stream.id === 'commerce' && "text-commerce",
              stream.id === 'arts' && "text-arts",
            )}>
              Explore {stream.name} <span className="ml-1">→</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StreamSelector;
