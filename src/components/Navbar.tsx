
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-white/40 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="content-container">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold">WM</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              WomenTech
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover-float focus-ring text-gray-700">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-medium hover-float focus-ring text-gray-700">
                <span>Features</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/90 backdrop-blur-xl border border-white/30 w-56 rounded-xl shadow-lg">
                <Link to="/matching">
                  <DropdownMenuItem className="rounded-lg cursor-pointer">
                    AI Matching
                  </DropdownMenuItem>
                </Link>
                <Link to="/scheduling">
                  <DropdownMenuItem className="rounded-lg cursor-pointer">
                    Scheduling
                  </DropdownMenuItem>
                </Link>
                <Link to="/communication">
                  <DropdownMenuItem className="rounded-lg cursor-pointer">
                    Video Calls
                  </DropdownMenuItem>
                </Link>
                <Link to="/gamification">
                  <DropdownMenuItem className="rounded-lg cursor-pointer">
                    Gamification
                  </DropdownMenuItem>
                </Link>
                <Link to="/career-path">
                  <DropdownMenuItem className="rounded-lg cursor-pointer">
                    Career Paths
                  </DropdownMenuItem>
                </Link>
                <Link to="/community">
                  <DropdownMenuItem className="rounded-lg cursor-pointer">
                    Community
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/about" className="font-medium hover-float focus-ring text-gray-700">
              About
            </Link>
            <Link to="/pricing" className="font-medium hover-float focus-ring text-gray-700">
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full hover-float border-blue-600 text-blue-600">
              <Link to="/login">Log in</Link>
            </Button>
            <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 hover-float">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel mt-4 py-4 px-4 rounded-xl animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="px-3 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/matching"
                className="px-3 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                onClick={toggleMenu}
              >
                AI Matching
              </Link>
              <Link
                to="/scheduling"
                className="px-3 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Scheduling
              </Link>
              <Link
                to="/communication"
                className="px-3 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Video Calls
              </Link>
              <Link
                to="/gamification"
                className="px-3 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Gamification
              </Link>
              <Link
                to="/career-path"
                className="px-3 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Career Paths
              </Link>
              <Link
                to="/community"
                className="px-3 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Community
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/pricing"
                className="px-3 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
                <Button variant="outline" className="w-full rounded-full border-blue-600 text-blue-600" onClick={toggleMenu}>
                  <Link to="/login">Log in</Link>
                </Button>
                <Button
                  className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                  onClick={toggleMenu}
                >
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
