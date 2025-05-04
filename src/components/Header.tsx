
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary rounded-lg p-1">
            <div className="font-bold text-white text-2xl">SP</div>
          </div>
          <span className="font-bold text-xl text-primary">
            UniPathways
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/courses" className="text-gray-700 hover:text-primary transition-colors">
            Explore Courses
          </Link>
          <Link to="/jobs" className="text-gray-700 hover:text-primary transition-colors">
            Find Jobs
          </Link>
          <Link to="/admin/dashboard" className="text-gray-700 hover:text-primary transition-colors">
            Admin
          </Link>
          <Button variant="secondary" className="ml-4">
            Sign In
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-4 absolute w-full z-50 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className="text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Explore Courses
            </Link>
            <Link 
              to="/jobs" 
              className="text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Find Jobs
            </Link>
            <Link 
              to="/admin/dashboard" 
              className="text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Admin
            </Link>
            <Button variant="secondary" className="w-full">
              Sign In
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
