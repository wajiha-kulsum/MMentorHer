
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-20">
          <div className="inline-block">
            <div className="h-24 w-24 mx-auto bg-gradient-to-br from-mentorship-purple/20 to-mentorship-blue/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-5xl font-bold bg-gradient-to-r from-mentorship-purple to-mentorship-blue bg-clip-text text-transparent">404</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button className="rounded-full text-md py-6 px-8 bg-gradient-to-r from-mentorship-purple to-mentorship-blue hover:opacity-90 hover-float group">
            <Link to="/" className="flex items-center gap-2">
              <Home size={18} />
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
