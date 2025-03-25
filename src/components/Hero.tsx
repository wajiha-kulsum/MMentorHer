
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Aurora background gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-300/40 to-transparent rounded-full blur-3xl opacity-70 -translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-300/30 to-transparent rounded-full blur-3xl opacity-70 translate-x-1/3 translate-y-1/4"></div>
      <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-br from-cyan-300/20 to-transparent rounded-full blur-3xl opacity-60"></div>
      
      <div className="content-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 animate-pulse-slow">Women in Tech</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Where your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">data</span> turns into <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">software</span> with a click
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Build custom portals, CRMs, and tools effortlessly. From concept to launch in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="rounded-full text-md py-6 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 hover-float group">
                <Link to="/signup" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" className="rounded-full text-md py-6 px-8 border-blue-600 text-blue-600 hover:bg-blue-50/50 hover-float">
                <Link to="/how-it-works" className="flex items-center gap-2">
                  Watch Demo
                  <span className="ml-1 text-xs bg-gray-100 px-2 py-1 rounded-full">3mins</span>
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 glass-panel p-8 rounded-3xl animate-float shadow-xl bg-white/20 backdrop-blur-xl border border-white/30">
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl"></div>
              
              {/* Floating brand icons */}
              <div className="absolute -top-10 -left-10 h-20 w-20 rounded-full bg-white shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">S</div>
              </div>
              
              <div className="absolute -top-5 right-20 h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1.2s" }}>
                <div className="h-10 w-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#107C41" width="28" height="28">
                    <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm12 4l-4 6h-2l-2-2-2 4H5v-2h2l2-4 2 2 2-3 4 1z" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "0.8s" }}>
                <div className="h-10 w-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="#2CA01C" width="28" height="28">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-4 right-10 h-18 w-18 rounded-full bg-white shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="h-12 w-12 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="#34A853" width="28" height="28">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.6 16H6.6c-.9 0-1.6-.7-1.6-1.6V6.6C5 5.7 5.7 5 6.6 5h10.8c.9 0 1.6.7 1.6 1.6v10.8c0 .9-.7 1.6-1.6 1.6z" />
                    <path d="M9.7 12L8 10.3v5.5h5.5l-1.8-1.8 1.2-1.2 3.6 3.6-3.6 3.6-1.2-1.2 1.8-1.8H6.8V9l3 3z" />
                  </svg>
                </div>
              </div>
              
              {/* Main Content - Browser window mockup */}
              <div className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-200">
                <div className="bg-gray-100 px-4 py-2 flex items-center space-x-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  <div className="ml-2 h-4 bg-gray-200 rounded-full w-1/2"></div>
                </div>
                <div className="p-4 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6 mx-auto mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-100/10 to-indigo-100/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
