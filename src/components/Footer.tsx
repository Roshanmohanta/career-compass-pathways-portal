
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary rounded-lg p-1">
                <div className="font-bold text-white text-xl">SP</div>
              </div>
              <span className="font-bold text-lg text-primary">UniPathways</span>
            </div>
            <p className="text-gray-600 text-sm">
              Your complete guide to university streams, courses, and career pathways.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-600 hover:text-primary transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/admin/dashboard" className="text-gray-600 hover:text-primary transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Streams</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses?stream=science" className="text-gray-600 hover:text-primary transition-colors">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/courses?stream=commerce" className="text-gray-600 hover:text-primary transition-colors">
                  Commerce
                </Link>
              </li>
              <li>
                <Link to="/courses?stream=arts" className="text-gray-600 hover:text-primary transition-colors">
                  Arts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Contact</h4>
            <address className="not-italic text-gray-600 text-sm space-y-2">
              <p>123 Education Lane</p>
              <p>Knowledge City, 12345</p>
              <p className="pt-2">Email: info@unipathways.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8">
          <p className="text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} UniPathways. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
