
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  active: boolean;
}

const NavItem = ({ href, icon, title, active }: NavItemProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
        active 
          ? "bg-primary text-primary-foreground" 
          : "text-gray-700 hover:bg-gray-100"
      )}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

const AdminSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-4 flex flex-col">
      <div className="flex items-center gap-2 py-4 px-2">
        <div className="bg-primary rounded-lg p-1">
          <div className="font-bold text-white text-xl">SP</div>
        </div>
        <span className="font-bold text-lg">Admin Portal</span>
      </div>

      <nav className="flex-1 space-y-1 mt-8">
        <NavItem 
          href="/admin/dashboard" 
          icon={<span className="text-xl">📊</span>} 
          title="Dashboard" 
          active={currentPath === "/admin/dashboard"} 
        />
        <NavItem 
          href="/admin/courses" 
          icon={<span className="text-xl">📚</span>} 
          title="Courses" 
          active={currentPath === "/admin/courses"} 
        />
        <NavItem 
          href="/admin/colleges" 
          icon={<span className="text-xl">🏫</span>} 
          title="Colleges" 
          active={currentPath === "/admin/colleges"} 
        />
        <NavItem 
          href="/admin/jobs" 
          icon={<span className="text-xl">💼</span>} 
          title="Jobs" 
          active={currentPath === "/admin/jobs"} 
        />
      </nav>

      <div className="border-t border-gray-200 pt-4 mt-auto">
        <NavItem 
          href="/admin/settings" 
          icon={<span className="text-xl">⚙️</span>} 
          title="Settings" 
          active={currentPath === "/admin/settings"} 
        />
        <Link 
          to="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 mt-2"
        >
          <span className="text-xl">🏠</span>
          <span>Back to Website</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
