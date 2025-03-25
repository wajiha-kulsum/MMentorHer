
import React from 'react';
import { ArrowRight, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mentorship-purple/90 to-mentorship-blue/90 rounded-3xl"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      
      <div className="content-container relative z-10">
        <div className="glass-panel backdrop-blur-md bg-white/10 p-10 rounded-3xl border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your tech career?</h2>
              <p className="text-white/90 mb-8">
                Join our community of women in tech and connect with mentors who can help guide your career journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="rounded-full text-md py-6 bg-white text-mentorship-purple hover:bg-white/90 hover-float group">
                  <Link to="/signup" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-full text-md py-6 text-white border-white/70 hover:bg-white/10 hover-float">
                  <Link to="/how-it-works">Learn More</Link>
                </Button>
              </div>
              
              <div className="mt-10 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Users size={20} className="text-white" />
                  <span className="text-white/90">5,000+ Mentors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award size={20} className="text-white" />
                  <span className="text-white/90">10,000+ Success Stories</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto opacity-80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M15.5 12L10.5 8.5V15.5L15.5 12Z" fill="currentColor"/>
                    </svg>
                    <p className="mt-2 font-medium">See how it works</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-mentorship-pink rounded-full blur-2xl opacity-40"></div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-mentorship-blue rounded-full blur-2xl opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
