
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-20 pb-10 bg-gradient-to-r from-mentorship-purple/5 to-mentorship-blue/5">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-mentorship-pink/10 to-transparent rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-mentorship-purple/10 to-transparent rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
      
      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-mentorship-purple to-mentorship-blue flex items-center justify-center">
                <span className="text-white font-bold">TM</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-mentorship-purple to-mentorship-blue bg-clip-text text-transparent">
                TechMentor
              </span>
            </Link>
            <p className="text-gray-600 mb-6 pr-10">
              Empowering women in tech through meaningful mentorship connections and career growth opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover-float text-gray-500 hover:text-mentorship-purple transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover-float text-gray-500 hover:text-mentorship-purple transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover-float text-gray-500 hover:text-mentorship-purple transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover-float text-gray-500 hover:text-mentorship-purple transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover-float text-gray-500 hover:text-mentorship-purple transition-colors duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5">Features</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/matching" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">AI Matching</Link>
              </li>
              <li>
                <Link to="/scheduling" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">Scheduling</Link>
              </li>
              <li>
                <Link to="/communication" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">Video Calls</Link>
              </li>
              <li>
                <Link to="/gamification" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">Gamification</Link>
              </li>
              <li>
                <Link to="/career-path" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">Career Paths</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">Careers</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">Blog</Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">Press</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">Help Center</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">Community</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">Events</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-mentorship-purple transition-colors duration-300">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TechMentor. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-mentorship-purple transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-mentorship-purple transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-gray-500 text-sm hover:text-mentorship-purple transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
