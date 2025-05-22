
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, LogIn, UserRound, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn, user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold gradient-text">CloudLab</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            {isLoggedIn && (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-lab-600 transition-colors px-3 py-2 text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/resources" className="text-gray-700 hover:text-lab-600 transition-colors px-3 py-2 text-sm font-medium">
                  Resources
                </Link>
              </>
            )}
            <Link to="/about" className="text-gray-700 hover:text-lab-600 transition-colors px-3 py-2 text-sm font-medium">
              About
            </Link>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-700">
                  <UserRound className="mr-1 h-5 w-5" />
                  <span>{user?.name}</span>
                </div>
                <Button 
                  variant="default" 
                  className="bg-lab-600 hover:bg-lab-700"
                  onClick={handleSignOut}
                >
                  <LogOut className="mr-1 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/signin">
                <Button variant="default" className="bg-lab-600 hover:bg-lab-700 flex items-center">
                  <LogIn className="mr-1 h-4 w-4" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-lab-600 hover:bg-gray-100 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg animate-fade-in">
            {isLoggedIn && (
              <>
                <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lab-600 hover:bg-gray-100">
                  Dashboard
                </Link>
                <Link to="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lab-600 hover:bg-gray-100">
                  Resources
                </Link>
              </>
            )}
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lab-600 hover:bg-gray-100">
              About
            </Link>
            
            {isLoggedIn ? (
              <>
                <div className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700">
                  <UserRound className="mr-1 h-5 w-5" />
                  {user?.name}
                </div>
                <Button 
                  variant="default" 
                  className="w-full bg-lab-600 hover:bg-lab-700"
                  onClick={handleSignOut}
                >
                  <LogOut className="mr-1 h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/signin" className="w-full">
                <Button variant="default" className="w-full bg-lab-600 hover:bg-lab-700 flex items-center justify-center">
                  <LogIn className="mr-1 h-4 w-4" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
